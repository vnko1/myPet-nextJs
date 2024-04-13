import { NOTICES_LIMIT, NoticeQueryParams, NoticesTypes } from "@/types";
import DBConstructor from "../dbConstructor/dbConstructor";
import { Notice } from "../../models";
import { Sort } from "../dbConstructor/dbConstructor.type";

class Notices extends DBConstructor {
  protected limit = NOTICES_LIMIT;
  constructor(sort: Sort) {
    super(sort);
  }

  async addNotice(newNotice: Partial<NoticesTypes>) {
    return Notice.create(newNotice);
  }

  async getNotices({ page, query, sex, category }: NoticeQueryParams) {
    const queryPattern = this.getNoticesSearchPattern({ query, sex, category });
    const sortPattern = this.getSortingPattern("date");
    const perPage = this.getSkipPattern(page, this.limit);

    return Notice.find(queryPattern)
      .skip(perPage)
      .limit(this.limit)
      .sort(sortPattern);
  }
}

export default Notices;
