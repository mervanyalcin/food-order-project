import express from "express";
import cors from "cors";
import morgan from "morgan";
import dotenv from "dotenv"
import bodyParser from "body-parser"
import postgresClient from "./config/db.js";

import userRouter from "./routers/userRouter.js";
import categoryRouter from "./routers/categoryRouter.js";
import productRouter from "./routers/productRouter.js";

// Set middlewares
const app = express();
dotenv.config()
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

app.use("/api/auth", userRouter);
app.use("/api/category", categoryRouter);
app.use("/api/products", productRouter);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`listening ${PORT}`);
  postgresClient.connect((err) => {
    if (err) {
      console.log(`Connection error`, err.stack);
    } else {
      console.log("db connection successfull");
    }
  });
});
