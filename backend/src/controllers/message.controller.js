import Message from "../models/message.model.js";
import User from "../models/user.model.js";

export const getUsersForSidebar = async (req, res) => {
  try {
    const users = await User.find({ _id: { $ne: req.user._id } }) // Exclude the current user from the list by using $ne (not equal)
      .select("-password -__v")
      .sort({ createdAt: -1 });

    if (!users || users.length === 0) {
      return res.status(404).json({ message: "No users found" });
    }

    return res.status(200).json(users);
  } catch (error) {
    console.error("Error fetching users for sidebar:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const getMessagesByUserId = async (req, res) => {
  try {
    const receiverID = req.params.id; //receiver ID is the user we want to fetch messages for
    const senderId = req.user._id; //sender ID is the current user

    const messages = await Message.find({
      $or: [
        { sender: senderId, receiver: receiverID },
        { sender: receiverID, receiver: senderId },
      ],
    });
    return res.status(200).json(messages);
  } catch (error) {
    console.error("Error fetching messages by user ID:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const sendMessage = async (req, res) => {
  try {
    const { text, image } = req.body;
    const receiverId = req.params.id;

    let imageUrl = "";
    if (image) {
      let cloudRes = await cloudinary.uploader.upload(image);
      imageUrl = cloudRes.secure_url;
    }
    const newMessage = new Message({
      sender: req.user._id,
      text,
      image: imageUrl,
      receiver: receiverId,
    });

    await newMessage.save();
    return res.status(201).json(newMessage);
  } catch (error) {
    console.error("Error sending message:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};
