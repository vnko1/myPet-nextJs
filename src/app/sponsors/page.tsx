import { Sponsors } from "./_components";

// export const dynamic = "force-dynamic";

// export const dynamic = "force-dynamic";
// export const revalidate = 1;
export const dynamic = "force-static";

export default async function Friends() {
  return (
    <main>
      <section className="section">
        <div className="container">
          <h1 className="title">Our friends</h1>
          <Sponsors />
        </div>
      </section>
    </main>
  );
}
