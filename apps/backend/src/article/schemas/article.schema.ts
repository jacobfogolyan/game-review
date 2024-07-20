import * as mongoose from 'mongoose';
import { Game } from 'src/game/schemas/game.schema';
import { HydratedDocument, Document } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { User } from 'src/user/schemas/user.schema';

export type ArticleDocument = HydratedDocument<Article>;

@Schema()
export class Article extends Document {
  @Prop()
  name: string;

  @Prop()
  description: string;

  @Prop()
  releaseDate?: Date;

  @Prop()
  genres?: string[];

  @Prop([String])
  platforms?: string[];

  @Prop()
  permissions?: string[];

  @Prop({ required: true, type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  user: User;

  @Prop({ required: true, type: mongoose.Schema.Types.ObjectId, ref: 'Game' })
  game: Game;
}

export const ArticleSchema = SchemaFactory.createForClass(Article);
