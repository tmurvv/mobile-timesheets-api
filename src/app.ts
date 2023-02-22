import express, { Request, Response } from "express";

import {authRouter, userRouter} from "./routes";

const app = express();

app.use(express.json({
    inflate: true,
    limit: '100kb',
    strict: true,
    type: 'application/json',
}))

app.get(
  "/",
  (req: Request, res: Response): Response =>
    res.status(200).json({ message: "Health Status: up and running" })
);

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/users", userRouter);


export default app;
