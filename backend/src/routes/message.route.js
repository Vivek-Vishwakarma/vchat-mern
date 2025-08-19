import express from "express";
import {
  getMessagesByUserId,
  getUsersForSidebar,
  sendMessage,
} from "../controllers/message.controller.js";
import { authenticate } from "../middlewares/auth.middleware.js";
const router = express.Router();

router.get("/users", authenticate, getUsersForSidebar);
router.get("/:id", authenticate, getMessagesByUserId);
router.get("/send:id", authenticate, sendMessage);
export default router;
