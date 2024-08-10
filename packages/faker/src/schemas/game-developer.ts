import { Schema, Document, model, Model } from "mongoose";

interface GameDeveloperDocument extends Document {
  name: string;
  country: string;
}

const gameDeveloperSchema = new Schema<GameDeveloperDocument>({
  name: { type: String, required: true },
  country: { type: String, required: true },
});

const GameDeveloper: Model<GameDeveloperDocument> =
  model<GameDeveloperDocument>("GameDeveloper", gameDeveloperSchema);

export { GameDeveloper, gameDeveloperSchema, type GameDeveloperDocument };
