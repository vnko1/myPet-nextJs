import mongoose from "mongoose";
import { QueryData, Sort } from "./dbConstructor.type";
import { CallBackType, NoticeQueryParams, QueryParams } from "@/types";
import { customError } from "@/utils";

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

  private formatNumberData(data: string | undefined) {
    const currentDate = new Date();
    const splittedData = data?.split(",");
    if (splittedData && splittedData?.length > 1) {
      const dates = splittedData.map((item) => {
        const value = +item;
        if (value < 1) return currentDate.setMonth(currentDate.getMonth() - 3);
        return currentDate.setFullYear(currentDate.getFullYear() - value);
      });
      const from = Math.max(...dates);
      return { $lte: from };
    }
  }

  protected getNoticesSearchPattern({
    query,
    category,
    sex,
  }: NoticeQueryParams) {
    return { ...this.getSearchQueryPattern({ query }), category, sex };
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
