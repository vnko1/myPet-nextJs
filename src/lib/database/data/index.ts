import { Sponsors } from "../services";

export const getSponsors = async () => {
  try {
    const sponsors = new Sponsors();

    return await sponsors.sponsors;
  } catch (error) {
    console.log(error);
  }
};
