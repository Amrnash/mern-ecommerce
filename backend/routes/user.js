import express from "express";
import { protect, admin } from "../middleware/auth.js";
import { 
    authUser, 
    getUserProfile, 
    registerUser, 
    updateUserProfile,
    getUsers,
    deleteUser
} from "../controllers/user.js";
const router = express.Router();

router.route("/").post(registerUser).get(protect, admin, getUsers);
router.post("/login", authUser);
 router.route("/profile")
.get(protect, getUserProfile)
.put(protect, updateUserProfile);
router.route('/:id').delete(protect, admin, deleteUser);
export default router;
