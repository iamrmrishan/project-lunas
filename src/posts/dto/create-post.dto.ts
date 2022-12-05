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
  media: Media[];

  @IsOptional()
  @IsArray()
  @ApiProperty()
  comments: Comment[];

  @IsOptional()
  @IsArray()
  @ApiProperty()
  votes: Vote[];

  @IsOptional()
  @IsArray()
  @ApiProperty()
  badges: Badges[];
}

export class Media {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  id: string;

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
  @IsNotEmpty()
  url: string;
}

export class Comment {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  id: string;

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
  @IsNotEmpty()
  userId: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  body: string;

  @ApiProperty()
  @IsArray()
  votes: Vote[];
}

export class Vote {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  id: string;

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
  @IsNotEmpty()
  userId: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  commentId: string;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  isUpVote: boolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  isDownVote: boolean;
}

export class Badges {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  id: string;

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
  @IsNotEmpty()
  lightModeUrl: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  userId: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  darkModeUrl: string;
}
