import { Sponsors } from "../../services";

const sponsors = new Sponsors();

export const getSponsors = async () => {
  try {
    const res = await sponsors.getSponsors();
    return res;
  } catch (error) {
    console.log(error);
  }
};
