import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, HydratedDocument, ObjectId } from 'mongoose';
// import mongoose from 'mongoose';

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User extends Document {
  @Prop({ required: true })
  name: string;

  @Prop(String)
  description: string;

  @Prop({ type: [String], default: [] })
  permissions: string[];

  @Prop({ type: [Number], default: [] })
  members: number[];

  @Prop({ default: '' })
  displayPicture: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
