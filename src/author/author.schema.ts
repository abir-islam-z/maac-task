import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, HydratedDocument } from 'mongoose';

@Schema({
  timestamps: true,
})
export class Author extends Document {
  @Prop({ required: true })
  name: string;

  @Prop({ default: null })
  bio: string;
}
export type AuthorType = HydratedDocument<Author>;
export const AuthorSchema = SchemaFactory.createForClass(Author);
