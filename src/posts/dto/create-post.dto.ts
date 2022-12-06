import {
  IsArray,
  IsBoolean,
  IsNotEmpty,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreatePost {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  userId: string;

  @IsNotEmpty({ message: 'The Post Should Have a Title' })
  @IsString()
  @ApiProperty()
  title: string;

  @IsNotEmpty({ message: 'The Post Should Have a Body' })
  @IsString()
  @ApiProperty()
  body: string;

  @IsNotEmpty({ message: 'The Post Should Have a Category' })
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

