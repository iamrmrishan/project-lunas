import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import {
  ICommentSearch,
  ICreateComment,
  IUpdateComment,
} from './comments.interface';

@Injectable()
export class CommentsService {
  constructor(private prisma: PrismaService) {}

  async createComment(createComment: ICreateComment): Promise<any> {
    return await this.prisma.comment.create({
      data: {
        userId: createComment.userId,
        body: createComment.body,
        postId: createComment.postId,
        reviewId: createComment.reviewId,
        parentCommentId: createComment.parentCommentId,
      },
    });
  }

  async updateComment(updateComment: IUpdateComment): Promise<any> {
    return await this.prisma.comment.update({
      data: {
        body: updateComment.body,
      },
      where: {
        id: updateComment.id,
      },
    });
  }

  async findBySearch(options: ICommentSearch): Promise<any> {
    const comments = await this.prisma.comment.findMany({
      where: {
        userId: options.where.userId,
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
    return comments;
  }
}
