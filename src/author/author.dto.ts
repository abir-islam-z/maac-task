import { PartialType } from '@nestjs/mapped-types';
import { IsOptional, IsString } from 'class-validator';

export class CreateAuthorDto {
  @IsString()
  name: string;

  @IsString()
  @IsOptional()
  bio: string;
}

export class UpdateAuthorDto extends PartialType(CreateAuthorDto) {}
