import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Category } from './category.schema';
import * as mongoose from 'mongoose'

export type WordsDocument = Words & Document;

@Schema()
export class Words {
  @Prop()
  naitive: string;

  @Prop()
  translate: string;

  @Prop()
  image: string;

  @Prop()
  audio: string;

  @Prop({type: [{type: mongoose.Schema.Types.ObjectId, ref: 'Category'}]})
  categoryId: Category;

}

export const WordsSchema = SchemaFactory.createForClass(Words);