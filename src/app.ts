import bodyParser from "body-parser";
import express, { Request, Response } from "express";
const jsonParser = bodyParser.json();

import router from "./routes/userRoutes";

const app = express();

app.get(
  "/",
  (req: Request, res: Response): Response =>
    res.status(200).json({ message: "Health Status: up and running" })
);

app.use("/api/v1", jsonParser, router);

export default app;
