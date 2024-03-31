import { Sponsors } from "./_components";

// export const dynamic = "force-dynamic";

export default async function Page() {
  return (
    <section className="section">
      <div className="container">
        <h1 className="title">Our friends</h1>
        <Sponsors />
      </div>
    </section>
  );
}