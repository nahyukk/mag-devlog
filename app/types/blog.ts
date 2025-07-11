export interface Post {
  slug: string;
  title: string;
  description: string;
  date: string;
}

export interface PostWithFilter extends Post {
  filter: string[];
}