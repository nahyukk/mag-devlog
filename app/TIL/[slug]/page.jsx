import React from "react";
import path from "path";
import fs from "fs";
import matter from "gray-matter";
import { notFound } from "next/navigation";
import styles from "../../page.module.css";
import Post from "../../components/Post";
import { getAllTILSlugs } from "../../../lib/getAllTilSlugs";

export const metadata = {
  title: "Mag's TIL",
};

export async function generateStaticParams() {
  const slugs = await getAllTILSlugs();
  return slugs.map((slug) => ({ slug }));
}

const getTILPost = async (slug) => {
  const postPath = path.join(process.cwd(), "posts", "TIL", `${slug}.mdx`);

  if (!fs.existsSync(postPath)) {
    return null; // 파일이 없을 때 404 처리
  }

  const fileContent = fs.readFileSync(postPath, "utf-8");
  const { content, data } = matter(fileContent);

  return {
    title: data.title,
    description: data.description,
    content,
  };
};

export default async function TILPost({ params }) {
  const { slug } = params;
  const post = await getTILPost(slug);

  if (!post) {
    notFound();
  }

  return (
    <div className={styles.mainBody}>
      <div className={styles.mainContainer}>
        <div className={styles.postHeader}>
          <h2 className={styles.title}>{post.title}</h2>
          <h3 className={styles.description}>{post.description}</h3>
        </div>
        <Post content={post.content} />
      </div>
    </div>
  );
}
