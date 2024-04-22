import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Schema as s } from 'mongoose';

export type GameDocument = HydratedDocument<Game>;

@Schema()
export class Game {
  @Prop({ required: true })
  name: string;

  @Prop()
  year: number;

  @Prop()
  genre: string;

  @Prop()
  rating: number;

  @Prop({ type: s.Types.Date, require: true })
  date: Date;
}

export const GameSchema = SchemaFactory.createForClass(Game);
