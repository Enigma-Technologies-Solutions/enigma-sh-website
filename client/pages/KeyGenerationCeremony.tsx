import { CONTACT, Layout } from "@/components/Layout";

const DOCS = [
  ["Engagement letter", "Scope, liabilities and contractual obligations between the parties."],
  ["Key ceremony policy", "The security policy: procedural requirements and controls."],
  ["Runbook", "Step-by-step operating procedure for the ceremony."],
  ["Hardware procurement", "Vendor and device details for all hardware used."],
  ["Environment checklist", "Verification checklist for the controlled environment."],
  ["Attestation report", "Independent auditor verification and AUP compliance report."],
  ["Witness declarations", "Signed witness statements of what was observed."],
  ["Chain of custody", "Storage-media tracking and custody-transfer records."],
  ["Audit trail log", "Chronological log of every event during the ceremony."],
];

const FRAMEWORKS = [
  ["ISO/IEC 27001:2022", "Information security management systems (ISMS)"],
  ["ISO/IEC 11770-1:2010", "Key management techniques"],
  ["NIST SP 800-57 Part 1 Rev. 5", "Key management guidelines"],
];

const STANDARDS = [
  ["CCSS v9.0", "Cryptocurrency Security Standard"],
  ["CMTA DACS", "Digital Assets Custody Standard"],
];

const TRACE = [
  ["Ceremony conduct", "ISO/IEC 27001 A.12.1.1", "Runbook, AUP"],
  ["Cryptographic key management", "NIST SP 800-57 §5.1", "Runbook, policy"],
  ["Personnel confidentiality", "ISO/IEC 27001 A.7.1.2", "NDA"],
  ["Asset management", "ISO/IEC 27001 A.8.1.1", "Procurement list, chain of custody"],
  ["Audit and accountability", "ISO/IEC 27001 A.12.4", "Logs, witness statements"],
];

export default function KeyGenerationCeremony() {
  return (
    <Layout>
      <header className="hero">
        <div className="wrap hero__grid">
          <div>
            <p className="eyebrow">Service · Key generation ceremony</p>
            <h1>
              Key material created <em>under witness</em>, documented end to end.
            </h1>
            <p className="hero__sub">
              A key generation ceremony is a controlled, auditable process for creating
              cryptographic key material under strict procedural, physical and logical controls.
              It gives you non-repudiation, entropy integrity and recoverability.
            </p>
            <div className="btn-row">
              <a className="btn btn--volt" href="#contact">
                Plan a ceremony
              </a>
              <a className="btn btn--ghost" href="#documentation">
                What you receive
              </a>
            </div>
          </div>
          <dl className="facts">
            <div>
              <dt>Aligned with</dt>
              <dd>ISO/IEC 27001 · ISO/IEC 11770-1 · NIST SP 800-57 · CCSS · CMTA DACS</dd>
            </div>
            <div>
              <dt>Root of trust</dt>
              <dd>Several independently generated BIP39 seeds, XOR-combined into one master seed</dd>
            </div>
            <div>
              <dt>Deliverables</dt>
              <dd>Nine documents, from engagement letter to audit trail</dd>
            </div>
          </dl>
        </div>
      </header>

      <section className="section section--alt" id="scope">
        <div className="wrap split">
          <div>
            <p className="eyebrow">Scope</p>
            <h2 className="h2">No single person ever holds the key.</h2>
          </div>
          <div className="about__body">
            <div className="prose">
              <p>
                The ceremony governs the controlled creation and management of several BIP39 seed
                phrases, each generated independently from verifiable entropy.
              </p>
              <p>
                The seeds are XOR-combined to derive a single master seed, the root of trust for
                the client's wallet infrastructure. Because no one seed is enough, no individual in
                the organisation has access to the key material at any point: there is no single
                point of failure.
              </p>
            </div>
            <ul className="points">
              <li>ECDSA constructs for deterministic wallet derivation</li>
              <li>Bring your own key (BYOK) into HSMs, MPC environments or custodial vaults</li>
              <li>Full documentation of key backup, rotation and attestation events</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section" id="documentation">
        <div className="wrap">
          <div className="shead">
            <div>
              <p className="eyebrow">Documentation package</p>
              <h2 className="h2">Everything an auditor will ask for.</h2>
            </div>
            <p className="lede">
              Each ceremony ships with the full set, prepared before the day and signed on it.
            </p>
          </div>
          <div className="docs">
            {DOCS.map(([title, body], i) => (
              <article className="card" key={title}>
                <p className="svc__n">{String(i + 1).padStart(2, "0")}</p>
                <h3>{title}</h3>
                <p>{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--alt" id="standards">
        <div className="wrap split">
          <div>
            <p className="eyebrow">Compliance</p>
            <h2 className="h2">Mapped to the standards you report against.</h2>
          </div>
          <div className="about__body">
            <div>
              <h3 className="std-h">Frameworks</h3>
              <ul className="std">
                {FRAMEWORKS.map(([name, what]) => (
                  <li key={name}>
                    <b>{name}</b>
                    <span>{what}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="std-h">Standards</h3>
              <ul className="std">
                {STANDARDS.map(([name, what]) => (
                  <li key={name}>
                    <b>{name}</b>
                    <span>{what}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="traceability">
        <div className="wrap">
          <div className="shead">
            <div>
              <p className="eyebrow">Traceability</p>
              <h2 className="h2">Every requirement has a document.</h2>
            </div>
          </div>
          <div className="tbl">
            <table>
              <thead>
                <tr>
                  <th>Requirement</th>
                  <th>Standard reference</th>
                  <th>Corresponding document</th>
                </tr>
              </thead>
              <tbody>
                {TRACE.map(([req, ref, doc]) => (
                  <tr key={req}>
                    <td>{req}</td>
                    <td className="mono">{ref}</td>
                    <td>{doc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="section section--band" id="contact">
        <div className="wrap">
          <div className="band">
            <div>
              <p className="eyebrow eyebrow--ink">Contact</p>
              <h2 className="h2">Secure key generation, fully auditable.</h2>
              <p>
                Tell us about your custody setup and we'll scope a compliant ceremony and its
                documentation.
              </p>
            </div>
            <div>
              <a className="btn btn--ink" href={`mailto:${CONTACT}?subject=Key%20generation%20ceremony`}>
                Email us <span aria-hidden="true">→</span>
              </a>
              <p className="band__mail">{CONTACT}</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
