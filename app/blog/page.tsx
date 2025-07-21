import React from "react";
import path from "path";
import fs from "fs";
import styles from "../page.module.css";
import Header from "../components/Header";
import matter from "gray-matter";
import BlogFilteredList from "@/components/Blog/BlogFilteredList";

export const metadata = {
  title: "Blog | Mag's Devlog",
};

interface Post {
  slug: string;
  title: string;
  description: string;
  date: string;
  latestDate: Date;
  order: number;
  filter: string[];
}

const getBlogPosts = async (): Promise<Post[]> => {
  const postsDirectory = path.join(process.cwd(), "posts", "Blog");
  const filenames = fs.readdirSync(postsDirectory);

  const posts = filenames.map((filename) => {
    const filePath = path.join(postsDirectory, filename);
    const fileContent = fs.readFileSync(filePath, "utf-8");
    const { data } = matter(fileContent);

    let latestDate;

    if (data.date.includes(" ~ ")) {
      const [startDate, endDate] = data.date
        .split(" ~ ")
        .map((date) => new Date(date));
      latestDate = endDate;
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
    };
  });
  return posts.sort((a, b) => {
    const dateComparison = b.latestDate - a.latestDate;
    if (dateComparison !== 0) return dateComparison;
    return b.order - a.order;
  });
};

export default async function Blog() {
  const posts = await getBlogPosts();
  const filters = [
    "All",
    ...[...new Set(posts.flatMap((post) => post.filter))].sort((a, b) =>
      a.localeCompare(b)
    ),
  ];

  return (
    <main className={styles.mainBody}>
      <div className={styles.mainContainer}>
        <header>
          <Header
            title="Blog"
            description="새로 배운 내용을 정리합니다"
          />
        </header>
        <section
          style={{
            position: "relative",
            width: "100%",
            maxWidth: "810px",
            marginBottom: "10px",
          }}>
          <BlogFilteredList filters={filters} posts={posts} />
        </section>
      </div>
    </main>
  );
}
