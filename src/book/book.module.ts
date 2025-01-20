import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthorModule } from 'src/author/author.module';
import { BookController } from './book.controller';
import { Book, BookSchema } from './book.schema';
import { BookService } from './book.service';

@Module({
  controllers: [BookController],
  providers: [BookService],
  imports: [
    AuthorModule,
    MongooseModule.forFeature([
      {
        name: Book.name,
        schema: BookSchema,
      },
    ]),
  ],
})
export class BookModule {}
