import styles from "./page.module.css";
import path from "path";
import fs from "fs";
import matter from "gray-matter";
import TILList from "./components/TIL/TILList";
import BlogList from "./components/Blog/BlogList";

export const metadata = {
  title: "Home | Mag's Devlog",
};

const getTILPosts = async () => {
  const postsDirectory = path.join(process.cwd(), "posts", "TIL");
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

  const tils = await getTILPosts();
  const randomTils = tils.sort(() => 0.5 - Math.random()).slice(0, 3);

  return (
    <main className={styles.mainBody}>
      <section className={styles.mainContainer}>
        <section className={styles.introduction}>
          <div className={styles.introHeader}>
            <h1>Mag's Devlog</h1>
            <p className={styles.introMyself}>
              안녕하세요! 🙌
              <br />
              기획과 사용자 경험을 바탕으로 로직을 설계하는 
              <br />
              백엔드 개발자 Mag입니다.
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
        <section className={styles.randomTIL}>
          <h2>Random TIL</h2>
          <TILList posts={randomTils} />
        </section>
      </section>
    </main>
  );
}
