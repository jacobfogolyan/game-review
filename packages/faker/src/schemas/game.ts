import mongoose, { Schema, Document, model, Model } from "mongoose";
import type { Media, Scores } from "./types";

interface GameDocument extends Document {
  title: string;
  name: string;
  description: string;
  developer: mongoose.Types.ObjectId;
  publisher?: mongoose.Types.ObjectId;
  releaseDate?: Date;
  genres?: string[];
  platforms?: string[];
  media?: Media;
  scores?: Scores;
}

const gameSchema = new Schema<GameDocument>({
  title: { type: String, required: true },
  name: { type: String, required: true },
  description: { type: String, required: true },
  publisher: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Publisher",
    required: true,
  },
  developer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "GameDeveloper",
    required: true,
  },
  releaseDate: { type: Date },
  genres: { type: [String] },
  platforms: { type: [String] },
  media: { type: Object },
  scores: { type: Object },
});

const Game: Model<GameDocument> = model<GameDocument>("Game", gameSchema);

export { Game, gameSchema, type GameDocument, type Media, type Scores };
