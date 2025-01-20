import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Book, BookSchema } from 'src/book/book.schema';
import { AuthorController } from './author.controller';
import { Author, AuthorSchema } from './author.schema';
import { AuthorService } from './author.service';

@Module({
  controllers: [AuthorController],
  providers: [AuthorService],
  imports: [
    MongooseModule.forFeature([
      {
        name: Author.name,
        schema: AuthorSchema,
      },
      {
        name: Book.name,
        schema: BookSchema,
      },
    ]),
  ],
})
export class AuthorModule {}
