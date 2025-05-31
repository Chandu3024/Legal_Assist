import mongoose, { Document, Schema } from "mongoose";
import chatSchema from "./chat-model.js";

interface IMessage {
  id: string;
  role: "user" | "assistant";
  content: string;
}

interface IChat {
  id: string;
  title: string;
  messages: IMessage[];
}

export interface IUser extends Document {
  name: string;
  email: string;
  password: string;
  chats: IChat[];
}

const userSchema = new Schema<IUser>({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  chats: {
    type: [chatSchema],
    default: [],
  },
});

const User = mongoose.model<IUser>("User", userSchema);
export default User;
