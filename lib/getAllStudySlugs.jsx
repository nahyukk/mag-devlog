import fs from "fs";
import path from "path";

export const getAllStudySlugs = async () => {
  const postDir = path.join(process.cwd(), "posts", "Study");
  const files = fs.readdirSync(postDir);

  return files
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => file.replace(".mdx", ""));
};
