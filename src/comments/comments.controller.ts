import {
  Body,
  ClassSerializerInterceptor,
  Controller,
  Get,
  Post,
  Query,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { ApiSecurity } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { getCurrentUser } from 'src/users/current-user.decorator';
import { IUser } from 'src/users/users.interface';
import { CreateComment } from './dto/create-comment-dto';
import { UpdateComment } from './dto/update-comment-dto';
import { CommentsService } from './comments.service';

@Controller('comments')
export class CommentsController {
  constructor(private readonly commentService: CommentsService) {}

  @UseGuards(JwtAuthGuard)
  @ApiSecurity('access-key')
  @UseInterceptors(ClassSerializerInterceptor)
  @Post('create-comment')
  async createComment(
    @getCurrentUser() currentUser: IUser,
    @Body() createComment: CreateComment,
  ): Promise<any> {
    createComment.userId = currentUser.id;
    return this.commentService.createComment(createComment);
  }

  @UseGuards(JwtAuthGuard)
  @ApiSecurity('access-key')
  @UseInterceptors(ClassSerializerInterceptor)
  @Post('update-comment')
  async updateComment(
    @getCurrentUser() currentUser: IUser,
    @Body() updateComment: UpdateComment,
  ): Promise<any> {
    if ((updateComment.userId = currentUser.id))
      return this.commentService.updateComment(updateComment);
  }

  @Get('search')
  async commentSearch(
    @Query('keyword') keyword: string,
    @Query('sortBy') sortBy: string,
    @Query('page') page: string,
    @Query('limit') limit: string,
  ): Promise<any> {
    const order = { createdAt: 'desc' };
    const where: any = {};
    if (keyword) where.userId = keyword.toString();
    if (keyword) where.body = keyword.toString();
    const options = {
      where,
      order,
      skip: limit && page ? (parseInt(page) - 1) * parseInt(limit) : 0,
      take: limit ? parseInt(limit) : 4,
    };
    return this.commentService.findBySearch(options);
  }
}
