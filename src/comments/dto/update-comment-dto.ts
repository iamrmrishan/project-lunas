import {
  IsArray,
  IsBoolean,
  IsNotEmpty,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateComment {
  @ApiProperty()
  @IsNotEmpty({ message: 'The Post Should Have an Id In Order To Update' })
  @IsString()
  id: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'The Post Should Have an userId In Order To Update' })
  @IsString()
  userId: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  postId: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  reviewId: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  parentCommentId: string;

  @IsNotEmpty({ message: 'The Comment Should Have a Body to Update' })
  @IsString()
  @ApiProperty()
  body: string;
}
