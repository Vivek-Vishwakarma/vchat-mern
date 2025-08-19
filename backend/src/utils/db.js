import mongoose from "mongoose";

export const connectDatabase = async () => {
  try {
    mongoose.set("strictQuery", true);
    const data = await mongoose.connect(process.env.ATLAS_URI);
    console.log(`mongodb connected with server ${data.connection.host}`);
  } catch (err) {
    console.error("Failed to connect to MongoDB:", err);
    throw err;
  }
};
