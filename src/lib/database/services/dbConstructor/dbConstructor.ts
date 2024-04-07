import mongoose from "mongoose";
import { Sort } from "./dbConstructor.type";
import { CallBackType, QueryParams } from "@/types";
import { errorResponse } from "@/utils";

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

  protected getSearchPattern({ query }: QueryParams = {}) {
    return query
      ? {
          $or: [
            { title: { $regex: query, $options: "i" } },
            { text: { $regex: query, $options: "i" } },
          ],
        }
      : {};
  }

  protected getSortingPattern(key: string) {
    return { [key]: this.sort };
  }

  protected getSkipPattern(page = this.page, limit: number) {
    return page > 0 ? (page - 1) * limit : 0;
  }

  tryCatchWrapper<T, K>(cb: CallBackType<T, K>) {
    return async function (data: K) {
      try {
        return await cb(data);
      } catch (error) {
        if (error instanceof Error) errorResponse(error.message, error.name);

        console.log("🚀 ~ DBConstructor ~ error:", error);
      }
    };
  }
}
