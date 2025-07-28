import styles from "./page.module.css";
import path from "path";
import fs from "fs";
import matter from "gray-matter";
import BlogList from "./components/Blog/BlogList";
import RandomProject from "./components/RandomProject";

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
    .slice(0, 3);

  const projects = await getProjectPosts();

  return (
    <main className={styles.mainBody}>
      <section className={styles.mainContainer}>
        <section className={styles.introduction}>
          <div className={styles.introHeader}>
            <h1>Mag's Devlog</h1>
            <div className={styles.introMyself}>
              <p className={styles.introMyself}>Hi there! 🙌 </p>   
              I’m <strong>Nahyun Kim</strong> — a backend developer
              <br />
              with a product mindset and a focus on user experience.
            </div>
            <p className={styles.introMyself}>
            This blog is where I share my projects, ideas, and things I've learned along the way.
            </p>
          </div>
        </section>
        <section className={styles.recentPosts}>
          <h2>Recent Posts</h2>
          <BlogList posts={latestPosts} />
        </section>
        <section>
          <h2 className={styles.randomPh2}>Random Projects</h2>
          <RandomProject projects={projects} />
        </section>
      </section>
    </main>
  );
}