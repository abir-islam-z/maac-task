/* 
Create a Book: POST /books
Retrieve All Books: GET /books (should populate author details)
Retrieve a Single Book by ID: GET /books/:id (should populate author details)
Update a Book: PUT /books/:id
Delete a Book: DELETE /books/:id

*/

import {
  BadRequestException,
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateBookDto, UpdateBookDto } from './book.dto';
import { BookService } from './book.service';

@Controller('/books')
export class BookController {
  constructor(private bookService: BookService) {}

  @Post('/')
  async createBook(@Body() dto: CreateBookDto) {
    try {
      return await this.bookService.createABook(dto);
    } catch (error) {
      console.log(error);
      throw new BadRequestException(error.message);
    }
  }

  @Get('/')
  async getAllBooks() {
    try {
      return await this.bookService.getAllBooks();
    } catch (error) {
      console.log(error);
      throw new NotFoundException('No Books Found');
    }
  }

  @Get('/:id')
  async getBookById(@Param('id') id: string) {
    try {
      return await this.bookService.getBookById(id);
    } catch (error) {
      console.log(error);
      throw new NotFoundException('No Book Found');
    }
  }

  @Put('/:id')
  async updateBookById(@Body() dto: UpdateBookDto, @Param('id') id: string) {
    try {
      return await this.bookService.updateBookById(id, dto);
    } catch (error) {
      console.log(error);
      throw new BadRequestException("Couldn't update the book.");
    }
  }

  @Delete('/:id')
  async deleteBookById(@Param('id') id: string) {
    try {
      await this.bookService.deleteBookById(id);
      return 'Book has been deleted';
    } catch (error) {
      console.log(error);
      throw new BadRequestException("Couldn't delete book.");
    }
  }
}
