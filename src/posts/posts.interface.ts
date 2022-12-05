export interface ICreatePost {
  userId: string;
  title: string;
  body: string;
  categoryId: string;
  tags: string[];
  media: IMedia[];
  comments: IComment[];
  votes: IVote[];
  badges: IBadges[];
}

export interface IMedia {
  id: string;
  postId: string;
  reviewId: string;
  url: string;
}

export interface IComment {
  id: string;
  postId: string;
  reviewId: string;
  userId: string;
  body: string;
  votes: IVote[];
}

export interface IVote {
  id: string;
  isUpVote: boolean;
  isDownVote: boolean;
  postId: string;
  reviewId: string;
  userId: string;
  commentId: string;
}

export interface IBadges {
  id: string;
  postId: string;
  reviewId: string;
  lightModeUrl: string;
  darkModeUrl: string;
  userId: string;
}
