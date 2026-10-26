import { CONTACT, Layout } from "@/components/Layout";
import { Newsletter } from "@/components/Newsletter";

const Arrow = () => (
  <span className="arrow" aria-hidden="true">
    →
  </span>
);

export default function Index() {
  return (
    <Layout>
      {/* Hero */}
      <header className="hero" id="top">
        <div className="wrap hero__grid">
          <div>
            <p className="eyebrow">Enigma Technologies Solutions</p>
            <h1>
              Security that keeps <em>keys, code and identity</em> with their owner.
            </h1>
            <p className="hero__sub">
              ETS builds security products and runs cryptography engagements. Sigil licenses
              WebAssembly offline, inside the module. Sanctum runs AI-written tools in a sandbox
              you approve. Behind both: more than a decade of custody, signing and key-management
              systems for regulated firms.
            </p>
            <div className="btn-row">
              <a className="btn btn--volt" href="#products">
                See the products
              </a>
              <a className="btn btn--ghost" href="#contact">
                Work with us
              </a>
            </div>
          </div>

          <div className="stack" aria-label="ETS products">
            <a className="card stack__item" href="https://sigil.enigma.sh">
              <img className="mono-tile mono-tile--mark" src="/marks/sg.svg" alt="" width={48} height={48} />
              <span className="stack__text">
                <span className="stack__name">Sigil</span>
                <span className="stack__desc">Licence authority for WebAssembly</span>
                <span className="tag tag--live">In production</span>
              </span>
            </a>
            <a className="card stack__item" href="https://sanctum.enigma.sh">
              <img className="mono-tile mono-tile--mark" src="/marks/st.svg" alt="" width={48} height={48} />
              <span className="stack__text">
                <span className="stack__name">Sanctum</span>
                <span className="stack__desc">Desktop sandbox for AI-generated tools</span>
                <span className="tag">macOS · Windows · Linux</span>
              </span>
            </a>
            <a className="card stack__item" href="/services/key-generation-ceremony">
              <span className="mono-tile mono-tile--ghost" aria-hidden="true">kc</span>
              <span className="stack__text">
                <span className="stack__name">Key generation ceremony</span>
                <span className="stack__desc">Auditable key creation, documented end to end</span>
                <span className="tag">Service</span>
              </span>
            </a>
          </div>
        </div>
      </header>

      <div className="strip">
        <div className="wrap strip__inner">
          <span className="strip__label">How we build</span>
          <ul>
            <li>Don't trust, verify</li>
            <li>Verify offline</li>
            <li>Fail closed</li>
            <li>Deny by default</li>
            <li>No custody of what isn't ours</li>
          </ul>
        </div>
      </div>

      {/* Products */}
      <section className="section" id="products">
        <div className="wrap">
          <div className="shead">
            <div>
              <p className="eyebrow">Products</p>
              <h2 className="h2">Two products, one rule: the owner decides.</h2>
            </div>
            <p className="lede">
              Each one moves a decision that usually sits with a server or a script back to the
              person who owns the key, the code or the machine.
            </p>
          </div>

          <div className="products">
            <article className="card product">
              <div className="product__head">
                <img className="mono-tile mono-tile--lg mono-tile--mark" src="/marks/sg.svg" alt="" width={56} height={56} />
                <div>
                  <h3>Sigil</h3>
                  <p className="product__kind">Licence authority for WebAssembly</p>
                </div>
              </div>
              <p className="product__lead">
                Your WASM checks its own licence, offline, against keys compiled into it.
              </p>
              <p className="product__body">
                Issue licences, bind them to machines, and let a Rust or WASM module refuse to run
                without a valid signed lease. Built for IP that ships as <code>.wasm</code> in
                browser extensions and on servers.
              </p>
              <ul className="points">
                <li>Key licences for customers' machines: one activation per machine, a seat pool</li>
                <li>Instance licences for your own deployments: your backend mints a short lease per use</li>
                <li>
                  <span>Ed25519 leases verified by a <code>no_std</code> Rust verifier; revocation,
                  suspension and key rotation from the portal</span>
                </li>
              </ul>
              <div className="product__foot">
                <a className="btn btn--ink btn--sm" href="https://sigil.enigma.sh">
                  sigil.enigma.sh <Arrow />
                </a>
                <a className="btn btn--ghost btn--sm" href="https://sigil.enigma.sh/docs/">
                  Docs
                </a>
                <span className="product__meta">In production · conFIEL Core</span>
              </div>
            </article>

            <article className="card product">
              <div className="product__head">
                <img className="mono-tile mono-tile--lg mono-tile--mark" src="/marks/st.svg" alt="" width={56} height={56} />
                <div>
                  <h3>Sanctum</h3>
                  <p className="product__kind">Desktop sandbox for AI-generated HTML tools</p>
                </div>
              </div>
              <p className="product__lead">
                Run the single-file tools AI models write, with only the access you approve.
              </p>
              <p className="product__body">
                Sanctum scans a tool's source and lists what it uses: camera, network hosts,
                storage, geolocation. You choose what to allow; everything else is blocked before
                the tool's code runs.
              </p>
              <ul className="points">
                <li>Each tool at its own origin, under a Content Security Policy built from your choices</li>
                <li>Network access approved per host, not all or nothing</li>
                <li>Stored copies pinned by SHA-256; a modified tool is quarantined</li>
              </ul>
              <div className="product__foot">
                <a className="btn btn--ink btn--sm" href="https://sanctum.enigma.sh">
                  sanctum.enigma.sh <Arrow />
                </a>
                <span className="product__meta">Tauri · Rust · AGPL-3.0</span>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Clients */}
      <section className="section section--alt" id="clients">
        <div className="wrap">
          <div className="shead">
            <div>
              <p className="eyebrow">Clients</p>
              <h2 className="h2">Who we build with.</h2>
            </div>
            <p className="lede">
              Teams whose products carry legal identity or regulated securities, where a leaked
              key or a forged licence is not an inconvenience.
            </p>
          </div>

          <div className="clients">
            <article className="card client">
              <div className="client__head">
                <span className="client__name">conFIEL</span>
                <span className="tag">Mexico · e.firma</span>
              </div>
              <p className="client__what">
                Non-custodial delegation for Mexico's SAT e.firma. The signer keeps their key on
                their phone; the accountant gets a signed token for one session instead of the
                <code>.cer</code>, <code>.key</code> and password over WhatsApp.
              </p>
              <p className="client__uses">
                <b>With ETS:</b> conFIEL Core, the threshold-signing kernel, runs only under a
                Sigil instance licence, in the Chrome extension and in the backend.
              </p>
              <a className="client__link" href="https://confiel.id">
                confiel.id <Arrow />
              </a>
            </article>

            <article className="card client">
              <div className="client__head">
                <span className="client__name">Finbox</span>
                <span className="tag">Equity · Hedera</span>
              </div>
              <p className="client__what">
                Equity management and tokenization for private companies: cap tables, KYC and
                KYB, on-chain governance, digital securities on Hedera and an investor portal, in
                one product.
              </p>
              <p className="client__uses">
                <b>With ETS:</b> implementation and development of the whole platform, its key
                management system on DFNS, and the deployment to production.
              </p>
              <a className="client__link" href="https://finbox.website">
                finbox.website <Arrow />
              </a>
            </article>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section" id="services">
        <div className="wrap">
          <div className="shead">
            <div>
              <p className="eyebrow">Services</p>
              <h2 className="h2">The work behind the products.</h2>
            </div>
            <p className="lede">
              The same engineering that goes into Sigil and Sanctum, applied to your keys, your
              signing flows and your team.
            </p>
          </div>

          <div className="svc">
            <article className="card svc__card svc__card--feat">
              <p className="svc__n">01</p>
              <h3>Key generation ceremony</h3>
              <p>
                Controlled, auditable key creation with engagement letters, runbooks, attestation
                reports and chain-of-custody records, to ISO/IEC 27001, NIST SP 800-57, CCSS and
                CMTA DACS.
              </p>
              <a className="client__link" href="/services/key-generation-ceremony">
                Learn more <Arrow />
              </a>
            </article>
            <article className="card svc__card">
              <p className="svc__n">02</p>
              <h3>Security engineering</h3>
              <p>
                Threat models, protocol and architecture reviews, and implementation of signing,
                custody and licensing systems: threshold signatures, passkeys and WebAuthn, WASM
                and Rust.
              </p>
            </article>
            <article className="card svc__card">
              <p className="svc__n">03</p>
              <h3>Applied cryptography guides</h3>
              <p>
                Deep dives on encryption, signing and verification flows, ECDSA and EdDSA, Merkle
                proofs and watermarking, with client-side examples and audit checklists.
              </p>
            </article>
            <article className="card svc__card">
              <p className="svc__n">04</p>
              <h3>Workshops &amp; training</h3>
              <p>
                Hands-on sessions on cryptography, wallet UX and key management, with guided
                exercises, code walkthroughs and take-home material.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="section section--alt" id="about">
        <div className="wrap split">
          <div>
            <p className="eyebrow">About</p>
            <h2 className="h2">Built by people who have held the keys.</h2>
          </div>
          <div className="about__body">
            <div className="prose">
              <p>
                ETS was founded by a technologist and cryptography specialist with more than a
                decade in fintech, blockchain and digital-asset security: wealth-management
                platforms, regulated custody, and cryptographic infrastructure used by institutions
                on several continents.
              </p>
              <p>
                Before ETS, that meant leadership roles at custody and infrastructure companies,
                overseeing billions in assets under secure storage and working with regulators.
                ETS turns that experience into products and engagements where the owner, not the
                operator, holds the key.
              </p>
            </div>
            <dl className="facts">
              <div>
                <dt>Company</dt>
                <dd>Enigma Technologies Solutions Limited</dd>
              </div>
              <div>
                <dt>Registered</dt>
                <dd>RAK DAO, Ras Al Khaimah, UAE · No. 01010748</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      {/* Updates */}
      <section className="section" id="updates">
        <div className="wrap updates">
          <div>
            <p className="eyebrow">Updates</p>
            <h2 className="h2">Releases, by email.</h2>
            <p className="lede updates__lede">
              An email when we ship a product release or publish something worth reading.
              Nothing else.
            </p>
          </div>
          <div className="card updates__card">
            <Newsletter id="nl-email" />
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="section section--band" id="contact">
        <div className="wrap">
          <div className="band">
            <div>
              <p className="eyebrow eyebrow--ink">Contact</p>
              <h2 className="h2">Have a key, a module or a ceremony to protect?</h2>
              <p>Tell us what you ship and where it runs.</p>
            </div>
            <div>
              <a className="btn btn--ink" href={`mailto:${CONTACT}`}>
                Email us <Arrow />
              </a>
              <p className="band__mail">{CONTACT}</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
