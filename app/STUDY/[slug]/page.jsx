import React from "react";
import path from "path";
import fs from "fs";
import matter from "gray-matter";
import { notFound } from "next/navigation";
import styles from "../../page.module.css";
import Post from "../../components/Post";

const getStudyPost = async (slug) => {
  const postPath = path.join(process.cwd(), "posts", "Study", `${slug}.mdx`);

  if (!fs.existsSync(postPath)) {
    return null; // 파일이 없을 때 404 처리
  }

  const fileContent = fs.readFileSync(postPath, "utf-8");
  const { content, data } = matter(fileContent);

  return {
    title: data.title,
    description: data.description,
    date: data.date,
    content,
  };
};

export default async function StudyPost({ params }) {
  const { slug } = params;
  const post = await getStudyPost(slug);

  if (!post) {
    notFound();
  }

  return (
    <div className={styles.mainBody}>
      <div className={styles.mainContainer}>
        <div className={styles.postHeader}>
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
            }}
          >
            <h2 className={styles.title} style={{ flexGrow: 1 }}>
              {post.title}
            </h2>
            <p
              className={styles.date}
              style={{
                color: "var(--sub-text-color",
                fontFamily: "var(--font-roboto-mono)",
              }}
            >
              {post.date}
            </p>
          </div>
          <h3 className={styles.description}>{post.description}</h3>
        </div>
        <Post content={post.content} />
      </div>
    </div>
  );
}
