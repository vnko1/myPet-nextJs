import { NoticesTypes } from "@/types";
import DBConstructor from "../dbConstructor/dbConstructor";
import { Notice } from "../../models";

class Notices extends DBConstructor {
  constructor() {
    super();
  }

  async addNotice(newNotice: Partial<NoticesTypes>) {
    return Notice.create(newNotice);
  }
}

export default Notices;
