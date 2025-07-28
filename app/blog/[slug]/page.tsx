import React from "react";
import { notFound } from "next/navigation";
import styles from "../../page.module.css";
import Post from "../../components/Post";
import getBlogPost from "../../../lib/getBlogPost";
import { getAllBlogSlugs } from "../../../lib/getAllBlogSlugs";

export const generateStaticParams = async (): Promise<{ slug: string }[]> => {
  const slugs = getAllBlogSlugs();
  return slugs.map((slug) => ({ slug }));
};

export async function generateMetadata({ params }) {
  const post = await getBlogPost(params.slug);

  if (!post) {
    return {
      title: "게시글을 찾을 수 없습니다",
    };
  }

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      url: `https://mag-devlog.vercel.app/blog/${params.slug}`,
      images: [
        {
          url: post.ogImage || "https://mag-devlog.vercel.app/default-og.png",
        },
      ],
    },
  };
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function BlogPost({ params }: PageProps) {
  const { slug } = await params;
  const post = await getBlogPost(slug);

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
