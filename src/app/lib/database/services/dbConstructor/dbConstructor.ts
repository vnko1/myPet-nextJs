import mongoose from "mongoose";

abstract class DBConstructor {
  mongoUri = process.env.MONGODB_URI!;
  connection: { isConnected?: number } = {};
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
