import Link from "next/link";
import { PageFaq, PageSection } from "@/content/pages";

export function SectionBlock({ section }: { section: PageSection }) {
  return (
    <section className="section-block">
      <h2>{section.title}</h2>
      <p>{section.body}</p>
      {section.bullets ? (
        <ul>
          {section.bullets.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      ) : null}
      {section.links ? (
        <div className="section-links">
          {section.links.map((item) => (
            <Link key={item.href} href={item.href} className="pill link-pill">
              {item.label}
            </Link>
          ))}
        </div>
      ) : null}
    </section>
  );
}

export function FaqBlock({ faqs }: { faqs: PageFaq[] }) {
  return (
    <section className="section-block">
      <h2>Frequently Asked Questions</h2>
      <div className="faq-grid">
        {faqs.map((item) => (
          <div key={item.question} className="faq-card">
            <h3>{item.question}</h3>
            <p>{item.answer}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
