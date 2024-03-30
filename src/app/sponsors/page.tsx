import { getSponsors } from "@/lib";
import Card from "./_components/card";

const Sponsors = async () => {
  const res = await getSponsors();

  return (
    <div>
      {res &&
        res.map((el) => {
          return (
            <div key={el._id}>
              <Card data={el} />
            </div>
          );
        })}
    </div>
  );
};

export default Sponsors;
