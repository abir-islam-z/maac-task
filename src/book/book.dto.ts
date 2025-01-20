import { PartialType } from '@nestjs/mapped-types';
import { IsOptional, IsString } from 'class-validator';

export class CreateBookDto {
  @IsString()
  title: string;

  @IsString()
  authored: string;

  @IsString()
  @IsOptional()
  published_date: string;

  @IsString()
  @IsOptional()
  summary: string;
}

export class UpdateBookDto extends PartialType(CreateBookDto) {}
