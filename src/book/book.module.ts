import { Module } from '@nestjs/common';
import { BookController } from './book.controller';
import { BookService } from './book.service';
import { MongooseModule } from '@nestjs/mongoose';
import { BookSchema } from './schemas/book.schema';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [
    AuthModule,
      // to use auth module from book module
    MongooseModule.forFeature([
      {name: "Book", schema: BookSchema}
    ])
    // make sure to register model in main module file inside imports
  ],

  controllers: [BookController],
  providers: [BookService]
})
export class BookModule {}
