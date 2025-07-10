import React from "react";
import BlogCard from "./BlogCard";
import Link from "next/link";
import { Post } from "@/types/blog";

interface BlogListProps {
  posts: Post[];
}

const BlogList = ({ posts }: BlogListProps) => {
  return (
    <section>
      {posts.map((post) => (
        <Link key={post.slug} href={`/blog/${post.slug}`} passHref>
          <BlogCard
            title={post.title}
            description={post.description}
            date={post.date}
          />
        </Link>
      ))}
    </section>
  );
};

export default BlogList;
