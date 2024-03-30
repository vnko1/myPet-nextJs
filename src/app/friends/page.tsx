import { getSponsors } from "../../lib";

export default async function Page() {
  const res = await getSponsors();
  console.log(res);
  return (
    <section className="section">
      <div className="container">
        <h1 className="title">Our friends</h1>
      </div>
    </section>
  );
}
