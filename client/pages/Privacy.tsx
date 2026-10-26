import { CONTACT, Layout } from "@/components/Layout";

const UPDATED = "October 26, 2026";

export default function Privacy() {
  return (
    <Layout>
      <section className="section" style={{ borderTop: 0 }}>
        <div className="wrap">
          <div className="doc">
            <h1 className="h2">Privacy</h1>
            <p className="doc__updated">Last updated {UPDATED}</p>
            <div className="doc__body">
              <p>
                Enigma Technologies Solutions Limited, Ras Al Khaimah, United
                Arab Emirates ("we"), runs enigma.sh and the Enigma newsletter.
                This page covers both. Questions and requests go to{" "}
                <a href={`mailto:${CONTACT}`}>{CONTACT}</a>.
              </p>

              <h2>Visiting the site</h2>
              <p>
                The site has no analytics, no advertising and no cookies of its
                own. Like any web page, it is served by companies that see your
                IP address and browser details when it loads:
              </p>
              <ul>
                <li>
                  <b>GitHub Pages</b> (GitHub, Inc.) hosts the site.
                </li>
                <li>
                  <b>Google Fonts</b> (Google LLC) serves the typefaces.
                </li>
              </ul>

              <h2>The newsletter</h2>
              <p>
                When you subscribe, we collect your <b>email address</b> and
                which list you chose. We use it only to send you the Enigma
                newsletter: product releases and news from ETS. We do not sell
                it, share it with anyone else, or add it to other lists.
              </p>
              <p>How sign-up works:</p>
              <ol>
                <li>
                  When you start typing in the form, the page loads{" "}
                  <b>Cloudflare Turnstile</b>, a check that the form is filled
                  in by a person. Cloudflare processes your IP address and
                  browser signals for that check.
                </li>
                <li>
                  When you submit, our sign-up service on{" "}
                  <b>Cloudflare Workers</b> checks the request and asks{" "}
                  <b>Resend</b> to email you a confirmation link. Your IP
                  address is used for rate limiting and is not stored. Our logs
                  record that a sign-up happened, never your address.
                </li>
                <li>
                  You are only subscribed once you open the link and press
                  Confirm. If you do not, nothing is added to the list. Resend
                  keeps its usual record of the confirmation email it sent.
                </li>
              </ol>
              <p>
                Once you confirm, your address is stored with <b>Resend</b>{" "}
                (Resend, Inc.), which sends the newsletter for us. We do not
                track whether you open our emails or click their links.
              </p>

              <h2>Unsubscribing and deletion</h2>
              <p>
                Every newsletter has an unsubscribe link, which takes effect
                immediately. After you unsubscribe, Resend keeps your address
                marked as unsubscribed so that you are not emailed again.
              </p>
              <p>
                To have your address deleted entirely, or to ask what we hold
                about you, write to <a href={`mailto:${CONTACT}`}>{CONTACT}</a>.
                We reply within 30 days.
              </p>

              <h2>The companies involved</h2>
              <ul>
                <li>
                  <a href="https://resend.com/legal/privacy-policy">
                    Resend privacy policy
                  </a>
                </li>
                <li>
                  <a href="https://www.cloudflare.com/privacypolicy/">
                    Cloudflare privacy policy
                  </a>
                </li>
                <li>
                  <a href="https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement">
                    GitHub privacy statement
                  </a>
                </li>
                <li>
                  <a href="https://policies.google.com/privacy">
                    Google privacy policy
                  </a>
                </li>
              </ul>
              <p>If this page changes, the date at the top changes with it.</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
