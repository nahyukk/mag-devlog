export interface ProjectPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  imageUrl: string;
}

export interface ProjectPostWithFilter extends ProjectPost {
  filter: string[];
}