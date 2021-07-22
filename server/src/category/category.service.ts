import { Injectable } from "@nestjs/common";
import { InjectConnection, InjectModel } from "@nestjs/mongoose";
import { Model, ObjectId } from "mongoose";
import { CreateCategoryDto } from "./dto/create-category.dto";
import { CreateWordDto } from "./dto/create-word.dto";
import { Category, CategoryDocument } from "./schemas/category.schema";
import { Words, WordsDocument } from "./schemas/words.schema";

@Injectable()
export class CategoryService {
  constructor(@InjectModel(Category.name) private categoryModel: Model<CategoryDocument>,
              @InjectModel(Words.name) private wordsModel: Model<WordsDocument>) {}

  async create(dto: CreateCategoryDto): Promise<Category> {
    const category = await this.categoryModel.create({...dto});
    return category;
  }
  async createMany(dto: CreateCategoryDto[]): Promise<Category[]> {
    const category = await this.categoryModel.insertMany(dto);
    return category;
  }
  async getAll(): Promise<Category[]> {
    const categories = await this.categoryModel.find();
    return categories;
  }
  async getOne(id: ObjectId): Promise<Category> {
    const category = await this.categoryModel.findById(id).populate('words');
    return category;
  }
  async update(id: ObjectId, dto: CreateCategoryDto): Promise<Category> { //! --- TO DO-------
    const category = await this.categoryModel.findByIdAndUpdate(id, dto, {new: true});
    return category;
  }
  async delete(id: ObjectId): Promise<ObjectId> {
    const category = await this.categoryModel.findByIdAndDelete(id);
    return category._id;
  }
  async deleteAll(): Promise<Category> {
    const categories = await this.categoryModel.remove({});
    return categories;
  }
  async addWord(dto: CreateWordDto): Promise<Words> {
    const category = await this.categoryModel.findById(dto.categoryId);
    const word = await this.wordsModel.create({...dto});
    category.words.push(word._id);
    await category.save();
    return word;
  }
  // async getAllWords(): Promise<Words[]> {
  //   const words = await this.wordsModel.find();
  //   return words;
  // }
}