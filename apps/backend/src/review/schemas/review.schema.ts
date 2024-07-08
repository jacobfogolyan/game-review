import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Document } from 'mongoose';

export type ReviewDocument = HydratedDocument<Review>;

@Schema()
export class Review extends Document {
  @Prop()
  title: string;
}

export const ReviewSchema = SchemaFactory.createForClass(Review);
