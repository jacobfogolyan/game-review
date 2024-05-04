import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Document } from 'mongoose';
import type { Media, Score } from '../types';

export type GameDocument = HydratedDocument<GameSchemaDocument>;

@Schema()
export class GameSchemaDocument extends Document {
  @Prop({ required: true })
  title: string;

  @Prop()
  description: string;

  @Prop()
  developer: string;

  @Prop()
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
  score: Score;
}

export const GameSchema = SchemaFactory.createForClass(GameSchemaDocument);
