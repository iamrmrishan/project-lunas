export interface ICreateComment {
  postId?: string;
  reviewId?: string;
  userId: string;
  parentCommentId?: string;
  body: string;
}

export interface IUpdateComment {
  id: string;
  postId?: string;
  reviewId?: string;
  userId: string;
  parentCommentId?: string;
  body: string;
}

export interface ICommentSearch {
  where: any;
  order: any;
  skip: number;
  take: number;
}
