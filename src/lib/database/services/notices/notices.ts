import { NoticesTypes } from "@/types";
import DBConstructor from "../dbConstructor/dbConstructor";
import { Notice } from "../../models";

class Notices extends DBConstructor {
  constructor() {
    super();
  }

  async addNotice(
    newNotice: Omit<NoticesTypes, "_id" | "owner" | "favorites">
  ) {
    return Notice.create(newNotice);
  }
}

export default Notices;
