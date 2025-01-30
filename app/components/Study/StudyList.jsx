import React from "react";
import StudyCard from "./StudyCard";
import Link from "next/link";

const StudyList = ({ posts }) => {
  return (
    <div>
      {posts.map((post) => (
        <Link key={post.slug} href={`/Study/${post.slug}`} passHref>
          <StudyCard
            key={post.id}
            title={post.title}
            description={post.description}
            date={post.date}
          />
        </Link>
      ))}
    </div>
  );
};

export default StudyList;
