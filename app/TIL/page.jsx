import React from "react";
import styles from "../page.module.css";
import Header from "../components/Header";
import path from "path";
import TILFilteredList from "../components/TIL/TILFilteredList";
import fs from "fs";
import matter from "gray-matter";

export const metadata = {
  title: "Mag's TIL",
};

const getTILPosts = async () => {
	const postsDirectory = path.join(process.cwd(), "Posts", "TIL");
	const filenames = fs.readdirSync(postsDirectory);

	const posts = filenames.map((filename) => {
		const filePath = path.join(postsDirectory, filename);
		const fileContent = fs.readFileSync(filePath, "utf-8");
		const { data } = matter(fileContent);

		return {
			slug: filename.replace(".mdx", ""),
			title: data.title,
			description: data.description,
			filter: data.filter || [],
		}
	})
	return posts;
}

export default async function TIL() {
	const posts = await getTILPosts();
  const filters = ["All", ...new Set(posts.flatMap((post) => post.filter))];

  return (
    <div className={styles.mainBody}>
      <div className={styles.mainContainer}>
        <Header
          title="TIL"
          description="오늘 배운 것을 당일에 바로 정리하기 위해 노력하고 있습니다."
        />
        <TILFilteredList filters={filters} posts={posts} />
      </div>
    </div>
  );
};
