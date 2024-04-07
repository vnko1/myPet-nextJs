import { getSponsors } from "@/lib/database";
import { Sponsors } from "./_components";

// export const dynamic = "force-dynamic";
// export const revalidate = 5;
// export const fetchCache = "force-no-store";

export const dynamic = "force-static";
export default async function Friends() {
  const res = await getSponsors(undefined);
  return (
    <main>
      <section className="section">
        <div className="container">
          <h1 className="title">Our friends</h1>
          <Sponsors sponsors={res || []} />
        </div>
      </section>
    </main>
  );
}
