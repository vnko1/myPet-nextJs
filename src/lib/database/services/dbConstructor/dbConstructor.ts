import mongoose from "mongoose";
import { QueryData, Sort } from "./dbConstructor.type";
import {
  CallBackType,
  LinksEnum,
  NoticeQueryParams,
  QueryParams,
} from "@/types";
import { customError } from "@/utils";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export default abstract class DBConstructor {
  private mongoUri = process.env.MONGODB_URI!;
  private connection: { isConnected?: number } = {};
  protected page = 1;

  constructor(protected sort: Sort = "desc") {
    this.connect();
  }

  private async connect() {
    const { mongoUri, connection } = this;
    try {
      if (connection.isConnected) return;
      const db = await mongoose.connect(mongoUri);

      connection.isConnected = db.connections[0].readyState;
    } catch (error) {
      console.log("🚀 ~ DBConstructor ~ connect ~ error:", error);
    }
  }

  private getUserId() {
    const headersList = headers();

    const userId = headersList.get("userId");
    if (!userId) return redirect(LinksEnum.NOTICES_SELL);

    return userId;
  }

  protected getSearchQueryPattern({
    query,
  }: Pick<QueryParams, "query"> = {}): QueryData {
    return query
      ? {
          $or: [
            { title: { $regex: query, $options: "i" } },
            { text: { $regex: query, $options: "i" } },
            { comments: { $regex: query, $options: "i" } },
          ],
        }
      : {};
  }

  protected getNoticesSearchPattern({
    query,
    sex,
    category,
  }: NoticeQueryParams) {
    const userId = this.getUserId();
    const queryParams: QueryData = this.getSearchQueryPattern({ query });

    if (sex) queryParams.sex = sex.split(",");

    if (category === "own" || category === "favorite") {
      if (category === "favorite") {
        queryParams[category] = { $elemMatch: { $eq: userId } };
      } else {
        queryParams.owner = userId;
      }
    } else queryParams.category = category;

    return queryParams;
  }

  protected getSortingPattern(key: string) {
    return { [key]: this.sort };
  }

  protected getSkipPattern(page: string | number = this.page, limit: number) {
    return +page > 0 ? (+page - 1) * limit : 0;
  }

  tryCatchWrapper<T, K>(cb: CallBackType<T, K>) {
    return async function (data: K) {
      try {
        return await cb(data);
      } catch (error) {
        throw customError({
          message: '"Something went wrong! Try again later."',
        });
      }
    };
  }
}
