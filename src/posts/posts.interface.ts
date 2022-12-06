export interface ICreatePost {
  userId: string;
  title: string;
  body: string;
  categoryId: string;
  tags: string[];
  mediaId: string[];
}

export interface IPostSearch {
  where: any;
  order: any;
  skip: number;
  take: number;
}
