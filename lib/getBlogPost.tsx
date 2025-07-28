import path from "path";
import fs from "fs";
import matter from "gray-matter";

interface BlogPost {
  title: string;
  description: string;
  date: string;
  order: number;
  content: string;
  ogImage: string;
}

const getBlogPost = async (slug: string): Promise<BlogPost | null> => {
  const postPath = path.join(process.cwd(), "posts", "Blog", `${slug}.mdx`);

  if (!fs.existsSync(postPath)) {
    return null;
  }

  const fileContent = fs.readFileSync(postPath, "utf-8");
  const { content, data } = matter(fileContent);

  return {
    title: data.title,
    description: data.description,
    date: data.date,
    order: typeof data.order === "number" ? data.order : 0,
    content,
    ogImage: data.ogImage,
  };
};

export default getBlogPost;
