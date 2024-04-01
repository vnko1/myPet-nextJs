import { Sponsors } from "./_components";

// export const dynamic = "force-dynamic";

// export const dynamic = "force-dynamic";
// export const revalidate = 1;

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
