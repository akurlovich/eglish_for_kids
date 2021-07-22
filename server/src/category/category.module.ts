import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { CategoryController } from "./category.controller";
import { CategoryService } from "./category.service";
import { Category, CategorySchema } from "./schemas/category.schema";
import { Words, WordsSchema } from "./schemas/words.schema";

@Module({
  imports: [
    MongooseModule.forFeature([{name: Category.name, schema: CategorySchema}]),
    MongooseModule.forFeature([{name: Words.name, schema: WordsSchema}]),
  ],
  controllers: [CategoryController],
  providers: [CategoryService]
})
export class CategoryModule {}