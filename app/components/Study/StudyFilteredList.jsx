"use client";

import React, { useState } from "react";
import StudyList from "./StudyList";

const StudyFilteredList = ({ filters, posts }) => {
  const [filteredPosts, setFilteredPosts] = useState(posts);
  const [selectedFilter, setSelectedFilter] = useState("All");
  const getFilterIcon = (filter) =>
    `/filtericons/${filter.toLowerCase()}-icon.svg`;

  const handleFilterClick = (filter) => {
    setSelectedFilter(filter);
    if (filter === "All") {
      setFilteredPosts(posts);
    } else {
      setFilteredPosts(posts.filter((post) => post.filter.includes(filter)));
    }
  };

  return (
    <div>
      <div style={{ display: "flex", gap: "10px" }}>
        {filters.map((filter) => {
          return (
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
                    : "#ffffff",
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
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "3px",
                }}
              >
                {!["All", "Project"].includes(filter) && (
                  <img
                    src={getFilterIcon(filter)}
                    alt={`${filter} icon`}
                    width={16}
                    height={16}
                    style={{
                      verticalAlign: "middle",
                      filter: selectedFilter === filter ? "invert(1)" : "none",
                    }}
                  />
                )}
                {filter}
              </div>
            </button>
          );
        })}
      </div>
      <StudyList posts={filteredPosts} />
    </div>
  );
};

export default StudyFilteredList;
