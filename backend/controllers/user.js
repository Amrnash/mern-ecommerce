import User from "../models/User.js";
import asyncHandler from "express-async-handler";

// Public POST /api/users/login------Auth user and get token
const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: null,
    });
  } else {
    res.status(401);
    throw new Error("Invalid email or password");
  }
});
export { authUser };
