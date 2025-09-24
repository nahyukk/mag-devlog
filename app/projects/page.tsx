import Header from "@/components/Header";
import styles from "../page.module.css";
import React from "react";
import path from "path";
import fs from "fs";
import matter from "gray-matter";
import ProjectFilteredList from "@/components/Project/ProjectFilteredList";

export const metadata = {
  title: "Projects | Mag's Devlog",
};

interface Project {
  slug: string;
  title: string;
  description: string;
  imageUrl: string;
  date: string;
  latestDate: Date;
  order: number;
  filter: string[];
}

const getProjectPosts = async (): Promise<Project[]> => {
  const postsDirectory = path.join(process.cwd(), "posts", "Projects");
  const filenames = fs.readdirSync(postsDirectory);

  const posts = filenames.map((filename) => {
    const filePath = path.join(postsDirectory, filename);
    const fileContent = fs.readFileSync(filePath, "utf-8");
    const { data } = matter(fileContent);

    let latestDate;

    if (data.date && data.date.includes(" ~ ")) {
      const [startDate, endDate] = data.date
        .split(" ~ ")
        .map((date) => new Date(date));
      latestDate = startDate;
    } else {
      latestDate = new Date(data.date);
    }
    return {
      slug: filename.replace(".mdx", ""),
      title: data.title,
      description: data.description,
      date: data.date,
      latestDate,
      order: typeof data.order === "number" ? data.order : 0,
      filter: data.filter || [],
      imageUrl: data.imageUrl || "",
    };
  });
  return posts.sort((a, b) => {
    const dateComparison = b.latestDate - a.latestDate;
    if (dateComparison !== 0) return dateComparison;
    return b.order - a.order;
  });
};

export default async function Projects() {
  const posts = await getProjectPosts();
  const filters = [
  "All",
  ...[...new Set(posts.flatMap((post) => post.filter))].sort((a, b) => {
    // 글자 수 우선
    if (a.length !== b.length) {
      return a.length - b.length;
    }

    // 같은 길이면 알파벳 순
    return a.localeCompare(b);
  }),
];

  return (
    <main className={styles.mainBody}>
      <div className={styles.mainContainer}>
        <header>
          <Header title="Projects" description="진행한 프로젝트를 기록합니다." />
        </header>
        <section
          style={{
            position: "relative",
            width: "100%",
            maxWidth: "810px",
            marginBottom: "10px",
          }}>
          <ProjectFilteredList posts={posts} filters={filters} />
        </section>
      </div>
    </main>
  );
}