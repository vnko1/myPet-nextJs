import { ISponsor } from "@/types";
import { Sponsor } from "../../models";
import DBConstructor from "../dbConstructor/dbConstructor";

class Sponsors extends DBConstructor {
  constructor() {
    super();
  }
  getSponsorsData(): Promise<ISponsor[]> {
    return Sponsor.find();
  }
}

export default Sponsors;
