import React from "react";
import { notFound } from "next/navigation";
import styles from "../../page.module.css";
import Post from "../../components/Post";
import getStudyPost from "../../../lib/getStudyPost";

export const metadata = {
  title: "Mag's Study",
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
            <p className={styles.date}>{post.date}</p>
          </div>
          <h3 className={styles.description}>{post.description}</h3>
        </div>
        <Post content={post.content} />
      </div>
    </div>
  );
}
