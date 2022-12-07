import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { ICreatePost, IPostSearch } from './posts.interface';

@Injectable()
export class PostsService {
  constructor(private prisma: PrismaService) {}

  async createPost(createPost: ICreatePost): Promise<any> {
    return await this.prisma.post.create({
      data: {
        userId: createPost.userId,
        title: createPost.title,
        body: createPost.body,
        categoryId: createPost.categoryId,
        tags: createPost.tags,
        mediaId: createPost.mediaId,
      },
    });
  }

  async findBySearch(options: IPostSearch): Promise<any> {
    const posts = await this.prisma.post.findMany({
      where: {
        title: {
          contains: options.where.title,
        },
        body: {
          contains: options.where.body,
        },
      },
      skip: options.skip,
      take: options.take,
      orderBy: options.order,
    });
    return posts;
  }
}
