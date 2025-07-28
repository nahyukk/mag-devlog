export interface Post {
  slug: string;
  title: string;
  description: string;
  date: string;
  ogImage?: string;
}

export interface PostWithFilter extends Post {
  filter: string[];
}