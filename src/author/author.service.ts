import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Book } from 'src/book/book.schema';
import { CreateAuthorDto, UpdateAuthorDto } from './author.dto';
import { Author } from './author.schema';

@Injectable()
export class AuthorService {
  constructor(
    @InjectModel(Author.name) private readonly authorModel: Model<Author>,
    @InjectModel(Book.name) private readonly bookModel: Model<Book>,
  ) {}

  async createAnAuthor(dto: CreateAuthorDto) {
    const createdUser = await this.authorModel.create(dto);

    return createdUser;
  }

  async getAuthorById(id: string) {
    const findUser = await this.authorModel.findById(id);

    return findUser;
  }

  async getAllAuthors() {
    const findUsers = await this.authorModel.find({});

    return findUsers;
  }

  async updateAuthorById(id: string, dto: UpdateAuthorDto) {
    const updatedUser = await this.authorModel.findByIdAndUpdate(id, dto, {
      new: true,
    });

    return updatedUser;
  }
  async deleteAuthorById(id: string) {
    await this.bookModel.deleteMany({ authored: id });
    await this.authorModel.findByIdAndDelete(id);
  }
}
