import Link from "next/link";

export default function HomePage() {
  return (
    <main id="content">
      <section className="hero">
        <div className="container hero-grid">
          <div>
            <p className="eyebrow">Custom Deck + Fence Builders</p>
            <h1>Custom Deck & Fence Builders</h1>
            <p className="lead">
              Custom decks and fences built for Toronto homes. We combine precise
              craftsmanship, premium materials, and clean design to deliver outdoor
              spaces that last.
            </p>
            <div className="cta-row">
              <Link className="button" href="/contact-us/">
                Get a Quote
              </Link>
              <a className="button secondary" href="tel:2898124560">
                Call (289) 812 4560
              </a>
              <span className="muted">Email: maximumdecks@gmail.com</span>
            </div>
          </div>
          <div className="hero-panel">
            <p className="tagline">Decks, fences, and outdoor living done right.</p>
            <h3>Design-led builds with reliable timelines</h3>
            <p>
              We help you plan, permit, and build a structure that elevates your
              property. Our team focuses on clean lines, safe engineering, and
              materials that handle Ontario seasons.
            </p>
            <div className="pill-row">
              <span className="pill">Composite + Cedar</span>
              <span className="pill">Permit Guidance</span>
              <span className="pill">Clean Install</span>
            </div>
            <div className="stat-row">
              <div className="stat-card">
                <strong>200+</strong>
                <span className="tagline">Projects completed</span>
              </div>
              <div className="stat-card">
                <strong>4.9★</strong>
                <span className="tagline">Client satisfaction</span>
              </div>
              <div className="stat-card">
                <strong>7 days</strong>
                <span className="tagline">Fast response time</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container content-stack">
        <div className="card accent">
          <h2>Premier Deck Building in Toronto</h2>
          <p>
            Best Toronto Decks delivers custom deck construction and fence
            installation for Toronto, North York, Richmond Hill, and Aurora. From
            modern composite builds to warm cedar decks, we build outdoor spaces that
            feel cohesive with your home.
          </p>
        </div>

        <div className="card-grid">
          <Link className="card card-link" href="/services/">
            <h3>Custom Deck Designs</h3>
            <p>
              Tailored layouts, thoughtful railings, and finishes that match your
              home architecture and backyard flow.
            </p>
          </Link>
          <Link className="card card-link" href="/services/">
            <h3>Fence Installation</h3>
            <p>
              Privacy and decorative fences with modern lines, durable posts, and
              hardware that stands up to Toronto weather.
            </p>
          </Link>
          <Link className="card card-link" href="/services/">
            <h3>Composite and Wood Options</h3>
            <p>
              We help you select materials for longevity, maintenance preferences,
              and overall aesthetic.
            </p>
          </Link>
        </div>

        <div className="section-block callout">
          <h2>Why Choose Best Toronto Decks</h2>
          <p>
            We combine local expertise with a design-first approach. Every build is
            planned for safety, comfort, and long-term durability.
          </p>
          <ul>
            <li>Modern techniques with accurate layouts and clean finishing.</li>
            <li>Premium materials including cedar and composite boards.</li>
            <li>Responsive support from planning through final walk-through.</li>
          </ul>
        </div>

        <div className="section-block">
          <h2>Our Process</h2>
          <div className="card-grid">
            <div className="card">
              <h3>Plan</h3>
              <p>
                We start with a site visit, measurements, and a layout plan that
                matches your goals and budget.
              </p>
            </div>
            <div className="card">
              <h3>Design</h3>
              <p>
                Materials, elevations, and finishes are chosen to match your home and
                the surrounding landscape.
              </p>
            </div>
            <div className="card">
              <h3>Build</h3>
              <p>
                We keep the jobsite clean and deliver a safe, code-ready structure
                that holds up for years.
              </p>
            </div>
          </div>
        </div>

        <div className="section-block">
          <h2>FAQ</h2>
          <div className="faq-grid">
            <div className="faq-card">
              <h3>Do I need a permit to build a deck in Toronto?</h3>
              <p>
                Some decks require permits depending on height and attachment. We
                help you check requirements before building.
              </p>
            </div>
            <div className="faq-card">
              <h3>What materials last the longest?</h3>
              <p>
                Composite decking offers low maintenance and durability, while cedar
                provides a classic look with seasonal upkeep.
              </p>
            </div>
            <div className="faq-card">
              <h3>How soon can you start?</h3>
              <p>
                Timelines vary by season and scope. We confirm dates after a site
                visit and design review.
              </p>
            </div>
          </div>
        </div>

        <div className="section-block">
          <h2>Latest Blog</h2>
          <p>
            Read our latest guide on permits, materials, and best practices for
            deck building in Toronto.
          </p>
          <Link className="card card-link" href="/need-a-permit-toronto/">
            <h3>Do I Need a Permit to Build a Deck in Toronto?</h3>
            <p>
              A practical guide to permits, drawings, and planning your build the
              right way.
            </p>
          </Link>
        </div>
      </section>
    </main>
  );
}
