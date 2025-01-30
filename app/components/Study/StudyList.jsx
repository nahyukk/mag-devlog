import React from "react";
import StudyCard from "./StudyCard";

const StudyList = ({ posts }) => {
  return (
    <div>
      {posts.map((post) => (
        <StudyCard
          key={post.id}
          title={post.title}
          description={post.description}
          date={post.date}
        />
      ))}
    </div>
  );
};

export default StudyList;
