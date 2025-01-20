/* 


Create an Author: POST /authors
Retrieve All Authors: GET /authors
Retrieve a Single Author by ID: GET /authors/:id
Update an Author: PUT /authors/:id
Delete an Author: DELETE /authors/:id

*/

import {
  BadRequestException,
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  NotFoundException,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateAuthorDto, UpdateAuthorDto } from './author.dto';
import { AuthorService } from './author.service';

@Controller('authors')
export class AuthorController {
  constructor(private authorService: AuthorService) {}

  @Post('/')
  async createAuthor(@Body() dto: CreateAuthorDto) {
    try {
      return await this.authorService.createAnAuthor(dto);
    } catch (error: any) {
      console.log(error);
      throw new HttpException("Couldn't Create User", 400);
    }
  }

  @Get('/')
  async getAllAuthors() {
    try {
      return await this.authorService.getAllAuthors();
    } catch (error) {
      console.log(error);
      throw new NotFoundException('No Authors found');
    }
  }

  @Get('/:id')
  async getAuthorById(@Param('id') id: string) {
    try {
      return await this.authorService.getAuthorById(id);
    } catch (error) {
      console.log(error);
      throw new NotFoundException('No Authors found');
    }
  }
  @Put('/:id')
  async updateAuthorById(
    @Param('id') id: string,
    @Body() dto: UpdateAuthorDto,
  ) {
    try {
      return await this.authorService.updateAuthorById(id, dto);
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }
  @Delete('/:id')
  async deleteAuthorById(@Param('id') id: string) {
    try {
      await this.authorService.deleteAuthorById(id);
      return 'Author has been deleted';
    } catch (error) {
      console.log(error);
      throw new BadRequestException("Couldn't Delete Author.");
    }
  }
}
