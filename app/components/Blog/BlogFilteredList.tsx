"use client";

import React, { ChangeEvent, useEffect, useState } from "react";
import BlogList from "./BlogList";
import { PostWithFilter } from "@/types/blog";

interface BlogFilteredListProps {
  filters: string[];
  posts: PostWithFilter[];
}

const BlogFilteredList = ({ filters, posts }: BlogFilteredListProps) => {
  const [filteredPosts, setFilteredPosts] = useState(posts);
  const [selectedFilter, setSelectedFilter] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkDarkMode = () => {
      setIsDarkMode(document.documentElement.classList.contains("dark"));
    };

    checkDarkMode();
    const observer = new MutationObserver(checkDarkMode);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 639);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const getFilterIcon = (filter: string) => {
    const iconName = isDarkMode
      ? `${filter.toLowerCase()}-white-icon.svg`
      : `${filter.toLowerCase()}-icon.svg`;
    return `/filtericons/${iconName}`;
  };

  const applyFilters = (filter: string, term: string) => {
    let updatePosts = posts;

    if (filter !== "All") {
      updatePosts = updatePosts.filter((post) => post.filter.includes(filter));
    }
    if (term) {
      updatePosts = updatePosts.filter(
        (post) =>
          post.title.toLowerCase().includes(term.toLowerCase()) ||
          post.description.toLowerCase().includes(term.toLowerCase())
      );
    }
    setFilteredPosts(updatePosts);
  };

  const handleFilterClick = (filter: string) => {
    setSelectedFilter(filter);
    applyFilters(filter, searchTerm);
  };

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    const term = e.target.value;
    setSearchTerm(term);
    applyFilters(selectedFilter, term);
  };

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        maxWidth: "810px",
        marginBottom: "10px",
        overflowX: "auto",
        WebkitOverflowScrolling: "touch",
      }}
    >
      <nav aria-label="Blog 카테고리 필터">
        <ul style={{
          display: "flex",
          gap: "10px",
          flexWrap: isMobile ? "nowrap" : "wrap",
          overflowX: "auto",
          whiteSpace: isMobile ? "nowrap" : "normal",
        }}
        >
          {filters.map((filter) => (
            <li key={filter} style={{ listStyle: "none", flexShrink: 0 }}>
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
                  minHeight: "38px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "3px",
                  }}
                >
                  {!["All", "Project", "CS", "강의", "CI/CD", "Infra", "DB"].includes(filter) && (
                    <img
                      src={getFilterIcon(filter)}
                      alt={`${filter} icon`}
                      width={16}
                      height={16}
                      style={{
                        verticalAlign: "middle",
                        filter: isDarkMode
                          ? "none"
                          : selectedFilter === filter
                            ? "invert(1)"
                            : "none",
                      }}
                    />
                  )}
                  {filter}
                </div>
              </button>
            </li>
          ))}
        </ul>
      </nav>
      <div style={{ position: "relative", width: "100%", margin: "20px 0" }}>
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearchChange}
          style={{
            width: "100%",
            padding: "12px 10px 12px 40px",
            border: "1px solid var(--primary-color)",
            borderRadius: "20px",
            fontFamily: "var(--font-roboto-mono)",
          }}
        />
        <svg
          width="20"
          height="20"
          viewBox="0 0 27 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{
            position: "absolute",
            left: "13px",
            top: "50%",
            transform: "translateY(-50%)",
            cursor: "pointer",
          }}
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M16.7991 10.8097C16.7991 13.8501 14.3344 16.3148 11.294 16.3148C8.25364 16.3148 5.78894 13.8501 5.78894 10.8097C5.78894 7.76937 8.25364 5.30468 11.294 5.30468C14.3344 5.30468 16.7991 7.76937 16.7991 10.8097ZM16.8171 19.7474C15.2124 20.7411 13.3202 21.3148 11.294 21.3148C5.49222 21.3148 0.78894 16.6115 0.78894 10.8097C0.78894 5.00796 5.49222 0.304688 11.294 0.304688C17.0958 0.304688 21.7991 5.00796 21.7991 10.8097C21.7991 12.7695 21.2624 14.604 20.328 16.1742L26.3337 22.8472C27.2573 23.8735 27.1741 25.4542 26.1478 26.3779C25.1215 27.3015 23.5408 27.2183 22.6172 26.192L16.8171 19.7474Z"
            fill="var(--secondary-color)"
          />
        </svg>
      </div>
      <BlogList posts={filteredPosts} />
    </div>
  );
};

export default BlogFilteredList;