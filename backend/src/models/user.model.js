import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true, minLength: 4 },
    profilePicture: { type: String, default: "" },
  },
  { timestamps: true } // Automatically manage createdAt and updatedAt fields
);

const User = mongoose.model("User", userSchema);

export default User;
