// import { unstable_noStore as noStore } from "next/cache";
import { SponsorType } from "@/types";
import { Sponsors } from "@/lib/database/services";

const sponsors = new Sponsors();
export const getSponsors = sponsors.tryCatchWrapper<SponsorType[], undefined>(
  async function () {
    // noStore();
    const res = await sponsors.findSponsorsData();
    return res;
  }
);
