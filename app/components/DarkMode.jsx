import React, { useEffect, useState } from "react";

export default function DarkMode({ onToggle }) {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const savedMode = localStorage.getItem("theme");
    if (savedMode === "dark") {
      document.documentElement.classList.add("dark");
      setIsDarkMode(true);
      onToggle(true);
    }
  }, []);

  const toggleDarkMode = () => {
    const newMode = isDarkMode ? "light" : "dark";
    document.documentElement.classList.toggle("dark", newMode === "dark");

    localStorage.setItem("theme", newMode);
    setIsDarkMode(!isDarkMode);
    onToggle(!isDarkMode);
  };
  return (
    <button onClick={toggleDarkMode}>
      <svg
        width="48"
        height="48"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {isDarkMode ? (
          <path
            d="M9.00333 5.43284C10.0138 5.04231 11.0994 4.91335 12.1676 5.05694C13.2359 5.20054 14.2552 5.61245 15.1388 6.25757C16.0223 6.9027 16.7439 7.76194 17.2421 8.76211C17.7403 9.76228 18.0003 10.8738 18 12.0019C17.9997 13.13 17.7391 14.2413 17.2404 15.2412C16.7417 16.2411 16.0197 17.0999 15.1358 17.7446C14.252 18.3892 13.2324 18.8005 12.1641 18.9435C11.0958 19.0865 10.0102 18.957 9 18.5659C9 18.5659 13 16.1176 13 12C13 7.88235 9.00333 5.43284 9.00333 5.43284Z"
            fill="#FFFFFF"
            stroke="#FFFFFF"
            strokeWidth="2"
            strokeLinejoin="round"
          />
        ) : (
          <path
            d="M12 3V4M12 20V21M4 12H3M6.31412 6.31412L5.5 5.5M17.6859 6.31412L18.5 5.5M6.31412 17.69L5.5 18.5001M17.6859 17.69L18.5 18.5001M21 12H20M16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12Z"
            stroke="#000000"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        )}
      </svg>
    </button>
  );
}
