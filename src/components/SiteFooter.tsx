import Link from "next/link";

const footerLinks = [
  { label: "Privacy Policy", href: "/privacy-policy/" },
  { label: "Terms and Conditions", href: "/terms-and-conditions/" },
  { label: "Services", href: "/services/" },
  { label: "Contact", href: "/contact-us/" }
];

const partnerLinks = [
  { label: "amaxtattoo.com", href: "https://amaxtattoo.com" },
  { label: "amaximumconstruction.com", href: "https://amaximumconstruction.com" },
  { label: "npak.ca", href: "https://npak.ca" }
];

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div>
          <img className="footer-logo" src="/Снимок экрана 2026-03-15 001246.png" alt="BTD Deck Builder" />
          <p className="footer-brand">Best Toronto Decks</p>
          <p className="muted">
            Custom decks and fences for Toronto, North York, Richmond Hill, and
            Aurora.
          </p>
          <p className="muted">Call: (289) 812 4560</p>
          <p className="muted">Email: maximumdecks@gmail.com</p>
        </div>
        <div className="footer-links">
          {footerLinks.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <span>© 2026 Best Toronto Decks</span>
          <div className="footer-bottom-links">
            {partnerLinks.map((item) => (
              <a key={item.href} href={item.href} target="_blank" rel="noreferrer">
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
