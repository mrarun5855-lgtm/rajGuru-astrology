import { notFound } from "next/navigation";
import AstrologerDetailContent from "@/app/talk-to-astrologer/[slug]/AstrologerDetailContent";
import { astrologers, getAstrologerBySlug, getLocalizedAstrologer } from "@/data/astrologers";

export function generateStaticParams() {
  // NOTE: the [locale] segment already generates {locale: "en"} and
  // {locale: "hi"} in its own generateStaticParams — Next.js combines both
  // levels, so we only need to return the slugs here.
  return astrologers.map((astro) => ({ slug: astro.slug }));
}

export async function generateMetadata({ params }) {
  const { slug, locale } = await params;
  const raw = getAstrologerBySlug(slug);
  if (!raw) {
    return { title: "Astrologer Not Found | Guru Astrology" };
  }
  const astrologer = getLocalizedAstrologer(raw, locale);

  const title = `${astrologer.name} — ${astrologer.specialty} | Guru Astrology`;
  const description = astrologer.shortBio;

  return {
    title,
    description,
    keywords: [astrologer.name, astrologer.specialty, "talk to astrologer", ...astrologer.tags],
    alternates: {
      canonical: `https://www.guruastrology.in/talk-to-astrologer/${astrologer.slug}`,
    },
    openGraph: {
      title,
      description,
      url: `https://www.guruastrology.in/talk-to-astrologer/${astrologer.slug}`,
    },
  };
}

export default async function AstrologerPage({ params }) {
  const { slug, locale } = await params;
  const raw = getAstrologerBySlug(slug);

  if (!raw) {
    notFound();
  }
  const astrologer = getLocalizedAstrologer(raw, locale);

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: astrologer.name,
    jobTitle: astrologer.specialty,
    description: astrologer.shortBio,
    url: `https://www.guruastrology.in/talk-to-astrologer/${astrologer.slug}`,
    knowsLanguage: astrologer.languages,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <AstrologerDetailContent astrologer={raw} />
    </>
  );
}
