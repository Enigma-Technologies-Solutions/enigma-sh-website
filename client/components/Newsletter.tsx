// The newsletter sign-up form. public/newsletter.js posts it to the newsletter Worker
// (enigma-newsletter-worker), which emails a confirmation link before adding anyone,
// and loads Cloudflare Turnstile once the form is focused.
export function Newsletter({ id }: { id: string }) {
  return (
    <form className="nl" data-newsletter="enigma" noValidate>
      <label className="nl__label" htmlFor={id}>
        Email address
      </label>
      <div className="nl__row">
        <input
          id={id}
          className="nl__input"
          type="email"
          name="email"
          required
          autoComplete="email"
          placeholder="you@company.com"
        />
        <button className="btn btn--volt" type="submit">
          Subscribe
        </button>
      </div>
      <label className="nl__hp" aria-hidden="true">
        Website <input name="website" tabIndex={-1} autoComplete="off" />
      </label>
      <div className="nl__challenge" />
      <p className="nl__status" role="status" aria-live="polite" />
      <p className="nl__fine">
        We email you a link to confirm. Every issue has an unsubscribe link.{" "}
        <a href="/privacy">Privacy</a>
      </p>
    </form>
  );
}
