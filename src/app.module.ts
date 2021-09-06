import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { ProductsModule } from './products/products.module';
import {BooksModule} from './books/books.module';
@Module({
  imports: [
    ProductsModule,
    BooksModule,
    MongooseModule.forRoot(
      'mongodb+srv://Salik:JFAVPkCgW8mtXRN@cluster0.p1m4g.mongodb.net/Library?retryWrites=true&w=majority',
    ),
  ],
})
export class AppModule {}
