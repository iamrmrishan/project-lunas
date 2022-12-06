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
import { CreatePost } from './dto/create-post.dto';
import { PostsService } from './posts.service';

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @UseGuards(JwtAuthGuard)
  @ApiSecurity('access-key')
  @UseInterceptors(ClassSerializerInterceptor)
  @Post('create-post')
  async createPost(
    @getCurrentUser() currentUser: IUser,
    @Body() createPost: CreatePost,
  ): Promise<any> {
    createPost.userId = currentUser.id;
    return this.postsService.createPost(createPost);
  }

  @Get('search')
  async postSearch(
    @Query('keyword') keyword: string,
    @Query('sortBy') sortBy: string,
    @Query('page') page: string,
    @Query('limit') limit: string,
  ): Promise<any> {
    // const order = { createdAt: 'desc' };
    const order: any = {};
    const where: any = {};
    if (keyword) where.title = new RegExp(keyword.toString(), 'i');
    const options = {
      where,
      order,
      skip: limit && page ? (parseInt(page) - 1) * parseInt(limit) : 0,
      take: limit ? parseInt(limit) : 4,
    };
    return this.postsService.findBySearch(options);
  }
}
