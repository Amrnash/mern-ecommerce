import express from "express";
import { protect, admin } from "../middleware/auth.js";
import { 
    authUser, 
    getUserProfile, 
    registerUser, 
    updateUserProfile,
    getUsers
} from "../controllers/user.js";
const router = express.Router();

router.route("/").post(registerUser).get(protect, admin, getUsers);
router.post("/login", authUser);
router.route("/profile").get(protect, getUserProfile).put(protect, updateUserProfile);

export default router;
