import { ISponsor, Sponsor } from "../../models";
import DBConstructor from "../dbConstructor/dbConstructor";

class Sponsors extends DBConstructor {
  constructor() {
    super();
  }
  getSponsors(): Promise<ISponsor[]> {
    return Sponsor.find();
  }
}

export default Sponsors;
