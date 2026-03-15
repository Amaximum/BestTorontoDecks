import Link from "next/link";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services/" },
  { label: "Projects", href: "/projeckt/" },
  { label: "Blog", href: "/need-a-permit-toronto/" },
  { label: "Contact", href: "/contact-us/" }
];

export default function SiteHeader() {
  return (
    <header className="site-header">
      <a className="skip-link" href="#content">
        Skip to content
      </a>
      <div className="container header-inner">
        <Link className="brand" href="/">
          <img className="brand-logo" src="/Снимок экрана 2026-03-15 001246.png" alt="BTD Deck Builder" />
          <span>Best Toronto Decks</span>
        </Link>
        <nav className="nav">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="header-cta">
          <a className="button" href="tel:2898124560">
            Call (289) 812 4560
          </a>
        </div>
      </div>
    </header>
  );
}
