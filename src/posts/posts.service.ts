import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { ICreatePost } from './posts.interface';

@Injectable()
export class PostsService {
  constructor(private prisma: PrismaService) {}

  async createPost(createPost: ICreatePost): Promise<any> {
    return await this.prisma.post.create({ data: {
userId: createPost.userId,
title: createPost.title,
body: createPost.body,
categoryId: createPost.categoryId,
tags: createPost.tags,
// media: createPost.media,
// comments: createPost.comments,
// votes: createPost.votes,
// badges:createPost.badges,

    } });
  }
}
