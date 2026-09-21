"use client";

import { useEffect, useState } from "react";
import { FaPhone, FaEnvelope, FaSyncAlt, FaLock, FaFileDownload } from "react-icons/fa";

// --- CSV export helpers -----------------------------------------------
// We export CSV (not a "real" .xlsx binary) on purpose: Excel opens CSV
// files natively with a plain double-click, it needs zero extra
// dependencies, and it avoids shipping a client-side spreadsheet library
// (e.g. the popular `xlsx`/SheetJS package) whose npm release currently
// has known, unpatched vulnerabilities. A UTF-8 BOM is included so Excel
// renders Hindi/Devanagari text correctly instead of garbling it.

function csvEscape(value) {
  const str = value === null || value === undefined ? "" : String(value);
  if (/[",\n]/.test(str)) {
    return `"${str.replace(/"/g, '""')}"`;
  }
  return str;
}

function rowsToCsv(headers, rows) {
  const lines = [headers.join(",")];
  for (const row of rows) {
    lines.push(row.map(csvEscape).join(","));
  }
  return "\uFEFF" + lines.join("\r\n"); // BOM + CRLF for best Excel compatibility
}

function downloadCsv(filename, headers, rows) {
  const csv = rowsToCsv(headers, rows);
  const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

function personLeadsToCsv(leads, { includeAstrologer }) {
  const headers = includeAstrologer
    ? ["Submitted", "Name", "Age", "DOB", "Mobile", "Astrologer"]
    : ["Submitted", "Name", "Age", "DOB", "Mobile"];
  const rows = leads.map((l) => {
    const base = [
      new Date(l.submittedAt).toLocaleString(),
      l.name,
      l.age,
      l.dob,
      l.mobile,
    ];
    return includeAstrologer ? [...base, l.astrologerName] : base;
  });
  return { headers, rows };
}

function contactLeadsToCsv(leads) {
  const headers = ["Submitted", "Name", "Email", "Phone", "Subject", "Message"];
  const rows = leads.map((l) => [
    new Date(l.submittedAt).toLocaleString(),
    l.name,
    l.email,
    l.phone || "",
    l.subject,
    l.message,
  ]);
  return { headers, rows };
}

function todayStamp() {
  return new Date().toISOString().split("T")[0];
}

function DownloadButton({ onClick, label }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full"
      style={{
        background: "rgba(74,222,128,0.1)",
        color: "#4ade80",
        border: "1px solid rgba(74,222,128,0.25)",
      }}
      aria-label={label}
    >
      <FaFileDownload size={11} aria-hidden="true" />
      Download
    </button>
  );
}

function EmptyState({ text }) {
  return (
    <p className="text-sm" style={{ color: "#9a9ab0" }}>
      {text}
    </p>
  );
}

function SectionHeading({ children, count, onDownload }) {
  return (
    <div className="flex items-center justify-between flex-wrap gap-3 mb-4">
      <h2
        className="text-lg font-bold text-white flex items-center gap-2"
        style={{ fontFamily: "var(--font-playfair), serif" }}
      >
        {children}{" "}
        <span
          className="text-xs font-semibold px-2.5 py-1 rounded-full"
          style={{ background: "rgba(201,168,76,0.15)", color: "#c9a84c" }}
        >
          {count}
        </span>
      </h2>
      {count > 0 && onDownload && (
        <DownloadButton onClick={onDownload} label={`Download ${children} as CSV`} />
      )}
    </div>
  );
}

// Shared by "Register" and "Talk to Astrologer" leads — both collect the
// same fields (name, age, dob, mobile); the astrologer column is only
// meaningful for consultation leads.
function PersonDetailsTable({ leads, showAstrologer }) {
  const headers = showAstrologer
    ? ["Submitted", "Name", "Age", "DOB", "Mobile", "Astrologer"]
    : ["Submitted", "Name", "Age", "DOB", "Mobile"];

  return (
    <div
      className="rounded-2xl overflow-x-auto"
      style={{
        background: "rgba(255,255,255,0.03)",
        border: "1px solid rgba(201,168,76,0.15)",
      }}
    >
      <table className="w-full text-sm text-left min-w-[640px]">
        <thead>
          <tr style={{ borderBottom: "1px solid rgba(201,168,76,0.15)" }}>
            {headers.map((h) => (
              <th
                key={h}
                className="px-4 py-3 font-semibold text-xs uppercase tracking-wider"
                style={{ color: "#c9a84c" }}
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {leads.map((lead) => (
            <tr key={lead.id} style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
              <td className="px-4 py-3 whitespace-nowrap" style={{ color: "#9a9ab0" }}>
                {new Date(lead.submittedAt).toLocaleString()}
              </td>
              <td className="px-4 py-3 text-white font-medium whitespace-nowrap">{lead.name}</td>
              <td className="px-4 py-3" style={{ color: "#9a9ab0" }}>{lead.age}</td>
              <td className="px-4 py-3 whitespace-nowrap" style={{ color: "#9a9ab0" }}>{lead.dob}</td>
              <td className="px-4 py-3 whitespace-nowrap">
                <a
                  href={`tel:+91${lead.mobile}`}
                  className="flex items-center gap-1.5 no-underline"
                  style={{ color: "#4ade80" }}
                >
                  <FaPhone size={11} aria-hidden="true" />
                  {lead.mobile}
                </a>
              </td>
              {showAstrologer && (
                <td className="px-4 py-3 whitespace-nowrap" style={{ color: "#9a9ab0" }}>
                  {lead.astrologerName}
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function ContactTable({ leads }) {
  return (
    <div
      className="rounded-2xl overflow-x-auto"
      style={{
        background: "rgba(255,255,255,0.03)",
        border: "1px solid rgba(201,168,76,0.15)",
      }}
    >
      <table className="w-full text-sm text-left min-w-[820px]">
        <thead>
          <tr style={{ borderBottom: "1px solid rgba(201,168,76,0.15)" }}>
            {["Submitted", "Name", "Email", "Phone", "Subject", "Message"].map((h) => (
              <th
                key={h}
                className="px-4 py-3 font-semibold text-xs uppercase tracking-wider"
                style={{ color: "#c9a84c" }}
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {leads.map((lead) => (
            <tr key={lead.id} style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
              <td className="px-4 py-3 whitespace-nowrap" style={{ color: "#9a9ab0" }}>
                {new Date(lead.submittedAt).toLocaleString()}
              </td>
              <td className="px-4 py-3 text-white font-medium whitespace-nowrap">{lead.name}</td>
              <td className="px-4 py-3 whitespace-nowrap">
                <a
                  href={`mailto:${lead.email}`}
                  className="flex items-center gap-1.5 no-underline"
                  style={{ color: "#4ade80" }}
                >
                  <FaEnvelope size={11} aria-hidden="true" />
                  {lead.email}
                </a>
              </td>
              <td className="px-4 py-3 whitespace-nowrap" style={{ color: "#9a9ab0" }}>
                {lead.phone ? (
                  <a href={`tel:${lead.phone}`} className="no-underline" style={{ color: "#4ade80" }}>
                    {lead.phone}
                  </a>
                ) : (
                  "—"
                )}
              </td>
              <td className="px-4 py-3 whitespace-nowrap" style={{ color: "#9a9ab0" }}>
                {lead.subject}
              </td>
              <td className="px-4 py-3 max-w-xs" style={{ color: "#9a9ab0" }}>
                <span className="line-clamp-2">{lead.message}</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function LeadsAdminContent() {
  const [key, setKey] = useState("");
  const [keyInput, setKeyInput] = useState("");
  const [leads, setLeads] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // Remember the admin key for this browser only (never sent anywhere
  // except to our own /api/leads endpoint).
  useEffect(() => {
    const saved = window.localStorage.getItem("ga_admin_key");
    if (saved) {
      setKey(saved);
      setKeyInput(saved);
    }
  }, []);

  const fetchLeads = async (activeKey) => {
    if (!activeKey) return;
    setLoading(true);
    setError("");
    try {
      const res = await fetch(`/api/leads?key=${encodeURIComponent(activeKey)}`);
      const json = await res.json();
      if (!res.ok || !json.success) {
        throw new Error(json?.message || "Unable to load leads");
      }
      setLeads(json.leads);
      window.localStorage.setItem("ga_admin_key", activeKey);
    } catch (err) {
      setError(err.message || "Unable to load leads");
      setLeads(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (key) fetchLeads(key);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key]);

  const handleUnlock = (e) => {
    e.preventDefault();
    setKey(keyInput.trim());
  };

  const inputStyle = {
    background: "rgba(255,255,255,0.05)",
    border: "1px solid rgba(201,168,76,0.2)",
    color: "#e8e8e8",
  };

  const registerLeads = (leads || []).filter((l) => l.type === "register");
  const consultationLeads = (leads || []).filter((l) => l.type === "consultation");
  const contactLeads = (leads || []).filter((l) => l.type === "contact");

  const downloadRegister = () => {
    const { headers, rows } = personLeadsToCsv(registerLeads, { includeAstrologer: false });
    downloadCsv(`register-leads-${todayStamp()}.csv`, headers, rows);
  };
  const downloadConsultation = () => {
    const { headers, rows } = personLeadsToCsv(consultationLeads, { includeAstrologer: true });
    downloadCsv(`talk-to-astrologer-leads-${todayStamp()}.csv`, headers, rows);
  };
  const downloadContact = () => {
    const { headers, rows } = contactLeadsToCsv(contactLeads);
    downloadCsv(`contact-us-leads-${todayStamp()}.csv`, headers, rows);
  };
  const downloadAll = () => {
    const headers = [
      "Type",
      "Submitted",
      "Name",
      "Age",
      "DOB",
      "Mobile",
      "Astrologer",
      "Email",
      "Phone",
      "Subject",
      "Message",
    ];
    const typeLabel = { register: "Register", consultation: "Talk to Astrologer", contact: "Contact Us" };
    const rows = (leads || []).map((l) => [
      typeLabel[l.type] || l.type,
      new Date(l.submittedAt).toLocaleString(),
      l.name,
      l.age ?? "",
      l.dob ?? "",
      l.mobile ?? "",
      l.astrologerName ?? "",
      l.email ?? "",
      l.phone ?? "",
      l.subject ?? "",
      l.message ?? "",
    ]);
    downloadCsv(`all-leads-${todayStamp()}.csv`, headers, rows);
  };

  return (
    <section
      className="py-20 lg:py-28 min-h-[70vh]"
      style={{ background: "linear-gradient(135deg, #0d0d1a 0%, #1a1a2e 100%)" }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8 flex-wrap gap-4">
          <h1
            className="text-2xl sm:text-3xl font-bold text-white"
            style={{ fontFamily: "var(--font-playfair), serif" }}
          >
            Website <span style={{ color: "#c9a84c" }}>Leads</span>
          </h1>
          {leads && (
            <div className="flex items-center gap-3 flex-wrap">
              {leads.length > 0 && (
                <button
                  onClick={downloadAll}
                  className="flex items-center gap-2 text-sm px-4 py-2 rounded-full font-semibold"
                  style={{
                    background: "linear-gradient(135deg, #8b1a1a, #6b1414)",
                    color: "#fff",
                  }}
                >
                  <FaFileDownload size={12} aria-hidden="true" />
                  Download All (CSV)
                </button>
              )}
              <button
                onClick={() => fetchLeads(key)}
                className="flex items-center gap-2 text-sm px-4 py-2 rounded-full"
                style={{
                  background: "rgba(255,255,255,0.05)",
                  color: "#c9a84c",
                  border: "1px solid rgba(201,168,76,0.2)",
                }}
              >
                <FaSyncAlt size={12} aria-hidden="true" />
                Refresh
              </button>
            </div>
          )}
        </div>

        {!leads && (
          <form
            onSubmit={handleUnlock}
            className="max-w-sm mx-auto text-center p-8 rounded-3xl"
            style={{
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(201,168,76,0.15)",
            }}
          >
            <FaLock size={28} style={{ color: "#c9a84c" }} className="mx-auto mb-4" aria-hidden="true" />
            <p className="text-sm mb-4" style={{ color: "#9a9ab0" }}>
              Enter the admin key to view submitted leads.
            </p>
            <input
              type="password"
              value={keyInput}
              onChange={(e) => setKeyInput(e.target.value)}
              placeholder="Admin key"
              className="w-full px-4 py-3 rounded-xl text-sm outline-none mb-4"
              style={inputStyle}
            />
            <button type="submit" className="btn-primary w-full" disabled={loading}>
              {loading ? "Checking..." : "View Leads"}
            </button>
            {error && (
              <p className="text-xs mt-3" style={{ color: "#ef4444" }} role="alert">
                {error}
              </p>
            )}
          </form>
        )}

        {leads && leads.length === 0 && (
          <p className="text-center text-sm py-12" style={{ color: "#9a9ab0" }}>
            No leads yet.
          </p>
        )}

        {leads && leads.length > 0 && (
          <div className="space-y-14">
            {/* Register page leads — shown first, as requested */}
            <div>
              <SectionHeading count={registerLeads.length} onDownload={downloadRegister}>Register</SectionHeading>
              {registerLeads.length > 0 ? (
                <PersonDetailsTable leads={registerLeads} showAstrologer={false} />
              ) : (
                <EmptyState text="No registrations yet." />
              )}
            </div>

            {/* Talk to Astrologer / Consult leads */}
            <div>
              <SectionHeading count={consultationLeads.length} onDownload={downloadConsultation}>Talk to Astrologer</SectionHeading>
              {consultationLeads.length > 0 ? (
                <PersonDetailsTable leads={consultationLeads} showAstrologer={true} />
              ) : (
                <EmptyState text="No consultation requests yet." />
              )}
            </div>

            {/* Contact Us leads */}
            <div>
              <SectionHeading count={contactLeads.length} onDownload={downloadContact}>Contact Us</SectionHeading>
              {contactLeads.length > 0 ? (
                <ContactTable leads={contactLeads} />
              ) : (
                <EmptyState text="No contact messages yet." />
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
