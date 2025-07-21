import React from "react";
import { notFound } from "next/navigation";
import styles from "../../page.module.css";
import getProjectPost from "../../../lib/getProjectPost";
import { getAllProjectsSlugs } from "../../../lib/getAllProjectsSlugs";
import Post from "@/components/Post";

export const metadata = {
  title: "Projects",
};

interface PageProps {
  params: Promise<{ slug: string }>;
}

export const generateStaticParams = async (): Promise<{ slug: string }[]> => {
  const slugs = getAllProjectsSlugs();
  return slugs.map((slug) => ({ slug }));
};

export default async function BlogPost({ params }: PageProps) {
  const { slug } = await params;
  const post = await getProjectPost(slug);

  if (!post) {
    notFound();
  }

  return (
    <main className={styles.mainBody}>
      <article className={styles.mainContainer}>
        <header className={styles.postHeader}>
          <h2 className={styles.title} style={{ flexGrow: 1 }}>
            {post.title}
          </h2>
          <div
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <h3 className={styles.description}>{post.description}</h3>
            <p className={styles.date}>{post.date}</p>
          </div>
        </header>
        <section>
          <Post content={post.content} />
        </section>
      </article>
    </main>
  );
}