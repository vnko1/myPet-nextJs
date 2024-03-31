import { unstable_noStore as noStore } from "next/cache";
import { Sponsors } from "../../services";

const sponsors = new Sponsors();

export const getSponsors = async () => {
  try {
    noStore();
    const res = await sponsors.getSponsors();
    return res;
  } catch (error) {
    console.log(error);
  }
};
