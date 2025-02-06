import styles from "./page.module.css";
import StudyList from "./components/Study/StudyList";
import path from "path";
import fs from "fs";
import matter from "gray-matter";
import TILList from "./components/TIL/TILList";

export const metadata = {
  title: "Mag's TIL & Study",
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

const getStudyPosts = async () => {
  const postsDirectory = path.join(process.cwd(), "posts", "Study");
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
    };
  });

  return posts;
};

export default async function Home() {
  const posts = await getStudyPosts();
  const latestPosts = posts
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 5);

  const tils = await getTILPosts();
  const randomTils = tils.sort(() => 0.5 - Math.random()).slice(0, 3);

  return (
    <div className={styles.mainBody}>
      <div className={styles.mainContainer}>
        <div className={styles.introduction}>
          <div className={styles.introLeft}>
            <h1>Mag's TIL & Study</h1>
            <p className={styles.introMyself}>
              <br />
              매일 조금씩 전진하는 개발자 Mag 입니다. <br />
              <br />
              배운 것을 기록하고 정리하기 위해 노력합니다.
            </p>
          </div>
          <div className={styles.introRight}>
            {/* <Image
              src="/keyboard-c.svg"
              alt="compKeyboard"
              width={120}
              height={80}
            />
            <Image
              src="/keyboard-p.svg"
              alt="compKeyboard"
              width={120}
              height={80}
              style={{ fill: "var(--primary-color)" }}
            /> */}
          </div>
        </div>
        <div className={styles.recentPosts}>
          <h2>Recent Posts</h2>
          <StudyList posts={latestPosts} />
        </div>
        <div className={styles.randomTIL}>
          <h2>Random TIL</h2>
          <TILList posts={randomTils} />
        </div>
      </div>
    </div>
  );
}
