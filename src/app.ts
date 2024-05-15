import express, { Application } from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import { Signale } from "signale";
import proxy from "express-http-proxy";

const app: Application = express();
const signale = new Signale();

dotenv.config();

app.use(morgan("dev"));

const PORT = process.env.PORT;
const GATEWAY = process.env.SERVICE_NAME;

app.use("/api/v1/orders", proxy("http://localhost:3002"));
app.use("/api/v1/products", proxy("http://localhost:3001"));

app.listen(PORT, () => {
  signale.success(`Service ${GATEWAY} running on http://localhost:${PORT}`);
});
