"use client";

import React, { useState } from "react";
import TILList from "./TILList";

const Category = ({ categories, posts }) => {
  const [filteredPosts, setFilteredPosts] = useState(posts);
  const [selectedCategory, setSelctedCategory] = useState("All");

  const handleCategoryClick = (category) => {
    setSelctedCategory(category);
    if (category === "All") {
      setFilteredPosts(posts);
    } else {
      setFilteredPosts(posts.filter((post) => post.category === category));
    }
  };

  return (
    <div>
      <div style={{ display: "flex", gap: "10px" }}>
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => handleCategoryClick(category)}
            style={{
              padding: "5px 10px",
              borderRadius: "15px",
              border: "1px solid var(--primary-color)",
              backgroundColor:
                selectedCategory === category
                  ? "var(--primary-color)"
                  : "#ffffff",
              color:
                selectedCategory === category
                  ? "#ffffff"
                  : "var(--main-text-color)",
              fontWeight: selectedCategory === category ? "bold" : "400",
              cursor: "pointer",
              fontFamily: "var(--font-roboto-mono)",
              fontSize: "16px",
            }}
          >
            {category}
          </button>
        ))}
      </div>
      <TILList posts={filteredPosts} />
    </div>
  );
};

export default Category;
