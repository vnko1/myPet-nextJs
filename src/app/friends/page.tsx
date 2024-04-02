import { getSponsors } from "@/app/lib";
import { Sponsors } from "./_components";

// export const dynamic = "force-dynamic";
// export const revalidate = 5;
// export const fetchCache = "force-no-store";

export default async function Page() {
  const res = await getSponsors(undefined);
  return (
    <section className="section">
      <div className="container">
        <h1 className="title">Our friends</h1>
        <Sponsors sponsors={res || []} />
      </div>
    </section>
  );
}
