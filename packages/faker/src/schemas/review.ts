import { Schema, Document, model, Model } from "mongoose";
import mongoose from "mongoose";
import { Media } from "./types";

interface ReviewDocument extends Document {
  title: string;
  description: string;
  media?: Media;
  gameId: mongoose.Types.ObjectId;
  author: mongoose.Types.ObjectId;
  updatedAt: Date;
  postedAt: Date;
}

const ReviewSchema = new Schema<ReviewDocument>({
  title: { type: String, required: true },
  description: { type: String, required: true },
  media: { type: Object },
  gameId: { type: mongoose.Schema.Types.ObjectId, ref: "Game", required: true },
  author: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  updatedAt: { type: Date, required: true },
  postedAt: { type: Date, required: true },
});

const Review: Model<ReviewDocument> = model<ReviewDocument>(
  "Review",
  ReviewSchema
);

export { Review, ReviewSchema, type ReviewDocument };
