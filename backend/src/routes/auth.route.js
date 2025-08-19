import express from "express";
import {
  register,
  login,
  logout,
  updateProfile,
  checkAuthentication,
} from "../controllers/auth.controller.js";
import { authenticate } from "../middlewares/auth.middleware.js";

const router = express.Router();

// Route for user registration
router.post("/register", register);

// Route for user login
router.post("/login", login);

// Route for user logout
router.post("/logut", logout);

// Update user profile
router.post("/update-profile", authenticate, updateProfile);

// Route to get user profile (protected)
router.get("/check", authenticate, checkAuthentication);

// Export the router to be used in the main app
export default router;
