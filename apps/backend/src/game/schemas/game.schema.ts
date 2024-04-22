import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type GameDocument = HydratedDocument<Game>;

@Schema()
export class Game {
  @Prop()
  name: string;

  @Prop()
  year: number;

  @Prop()
  genre: string;

  @Prop()
  rating: number;
}

export const GameSchema = SchemaFactory.createForClass(Game);
