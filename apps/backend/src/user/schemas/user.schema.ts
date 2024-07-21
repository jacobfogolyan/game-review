import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User extends Document {
  @Prop({ required: true })
  firstName: string;

  @Prop({ required: true })
  lastName: string;

  @Prop({ required: true })
  username: string;

  @Prop({ required: true })
  password: string;

  @Prop({ required: true })
  email: string;

  @Prop({ type: [String], default: [] })
  permissions: string[];

  @Prop({ type: [Number], default: [] })
  members: number[];

  @Prop({ type: [Number], default: [] })
  teamMembers: number[];

  // TODO: add profile
  // @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Profile' })
  // profile?: Profile;
}

export const UserSchema = SchemaFactory.createForClass(User);
