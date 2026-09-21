import LeadsAdminContent from "@/app/leads/LeadsAdminContent";

// This page shows personal data (names, phone numbers, emails) submitted
// through the register / consult / contact forms, so it must never be
// statically cached, and it must not be indexed by search engines.
export const dynamic = "force-dynamic";

export const metadata = {
  title: "Website Leads (Admin)",
  robots: { index: false, follow: false },
};

export default function LeadsPage() {
  return <LeadsAdminContent />;
}
