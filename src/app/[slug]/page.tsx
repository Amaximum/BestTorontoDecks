import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import AddressAutocomplete from "@/components/AddressAutocomplete";
import { FaqBlock, SectionBlock } from "@/components/PageBlocks";
import { getPageBySlug, pageSlugs } from "@/content/pages";

export async function generateStaticParams() {
  return pageSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const page = getPageBySlug(slug);
  if (!page) {
    return {};
  }

  return {
    title: page.title,
    description: page.description,
    alternates: {
      canonical: `/${page.slug}/`
    },
    robots: page.noindex
      ? {
          index: false,
          follow: true
        }
      : undefined
  };
}

export default async function ContentPage({
  params
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = getPageBySlug(slug);
  if (!page) {
    notFound();
  }

  const formspreeUrl = process.env.NEXT_PUBLIC_FORMSPREE_URL;
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://besttorontodecks.com";
  const formAction = formspreeUrl
    ? `${formspreeUrl}?redirect=${encodeURIComponent(`${siteUrl}/thank-you-page/`)}`
    : "mailto:maximumdecks@gmail.com";

  return (
    <main id="content">
      <section className="hero hero-inner">
        <div className="container">
          <p className="eyebrow">Best Toronto Decks</p>
          <h1>{page.h1}</h1>
          <p className="lead">{page.intro}</p>
          {page.cta && page.slug !== "contact-us" ? (
            <div className="cta-row">
              <Link className="button" href="/contact-us/">
                Get a Quote
              </Link>
              <span className="muted">{page.cta.body}</span>
            </div>
          ) : null}
        </div>
      </section>

      <div className="container content-stack">
        {page.sections.map((section) => (
          <SectionBlock key={section.title} section={section} />
        ))}
        {page.faqs ? <FaqBlock faqs={page.faqs} /> : null}
        {page.slug === "contact-us" ? (
          <section className="section-block form-block">
            <h2>Contact Us</h2>
            <form className="contact-form" action={formAction} method="post">
              <label>
                Name
                <input name="name" type="text" required />
              </label>
              <label>
                Email
                <input name="email" type="email" required />
              </label>
              <label>
                Phone
                <input name="phone" type="tel" />
              </label>
              <label>
                Service
                <select name="service">
                  <option value="Deck Build">Deck Build</option>
                  <option value="Fence Build">Fence Build</option>
                  <option value="Deck Repair">Deck Repair</option>
                  <option value="Fence Repair">Fence Repair</option>
                  <option value="Consultation">Consultation</option>
                </select>
              </label>
              <label>
                Project Address
                <AddressAutocomplete />
              </label>
              <label>
                Message
                <textarea name="message" rows={5} required />
              </label>
              <button className="button" type="submit">
                Send Message
              </button>
            </form>
            <p className="muted form-note">
              We respond within 24 hours with next steps and scheduling options.
            </p>
          </section>
        ) : null}
      </div>
    </main>
  );
}
