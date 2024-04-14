import DBConstructor from "../dbConstructor/dbConstructor";
import { Sponsor } from "../../models";
import { SponsorType } from "@/types";

interface ISponsors {
  findSponsorsData(): Promise<SponsorType[]>;
}

class Sponsors extends DBConstructor implements ISponsors {
  constructor() {
    super();
  }
  findSponsorsData() {
    return Sponsor.find();
  }
}

export default Sponsors;
