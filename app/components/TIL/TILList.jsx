import React from "react";
import TILCard from "./TILCard";
import Link from "next/link";

const TILList = ({ posts }) => {
  return (
    <div>
      {posts.map((post) => (
        <Link key={post.slug} href={`/TIL/${post.slug}`} passHref>
          <TILCard
            key={post.id}
            title={post.title}
            description={post.description}
          />
        </Link>
      ))}
    </div>
  );
};

export default TILList;
