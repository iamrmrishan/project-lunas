import {
  IsArray,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdatePost {
  @ApiProperty()
  @IsNotEmpty({ message: 'The Post Should Have an Id In Order To Update' })
  @IsString()
  id: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'The Post Should Have an userId In Order To Update' })
  @IsString()
  userId: string;

  @IsOptional()
  @IsString()
  @ApiProperty()
  title: string;

  @IsOptional()
  @IsString()
  @ApiProperty()
  body: string;

  @IsOptional()
  @IsString()
  @ApiProperty()
  categoryId: string;

  @IsOptional()
  @IsArray()
  @ApiProperty()
  tags: string[];

  @IsOptional()
  @IsArray()
  @ApiProperty()
  mediaId: string[];
}
