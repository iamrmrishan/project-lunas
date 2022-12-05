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
  @ValidateNested({ each: true })
  @ApiProperty()
  media: Media[];

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @ApiProperty()
  comments: Comment[];

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @ApiProperty()
  votes: Vote[];

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
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
  @ValidateNested({ each: true })
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
  isUpVote: string;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  isDownVote: string;
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
