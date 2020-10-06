import express from "express";
import dotenv from "dotenv";
import connectDB from "./config.js/db.js";
import { notFound, errorHandler } from "./middleware/error.js";
import colors from "colors";
import productRoutes from "./routes/product.js";
dotenv.config();
connectDB();
const app = express();
app.use("/api/products", productRoutes);
app.use(notFound);
app.use(errorHandler);
const PORT = process.env.PORT || 5000;
app.listen(
  PORT,
  console.log(
    `server is running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow
      .bold
  )
);