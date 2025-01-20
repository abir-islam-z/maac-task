import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateBookDto, UpdateBookDto } from './book.dto';
import { Book } from './book.schema';

@Injectable()
export class BookService {
  constructor(
    @InjectModel(Book.name) private readonly bookModel: Model<Book>,
  ) {}

  async createABook(dto: CreateBookDto) {
    const newBook = await this.bookModel.create(dto);
    return newBook;
  }

  async getBookById(id: string) {
    return await this.bookModel.findById(id).populate('authored');
  }

  async getAllBooks() {
    return await this.bookModel.find({}).populate('authored');
  }

  async updateBookById(id: string, dto: UpdateBookDto) {
    return await this.bookModel
      .findByIdAndUpdate(id, dto, { new: true })
      .populate('authored');
  }
  async deleteBookById(id: string) {
    await this.bookModel.findByIdAndDelete(id);
  }
}
