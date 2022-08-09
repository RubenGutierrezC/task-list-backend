import mongoose from "mongoose";
import { MONGO_URL } from "./config.mjs";

const { connect } = mongoose;

export const initMongoDB = async () => {
  try {
    await connect(MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("conected to mongoDB");
  } catch (error) {
    console.error(error);
  }
};
