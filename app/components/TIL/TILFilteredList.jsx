"use client";

import React, { useState } from "react";
import TILList from "./TILList";

const TILFilteredList = ({ filters, posts }) => {
  const [filteredPosts, setFilteredPosts] = useState(posts);
  const [selectedFilter, setSelectedFilter] = useState("All");

  const handleFilterClick = (filter) => {
    setSelectedFilter(filter);
    if (filter === "All") {
      setFilteredPosts(posts);
    } else {
      setFilteredPosts(posts.filter((post) => post.filter === filter));
    }
  };

  return (
    <div>
      <div style={{ display: "flex", gap: "10px",  marginBottom: "10px", }}>
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => handleFilterClick(filter)}
            style={{
              padding: "5px 10px",
              borderRadius: "15px",
              border: "1px solid var(--primary-color)",
              backgroundColor:
                selectedFilter === filter
                  ? "var(--primary-color)"
                  : "transparent",
              color:
                selectedFilter === filter
                  ? "#ffffff"
                  : "var(--main-text-color)",
              fontWeight: selectedFilter === filter ? "bold" : "400",
              cursor: "pointer",
              fontFamily: "var(--font-roboto-mono)",
              fontSize: "16px",
            }}
          >
            {filter}
          </button>
        ))}
      </div>
      <TILList posts={filteredPosts} />
    </div>
  );
};

export default TILFilteredList;
