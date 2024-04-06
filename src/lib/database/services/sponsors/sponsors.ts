import DBConstructor from "../dbConstructor/dbConstructor";
import { Sponsor } from "../../models";
import { SponsorType } from "@/types";

interface ISponsors {
  getSponsorsData(): Promise<SponsorType[]>;
}

class Sponsors extends DBConstructor implements ISponsors {
  constructor() {
    super();
  }
  getSponsorsData() {
    return Sponsor.find();
  }
}

export default Sponsors;
