import { getSponsors } from "../../lib";
import { ISponsor } from "@/types";

export default async function Page() {
  const res: ISponsor[] | undefined = await getSponsors();
  res;
  return (
    <section className="section">
      <div className="container">
        <h1 className="title">Our friends</h1>
      </div>
    </section>
  );
}
