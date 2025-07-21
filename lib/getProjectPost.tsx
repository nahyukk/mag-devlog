import path from "path";
import fs from "fs";
import matter from "gray-matter";

interface ProjectPost {
  title: string;
  description: string;
  date: string;
  imageUrl: string;
  content: string;
}

const getProjectPost = async (slug: string): Promise<ProjectPost | null> => {
  const postPath = path.join(process.cwd(), "posts", "Projects", `${slug}.mdx`);

  if (!fs.existsSync(postPath)) {
    return null;
  }

  const fileContent = fs.readFileSync(postPath, "utf-8");
  const { content, data } = matter(fileContent);

  return {
    title: data.title,
    description: data.description,
    date: data.date,
    imageUrl: data.imageUrl ?? "",
    content,
  };
};

export default getProjectPost;