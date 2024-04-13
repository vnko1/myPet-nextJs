import { NOTICES_LIMIT, NoticeQueryParams, NoticesTypes } from "@/types";
import DBConstructor from "../dbConstructor/dbConstructor";
import { Notice } from "../../models";
import { Sort } from "../dbConstructor/dbConstructor.type";

class Notices extends DBConstructor {
  protected limit = NOTICES_LIMIT;
  constructor(sort?: Sort) {
    super(sort);
  }

  async addNotice(newNotice: Partial<NoticesTypes>) {
    return Notice.create(newNotice);
  }

  async getNotices(queryParams: NoticeQueryParams) {
    const queryPattern = this.getNoticesSearchPattern(queryParams);
    const sortPattern = this.getSortingPattern("date");
    const perPage = this.getSkipPattern(queryParams.page, this.limit);

    return Notice.find(queryPattern)
      .skip(perPage)
      .limit(this.limit)
      .sort(sortPattern);
  }

  async getNoticesPagesData(queryParams: NoticeQueryParams) {
    const queryPattern = this.getNoticesSearchPattern(queryParams);

    return Notice.countDocuments(queryPattern);
  }
}

export default Notices;
