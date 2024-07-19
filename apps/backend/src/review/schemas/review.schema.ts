import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Media } from 'src/game/types';
import { User } from 'src/user/schemas/user.schema';
import { HydratedDocument, Document } from 'mongoose';
import * as mongoose from 'mongoose';

export type ReviewDocument = HydratedDocument<Review>;

@Schema()
export class Review extends Document {
  @Prop({ required: true })
  reviewTitle: string;

  @Prop({ required: true })
  reveiewDescription: string;

  @Prop({ type: Object })
  media: Media;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Game', required: true })
  gameId: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true })
  author: User;

  @Prop({ type: Date, required: true })
  updatedAt: Date;

  @Prop({ type: Date, required: true })
  postedAt: Date;

  @Prop({ required: true })
  description: string;
}

export const ReviewSchema = SchemaFactory.createForClass(Review);
