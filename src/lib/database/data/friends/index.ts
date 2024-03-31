// import { unstable_noStore as noStore } from "next/cache";
import { Sponsors } from "../../services";
import { ISponsor } from "@/types";

const sponsors = new Sponsors();

export const getSponsors = Sponsors.tryCatchWrapper<ISponsor[], undefined>(
  async () => {
    // noStore();
    const res = await sponsors.getSponsors();
    return res;
  }
);
