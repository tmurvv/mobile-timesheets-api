import * as dotenv from "dotenv";
import mongoose from "mongoose";

import app from "./src/app";

dotenv.config();

declare const process: {
  env: {
    DATABASE_STAGING: string;
    DATABASE_PASSWORD: string;
  };
};

const DB:string = process.env.DATABASE_STAGING.replace(
    '<PASSWORD>',
    process.env.DATABASE_PASSWORD
);

mongoose
  .connect(DB)
  .then(() => console.log("DB connected"))
  .catch(() => console.log(`DB NOT CONNECTING. PLEASE CHECK NETWORK.`));

const PORT: number = 7051;

const server = app.listen(PORT, () => {
  console.log(`This is running on port ${PORT}`);
});

export default server;
