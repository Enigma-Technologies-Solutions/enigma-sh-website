import { Layout } from "@/components/Layout";

const NotFound = () => (
  <Layout>
    <section className="wrap nf">
      <div>
        <p className="eyebrow nf__eyebrow">
          Not found
        </p>
        <h1>404</h1>
        <p>There's no page at this address.</p>
        <a className="btn btn--volt" href="/">
          Back to enigma.sh
        </a>
      </div>
    </section>
  </Layout>
);

export default NotFound;
