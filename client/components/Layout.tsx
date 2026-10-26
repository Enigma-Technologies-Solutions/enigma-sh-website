import type { ReactNode } from "react";

export const CONTACT = "ultra@enigma.sh";

// Plain anchors, not router links: "/#section" from another page needs the
// browser's own scroll-to-fragment, which a client-side navigation skips.
const NAV = [
  { href: "/#products", label: "Products" },
  { href: "/#clients", label: "Clients" },
  { href: "/#services", label: "Services" },
  { href: "/#about", label: "About" },
];

export function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="site">
      <a className="skip" href="#main">
        Skip to content
      </a>
      <nav className="nav" aria-label="Primary">
        <div className="wrap nav__inner">
          <a className="wordmark" href="/" aria-label="Enigma Technologies Solutions home">
            <span className="ets">ETS</span>
            <span className="wordmark__full">Enigma Technologies Solutions</span>
          </a>
          <div className="nav__links">
            {NAV.map((n) => (
              <a key={n.href} href={n.href}>
                {n.label}
              </a>
            ))}
          </div>
          <div className="nav__cta">
            <a className="btn btn--ghost btn--sm" href="/#updates">
              Get updates
            </a>
            <a className="btn btn--volt btn--sm" href="/#contact">
              Contact
            </a>
          </div>
        </div>
      </nav>

      <main id="main">{children}</main>

      <footer className="foot">
        <div className="wrap">
          <div className="foot__grid">
            <div className="foot__brand">
              <a className="wordmark" href="/">
                <span className="ets">ETS</span>
                <span>Enigma Technologies Solutions</span>
              </a>
              <p className="foot__blurb">
                Security products and cryptography services. Keys, code and identity stay with
                their owner.
              </p>
            </div>
            <div>
              <h4>Products</h4>
              <ul>
                <li>
                  <a href="https://sigil.enigma.sh">Sigil</a>
                </li>
                <li>
                  <a href="https://sanctum.enigma.sh">Sanctum</a>
                </li>
              </ul>
            </div>
            <div>
              <h4>Services</h4>
              <ul>
                <li>
                  <a href="/services/key-generation-ceremony">Key generation ceremony</a>
                </li>
                <li>
                  <a href="/#services">Security engineering</a>
                </li>
                <li>
                  <a href="/#services">Workshops &amp; training</a>
                </li>
              </ul>
            </div>
            <div>
              <h4>Company</h4>
              <ul>
                <li>
                  <a href="/#about">About</a>
                </li>
                <li>
                  <a href="/#clients">Clients</a>
                </li>
                <li>
                  <a href="/#updates">Newsletter</a>
                </li>
                <li>
                  <a href="/privacy">Privacy</a>
                </li>
                <li>
                  <a href={`mailto:${CONTACT}`}>{CONTACT}</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="foot__bar">
            <span>
              Enigma Technologies Solutions Limited · Office A, RAK DAO Business Centre, RAK BANK
              ROC Office, Ground Floor, Al Rifaa, Sheikh Mohammed Bin Zayed Road, Ras Al Khaimah,
              United Arab Emirates
            </span>
            <span className="foot__bar-sp">Reg. 01010748</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
