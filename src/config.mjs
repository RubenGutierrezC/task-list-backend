import { config } from "dotenv";

config();

export const PORT = process.env.PORT || 5200;

export const MONGO_URL = process.env.MONGO_URL || "mongodb+srv://api:api1234@cluster0.8iqsw.mongodb.net/task-list?retryWrites=true&w=majority";
