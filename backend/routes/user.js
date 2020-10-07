import express from "express";
import { protect } from "../middleware/auth.js";
import { authUser, getUserProfile } from "../controllers/user.js";
const router = express.Router();

router.post("/login", authUser);
router.route("/profile").get(protect, getUserProfile);

export default router;
