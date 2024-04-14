import {
  ID,
  NOTICES_LIMIT,
  NoticeQueryParams,
  NoticesTypes,
  Options,
} from "@/types";
import DBConstructor from "../dbConstructor/dbConstructor";
import { Notice } from "../../models";
import { Sort } from "../dbConstructor/dbConstructor.type";

type NoticeOptions = {
  fieldName: keyof NoticesTypes | null | string;
} & Options;

class Notices extends DBConstructor {
  protected limit = NOTICES_LIMIT;
  constructor(sort?: Sort) {
    super(sort);
  }

  async addNotice(
    newNotice: Partial<Omit<NoticesTypes, "owner">> & { owner?: string }
  ) {
    return Notice.create(newNotice);
  }

  async findNotices(queryParams: NoticeQueryParams, userId: string | null) {
    const queryPattern = this.getNoticesSearchPattern(queryParams, userId);
    const sortPattern = this.getSortingPattern("date");
    const perPage = this.getSkipPattern(queryParams.page, this.limit);

    return await Notice.find(queryPattern)
      .skip(perPage)
      .limit(this.limit)
      .sort(sortPattern);
  }

  async countNoticesPagesData(
    queryParams: NoticeQueryParams,
    userId: string | null
  ) {
    const queryPattern = this.getNoticesSearchPattern(queryParams, userId);

    return Notice.countDocuments(queryPattern);
  }

  async findNotice(id: string) {
    return Notice.findById(id).populate("owner", "email phone").lean();
  }

  async updateNotice(
    _id: ID | string,
    notice: Partial<NoticesTypes | { [name: string]: string }>,
    {
      fieldName = null,
      projection = "",
      newDoc = true,
    }: Partial<NoticeOptions> = {}
  ) {
    if (fieldName) {
      const [key] = Object.keys(notice);

      return Notice.findByIdAndUpdate(
        _id,
        {
          [key]: { [fieldName]: notice[key as keyof NoticesTypes] },
        },
        { new: newDoc, projection }
      );
    }

    return Notice.findByIdAndUpdate(_id, notice, { new: newDoc, projection });
  }

  deleteNotice(id: string) {
    return Notice.findByIdAndDelete(id);
  }
}

export default Notices;
