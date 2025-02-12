import path from "path";
import fs from "fs";
import matter from "gray-matter";

const getStudyPost = async (slug) => {
  const postPath = path.join(process.cwd(), "posts", "Study", `${slug}.mdx`);

  if (!fs.existsSync(postPath)) {
    return null; // 404(파일 없음))
  }

  const fileContent = fs.readFileSync(postPath, "utf-8");
  const { content, data } = matter(fileContent);

  return {
    title: data.title,
    description: data.description,
    date: data.date,
    order: typeof data.order === "number" ? data.order : 0,
    content,
  };
};

export default getStudyPost;
