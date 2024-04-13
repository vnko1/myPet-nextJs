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

  async findNotices(queryParams: NoticeQueryParams) {
    const queryPattern = this.getNoticesSearchPattern(queryParams);
    const sortPattern = this.getSortingPattern("date");
    const perPage = this.getSkipPattern(queryParams.page, this.limit);

    return await Notice.find(queryPattern)
      .skip(perPage)
      .limit(this.limit)
      .sort(sortPattern);
  }

  async countNoticesPagesData(queryParams: NoticeQueryParams) {
    const queryPattern = this.getNoticesSearchPattern(queryParams);

    return Notice.countDocuments(queryPattern);
  }

  async findNotice(id: string) {
    return Notice.findById(id).populate("owner", "email phone");
  }
}

export default Notices;
