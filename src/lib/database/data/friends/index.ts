// import { unstable_noStore as noStore } from "next/cache";
import { Sponsors } from "../../services";
import { ISponsor } from "@/types";

const { tryCatchWrapper, getSponsorsData } = new Sponsors();

export const getSponsors = tryCatchWrapper<ISponsor[], undefined>(async () => {
  // noStore();
  const res = await getSponsorsData();
  return res;
});
