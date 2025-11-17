import mongoose from "mongoose";

export class connectToDB {
  connectDB = async () => {
    try {
      const connectionInstance = await mongoose.connect(
        process.env.MONGO_DB_URI
      );
      console.log(
        "Connected to the Mongodb Atlas and hostname:",
        connectionInstance.connection.host
      );
    } catch (e) {
      console.error("Error while connecting to MongoDB Atlas:", e);
    }
  };
}
