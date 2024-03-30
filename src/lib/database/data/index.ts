import { Sponsors } from "../services";

export const getSponsors = async () => {
  try {
    const sponsors = new Sponsors();
    const res = await sponsors.getSponsors();
    return res;
  } catch (error) {
    console.log(error);
  }
};
