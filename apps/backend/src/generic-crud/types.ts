import { Document, ObjectId } from 'mongoose';

export interface GenericDocument extends Document {
  _id: ObjectId;
}
