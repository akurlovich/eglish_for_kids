import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Words } from './words.schema';
import * as mongoose from 'mongoose'

export type CategoryDocument = Category & Document;

@Schema()
export class Category {
  @Prop()
  name: string;

  @Prop({type: [{type: mongoose.Schema.Types.ObjectId, ref: 'Words'}]})
  words: Words[];

}

export const CategorySchema = SchemaFactory.createForClass(Category);