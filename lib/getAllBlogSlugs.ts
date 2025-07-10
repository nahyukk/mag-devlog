import fs from "fs";
import path from "path";

export const getAllBlogSlugs = async () => {
  const postDir = path.join(process.cwd(), "posts", "Blog");
  const files = fs.readdirSync(postDir);

  return files
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => file.replace(".mdx", ""));
};
