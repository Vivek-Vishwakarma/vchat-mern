import jwt from "jsonwebtoken";
import { GlobalConstants } from "../constants/GlobalConstants.js";

export const generateToken = (userId, res) => {
  try {
    const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });
    res.cookie(GlobalConstants.tokenName, token, {
      httpOnly: true,
      maxAge: 24 * 60 * 60 * 1000,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
    });
    return token;
  } catch (err) {
    console.error("Error generating token:", err);
    return res.status(500).json({ message: "Internal server error" });
  }
};
