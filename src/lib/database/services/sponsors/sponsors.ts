import DBConstructor from "../dbConstructor/dbConstructor";
import { Sponsor } from "../../models";
import { ISponsor } from "@/types";

interface ISponsors {
  getSponsorsData(): Promise<ISponsor[]>;
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
