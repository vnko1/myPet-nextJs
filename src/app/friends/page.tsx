import { getSponsors } from "@/lib";
import { Sponsors } from "./_components";

export default async function Page() {
  const res = await getSponsors();
  return (
    <section className="section">
      <div className="container">
        <h1 className="title">Our friends</h1>
        <Sponsors sponsors={res || []} />
      </div>
    </section>
  );
}
