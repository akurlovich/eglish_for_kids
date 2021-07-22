import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { ObjectId } from "mongoose";
import { CategoryService } from "./category.service";
import { CreateCategoryDto } from "./dto/create-category.dto";
import { CreateWordDto } from "./dto/create-word.dto";

@Controller('/category')
export class CategoryController {
  constructor(private categoryService: CategoryService) {}

  @Post()
  create(@Body() dto: CreateCategoryDto) {
    return this.categoryService.create(dto);
  }

  @Get()
  getAll() {
    return this.categoryService.getAll();
  }

  @Get(':id')
  getOne(@Param('id') id: ObjectId) {
    return this.categoryService.getOne(id)
  }

  @Put(':id')
  update(@Body() dto: CreateCategoryDto, @Param('id') id: ObjectId) {
    return this.categoryService.update(id, dto);
  }

  @Delete(':id')
  delete(@Param('id') id: ObjectId) {
    return this.categoryService.delete(id)
  }

  @Post('/word')
  addWord(@Body() dto: CreateWordDto) {
    return this.categoryService.addWord(dto);
  }

  @Post('/many')
  createMany(@Body() dto: CreateCategoryDto[]) {
    return this.categoryService.createMany(dto)
  }

  @Delete('/deleteall')
  deleteAll() {
    return this.categoryService.deleteAll();
  }
}