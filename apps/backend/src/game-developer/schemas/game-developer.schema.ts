import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Document } from 'mongoose';
export type GameDeveloperDocument = HydratedDocument<GameDeveloper>;

@Schema()
export class GameDeveloper extends Document {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  country: string;
}

export const GameDeveloperSchema = SchemaFactory.createForClass(GameDeveloper);
