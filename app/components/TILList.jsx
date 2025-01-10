import React from "react";
import TILCard from "./TILCard";

const TILList = ({ posts }) => {
  return (
    <div>
      {posts.map((post) => (
        <TILCard
          key={post.id}
          title={post.title}
          description={post.description}
        />
      ))}
    </div>
  );
};

export default TILList;
