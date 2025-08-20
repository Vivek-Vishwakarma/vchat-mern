import jwt from "jsonwebtoken";
import { GlobalConstants } from "../constants/GlobalConstants.js";
import User from "../models/user.model.js";

export const authenticate = async (req, res, next) => {
  try {
    const token = req.cookies?.[GlobalConstants.tokenName];
    if (!token) {
      return res.status(401).json({ message: "Authorization token missing" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    if (!decoded) {
      return res.status(401).json({ message: "Invalid token decoded" });
    }

    const user = await User.findById(decoded.userId).select("-password");

    if (!user) {
      return res.status(401).json({ message: "User not found" });
    }

    req.user = user;
    return next();
  } catch (err) {
    console.error("Auth middleware error:", err);
    return res.status(401).json({ message: "Invalid or expired token" });
  }
};

export const checkAuthentication = (req, res, next) => {
  try {
    const token = req.cookies?.[GlobalConstants.tokenName];
    if (!token) {
      return res.status(401).json({ message: "Authorization token missing" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    if (!decoded) {
      return res.status(401).json({ message: "Invalid token decoded" });
    }

    return next();
  } catch (err) {
    console.error("Check auth error:", err);
    return res.status(401).json({ message: "Invalid or expired token" });
  }
};
