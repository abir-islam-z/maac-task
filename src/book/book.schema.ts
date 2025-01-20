/* id: Unique identifier (auto-generated)
title: string (required)
authored: reference to Author (required)
published date: Date (optional)
summary: string (optional)
 */

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, HydratedDocument, Types } from 'mongoose';
import { AuthorType } from 'src/author/author.schema';

@Schema({
  timestamps: true,
})
export class Book extends Document {
  @Prop({ required: true })
  title: string;

  @Prop({ type: Types.ObjectId, ref: 'Author', required: true })
  authored: AuthorType;

  @Prop({
    default: Date.now(),
    type: Date,
  })
  published_date: string;

  @Prop()
  summary: string;
}
export type BookType = HydratedDocument<Book>;
export const BookSchema = SchemaFactory.createForClass(Book);
