import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";

import ttvRoutes from "./routes/ttv.routes.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({ limig: "50mb" }));

app.use("/api/v1/ttv", ttvRoutes);

app.get("/", (req, res) => {
  res.status(200).json({ message: "Hello Vy" });
});

app.listen(8080, () => console.log("Server is running 8080"));
