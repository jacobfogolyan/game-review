import { Schema, Document, model, Model } from "mongoose";

export interface UserDocument extends Document {
  firstName: string;
  lastName: string;
  username: string;
  password: string;
  email: string;
  permissions: string[];
}

const userSchema = new Schema<UserDocument>({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  username: { type: String, required: true },
  password: { type: String, required: true },
  email: { type: String, required: true },
  permissions: { type: [String], default: [] },
});

const User: Model<UserDocument> = model<UserDocument>("User", userSchema);

export { User, userSchema };
