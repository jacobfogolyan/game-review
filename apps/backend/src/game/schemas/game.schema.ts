import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument, Document } from 'mongoose';
import type { Media, Scores } from '../types';
export type GameDocument = HydratedDocument<Game>;

@Schema()
export class Game extends Document {
  @Prop()
  title: string;

  @Prop()
  name: string;

  @Prop()
  description: string;

  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: 'GameDeveloper',
    required: true,
  })
  developer: string;

  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Publisher',
    required: true,
  })
  publisher: string;

  @Prop()
  releaseDate: Date;

  @Prop([String])
  genres: string[];

  @Prop([String])
  platforms: string[];

  @Prop({ type: Object })
  media: Media;

  @Prop({ type: Object })
  scores: Scores;
}

export const GameSchema = SchemaFactory.createForClass(Game);
