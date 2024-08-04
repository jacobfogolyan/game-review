import { Schema, Document, model, Model } from "mongoose";
import mongoose from "mongoose";

interface ArticleDocument extends Document {
  title: string;
  description: string;
  releaseDate?: Date;
  genres?: string[];
  platforms?: string[];
  permissions?: string[];
  user: mongoose.Types.ObjectId;
  game: mongoose.Types.ObjectId;
}

const articleSchema = new Schema<ArticleDocument>({
  title: { type: String, required: true },
  description: { type: String, required: true },
  releaseDate: { type: Date },
  genres: { type: [String] },
  platforms: { type: [String] },
  permissions: { type: [String] },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  game: { type: mongoose.Schema.Types.ObjectId, ref: "Game", required: true },
});

const Article: Model<ArticleDocument> = model<ArticleDocument>(
  "Article",
  articleSchema
);

export { Article, articleSchema, type ArticleDocument };
