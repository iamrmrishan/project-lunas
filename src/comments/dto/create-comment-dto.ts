import {
  IsArray,
  IsBoolean,
  IsNotEmpty,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateComment {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
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

  @IsNotEmpty({ message: 'The Comment Should Have a Body' })
  @IsString()
  @ApiProperty()
  body: string;
  
}
