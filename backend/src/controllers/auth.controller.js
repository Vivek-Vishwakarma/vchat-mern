import bcrypt from "bcrypt";
import User from "../models/user.model.js";
import { generateToken } from "../utils/auth.js";
import { GlobalConstants } from "../constants/GlobalConstants.js";
import cloudinary from "../utils/cloudinary.js";

export const register = async (req, res) => {
  try {
    const { name, email, password, profilePicture } = req.body || {};
    if (password.length < 4)
      return res
        .status(400)
        .json({ message: "Password must be at least 4 characters long" });

    if (!name || !email || !password)
      return res
        .status(400)
        .json({ message: "Username, email and password required" });

    const user = await User.findOne({ email });
    if (user) return res.status(400).json({ message: "User already in use" });

    const salt = await bcrypt.genSalt(10);
    const passwordHash = await bcrypt.hash(password, salt);
    const newUser = new User({
      name,
      email,
      password: passwordHash,
      profilePicture: profilePicture || "",
    });

    if (newUser) {
      generateToken(newUser._id, res);
      await newUser.save();
      const { _id: id, name, email, profilePicture } = newUser;
      return res.status(201).json({ id, name, email, profilePicture });
    } else {
      return res.status(500).json({ message: "User registration failed" });
    }
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body || {};
    if (!email || !password) {
      return res.status(400).json({ message: "Email and password required" });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    generateToken(user._id, res);
    const { _id: id, name, email: userEmail, profilePicture } = user;
    return res.json({ id, name, userEmail, profilePicture });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const logout = (req, res) => {
  try {
    res.clearCookie(GlobalConstants.tokenName);
    return res.status(200).json({ message: "Logged out successfully" });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const updateProfile = async (req, res) => {
  try {
    const { name, email, profilePicture } = req.body || {};
    if (!name || !email) {
      return res.status(400).json({ message: "Name and email are required" });
    }

    let imageUrl = "";
    if (profilePicture) {
      let cloudRes = await cloudinary.uploader.upload(profilePicture);
      imageUrl = cloudRes.secure_url;
    }

    const user = await User.findByIdAndUpdate(
      req.user._id,
      { name, email, profilePicture: imageUrl },
      { new: true }
    ).select("-password");

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    return res.json(user);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const checkAuthentication = (req, res) => {
  try {
    res.status(200).json(req.user);
  } catch (error) {
    console.error("Check auth error:", error);
    return res.status(401).json({ message: "Invalid or expired token" });
  }
};
