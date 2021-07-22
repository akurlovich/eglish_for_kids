import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CategoryModule } from './category/category.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://efkAdmin:efk_admin@cluster0.ddmrs.mongodb.net/efk_admin?retryWrites=true&w=majority'),
    CategoryModule
  ]
})
export class AppModule {}
