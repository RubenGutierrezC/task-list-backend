import express from "express";
import cors from "cors";
import routes from "./routes.mjs";
import { initMongoDB } from "./db.mjs";

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

const port = process.env.PORT || "5200";
app.set("port", port);

app.listen(app.get("port"), async () => {
  try {
    await initMongoDB();

    console.log("server running in PORT:", app.get("port"));
  } catch (error) {
    console.warn(error);
  }
});
