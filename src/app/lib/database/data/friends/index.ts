// import { unstable_noStore as noStore } from "next/cache";
import { ISponsor } from "@/types";
import { Sponsors } from "@/app/lib/database/services";

const sponsors = new Sponsors();
export const getSponsors = sponsors.tryCatchWrapper<ISponsor[], undefined>(
  async function () {
    // noStore();
    const res = await sponsors.getSponsorsData();
    return res;
  }
);
