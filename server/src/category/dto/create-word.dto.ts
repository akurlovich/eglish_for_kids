import { ObjectId } from "mongoose";

export class CreateWordDto {
  readonly naitive: string;
  readonly translate: string;
  readonly image: string;
  readonly audio: string;
  readonly categoryId: ObjectId;
}