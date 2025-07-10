export interface Post {
  slug: string;
  title: string;
  description: string;
  date: string;
  filter: string[];
}

export interface PostWithFilter extends Post {
  filter: string[];
}