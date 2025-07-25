import React from 'react'
import styles from "../page.module.css";
import fs from "fs";
import path from "path";
import Post from '@/components/Post';


export const metadata = {
  title: "Resume | NahyukKim",
};

export default function Resume() {
  const filePath = path.join(process.cwd(), "posts", "Resume", "resume-eng.mdx");
  const mdxSource = fs.readFileSync(filePath, "utf8");

  return (
    <main className={styles.mainBody}>
      <div className={styles.mainContainer}>
        <div
        style={{
          marginTop: "30px",
        }}
      >
          <Post content={mdxSource} />
        </div>
      </div>
    </main>
  )
}
