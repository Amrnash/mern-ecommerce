import express from "express";
import Product from "../models/Product.js";
import asyncHandler from "express-async-handler";
const router = express.Router();

// Public GET /api/products------fetch all products
router.get(
  "/",
  asyncHandler(async (req, res) => {
    const products = await Product.find({});

    return res.json(products);
  })
);
// Public GET /api/products/:id------fetch single product
router.get(
  "/:id",
  asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);
    if (product) {
      res.json(product);
    } else {
      res.status(404);
      throw new Error("Product not found");
    }
  })
);

export default router;
