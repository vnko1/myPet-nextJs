import { Sponsor } from "../../models";
import DBConstructor from "../dbConstructor/dbConstructor";

class Sponsors extends DBConstructor {
  constructor() {
    super();
  }
  getSponsors() {
    return Sponsor.find();
  }
}

export default Sponsors;
