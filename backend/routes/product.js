import express from "express";
import { protect, admin } from "../middleware/auth.js";
import {
  getProducts,
  getProductById,
  deleteProduct,
  createProduct,
  updateProduct,
} from "../controllers/product.js";

const router = express.Router();
router.route("/").get(getProducts);
router
  .route("/:id")
  .get(getProductById)
  .delete(protect, admin, deleteProduct)
  .put(protect, admin, updateProduct)
  .post(protect, admin, createProduct);

export default router;
