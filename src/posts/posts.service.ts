import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { ICreatePost, IPostSearch, IUpdatePost } from './posts.interface';

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

  async updatePost(updatePost: IUpdatePost): Promise<any> {
    return await this.prisma.post.update({
      data: {
        title: updatePost.title,
        body: updatePost.body,
        categoryId: updatePost.categoryId,
        tags: updatePost.tags,
        mediaId: updatePost.mediaId,
      },
      where: {
        id: updatePost.id,
      },
    });
  }

  async findBySearch(options: IPostSearch): Promise<any> {
    const posts = await this.prisma.post.findMany({
      where: {
        userId:options.where.userId,
        title: {
          contains: options.where.title,
        },
        body: {
          contains: options.where.body,
        },
      },
      include: {
        user: true,
      },
      skip: options.skip,
      take: options.take,
      orderBy: options.order,
    });
    return posts;
  }

  async findById(id: string): Promise<any> {
    const post = await this.prisma.post.findUnique({
      where: { id },
    });
    return post;
  }

}
