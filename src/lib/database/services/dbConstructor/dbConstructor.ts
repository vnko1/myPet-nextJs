import mongoose from "mongoose";
import { CallBackType, NoticeQueryParams, QueryParams } from "@/types";
import { customError } from "@/utils";
import { QueryData, Sort } from "./dbConstructor.type";

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

  protected getNoticesSearchPattern(
    { query, sex, category }: NoticeQueryParams,
    userId: string | null
  ) {
    const queryParams: QueryData = this.getSearchQueryPattern({ query });

    if (sex) queryParams.sex = sex.split(",");

    if (category === "own" || category === "favorites") {
      if (category === "favorites" && userId) {
        queryParams[category] = { $elemMatch: { $eq: userId } };
      } else if (userId) {
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
        if (error instanceof Error)
          throw customError({
            message: error.message,
          });
      }
    };
  }
}
