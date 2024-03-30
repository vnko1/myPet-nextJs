import mongoose from "mongoose";
import { CB } from "./dbConstrucor.type";

abstract class DBConstructor {
  private mongoUri = process.env.MONGODB_URI!;
  private connection: { isConnected?: number } = {};

  static tryCatchWrapper(cb: CB) {
    return async function () {
      try {
        return await cb();
      } catch (error) {
        console.log(error);
      }
    };
  }

  constructor() {
    this.connect();
  }

  private async connect() {
    const { mongoUri, connection } = this;
    try {
      if (connection.isConnected) return;
      const db = await mongoose.connect(mongoUri);

      connection.isConnected = db.connections[0].readyState;
    } catch (error) {
      console.log(error);
    }
  }
}

export default DBConstructor;
