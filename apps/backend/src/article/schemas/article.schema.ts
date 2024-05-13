import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Document } from 'mongoose';

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
}

export const ArticleSchema = SchemaFactory.createForClass(Article);
