export interface ICreatePost {
  userId: string;
  title: string;
  body: string;
  categoryId: string;
  tags: string[];
  mediaId: string[];
}
