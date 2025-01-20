import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthorModule } from './author/author.module';
import { BookModule } from './book/book.module';

@Module({
  imports: [
    BookModule,
    AuthorModule,
    MongooseModule.forRoot('mongodb://localhost/maac'),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
