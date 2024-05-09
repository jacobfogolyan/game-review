import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User extends Document {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  description: string;

  @Prop({ required: true, type: [String] })
  permissions: string[];

  @Prop({ default: [] })
  members: number[];

  @Prop({ default: '' })
  displayPicture: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
