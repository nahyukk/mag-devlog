"use client";

import React, { useState } from "react";
import ProjectList from "./ProjectList";
import { ProjectPostWithFilter } from "@/types/project";

interface ProjectFilteredListProps {
  filters: string[];
  posts: ProjectPostWithFilter[];
}

const ProjectFilteredList = ({ filters, posts }: ProjectFilteredListProps) => {
  const [filteredPosts, setFilteredPosts] = useState(posts);
  const [selectedFilter, setSelectedFilter] = useState("All");

  const handleFilterClick = (filter: string) => {
    setSelectedFilter(filter);
    if (filter === "All") {
      setFilteredPosts(posts);
    } else {
      setFilteredPosts(posts.filter((post) => post.filter?.includes(filter)));
    }
  };

  return (
    <div>
      <nav aria-label="프로젝트 필터">
        <ul style={{ display: "flex", gap: "10px", marginBottom: "50px", listStyle: "none", }}>
          {filters.map((filter) => (
            <li key={filter}>
              <button
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
                  minHeight: "38px",
                }}
              >
                {filter}
              </button>
            </li>
          ))}
        </ul>
      </nav>
      <ProjectList posts={filteredPosts} />
    </div>
  );
};

export default ProjectFilteredList;
