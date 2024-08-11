import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Document } from 'mongoose';
export type PublisherDocument = HydratedDocument<Publisher>;

@Schema()
export class Publisher extends Document {
  @Prop({ required: true })
  name: string;
}

export const PublisherSchema = SchemaFactory.createForClass(Publisher);
