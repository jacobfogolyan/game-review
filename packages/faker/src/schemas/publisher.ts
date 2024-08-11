import { Schema, Document, model, Model } from "mongoose";

interface PublisherDocument extends Document {
  name: string;
}

const publisherSchema = new Schema<PublisherDocument>({
  name: { type: String, required: true },
});

const Publisher: Model<PublisherDocument> = model<PublisherDocument>(
  "Publisher",
  publisherSchema,
);

export { Publisher, publisherSchema, type PublisherDocument };
