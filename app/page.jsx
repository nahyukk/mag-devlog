import styles from "./page.module.css";
import path from "path";
import fs from "fs";
import matter from "gray-matter";
import BlogList from "./components/Blog/BlogList";
import ProjectList from "./components/Project/ProjectList";
import Link from "next/link";

export const metadata = {
  title: "Home | Mag's Devlog",
};

const getProjectPosts = async () => {
  const postsDirectory = path.join(process.cwd(), "posts", "Projects");
  const filenames = fs.readdirSync(postsDirectory);

  const posts = filenames.map((filename) => {
    const filePath = path.join(postsDirectory, filename);
    const fileContent = fs.readFileSync(filePath, "utf-8");
    const { data } = matter(fileContent);

    return {
      slug: filename.replace(".mdx", ""),
      title: data.title,
      description: data.description,
      date: data.date,
      filter: data.filter || [],
      imageUrl: data.imageUrl || "",
    };
  });
  return posts;
};

const getBlogPosts = async () => {
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
      filter: data.filter || [],
    };
  });
  return posts.sort((a, b) => b.latestDate - a.latestDate);
};

export default async function Home() {
  const posts = await getBlogPosts();
  const latestPosts = posts
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 5);

  const projects = await getProjectPosts();
  const randomProjects = projects.sort(() => 0.5 - Math.random()).slice(0, 2);

  return (
    <main className={styles.mainBody}>
      <section className={styles.mainContainer}>
        <section className={styles.introduction}>
          <div className={styles.introHeader}>
            <h1>Mag's Devlog</h1>
            <p className={styles.introMyself}>
              안녕하세요! 🙌
              <br />
              사용자 경험을 바탕으로 기획을 깊이 이해하며 로직을 설계하는
              <br />
              백엔드 개발자 <strong>김나현</strong>입니다.
            </p>
            <p className={styles.introMyself}>
              이 블로그에는 프로젝트와 개발하면서 배운 것들을 담고 있습니다.
            </p>
          </div>
        </section>
        <section className={styles.recentPosts}>
          <h2>Recent Posts</h2>
          <BlogList posts={latestPosts} />
        </section>
        <section>
          <h2 className={styles.randomPh2}>Random Projects</h2>
          <ProjectList posts={randomProjects} />
        </section>
      </section>
    </main>
  );
}
