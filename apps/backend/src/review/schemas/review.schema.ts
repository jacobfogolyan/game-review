import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument, Document } from 'mongoose';
import { Media } from 'src/game/types';

export type ReviewDocument = HydratedDocument<Review>;

@Schema()
export class Review extends Document {
  @Prop({ required: true })
  gameTitle: string;

  @Prop({ required: true })
  reviewTitle: string;

  @Prop({ required: true })
  reveiewDescription: string;

  @Prop({ type: Object })
  media: Media;

  @Prop({ required: true })
  author: string;

  @Prop({ type: Date, required: true })
  updatedAt: Date;

  @Prop({ type: Date, required: true })
  postedAt: Date;

  @Prop({ required: true })
  description: string;
}

export const ReviewSchema = SchemaFactory.createForClass(Review);
