import Product from "../models/Product.js";
import asyncHandler from "express-async-handler";

// Public GET /api/products------fetch all products
const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({});
  return res.json(products);
});
// Public GET /api/products/:id------fetch single product
const getProductById = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (product) {
    res.json(product);
  } else {
    res.status(404);
    throw new Error("Product not found");
  }
});
// Private/Admin  DELETE /api/products/:id------Delete a product
const deleteProduct = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (product) {
    await product.remove();
    res.json({ message: "Product removed " });
  } else {
    res.status(404);
    throw new Error("Product not found");
  }
});

export { getProducts, getProductById, deleteProduct };
