export interface IPost {
  node: IPostNode;
}

export interface IPostNode {
  title: string;
  excerpt: string;
  slug: string;
  categories: ICategory[];
  featuredImage: IImage;
  author: IAuthor;
  createdAt: string;
  content: IContent;
}

export interface ICategory {
  name: string;
  slug: string;
}

export interface IAuthor {
  id: string;
  bio: string;
  name: string;
  photo: IImage;
}

export interface IImage {
  url: string;
}

export interface IContent {
  raw: { children: IContentChildren[] };
}

export interface IContentChildren {
  type: string;
  children: any;
}

export interface IComment {
  name: string;
  createdAt: string;
  comment: string;
}
