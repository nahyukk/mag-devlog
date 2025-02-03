import React from "react";

const HamburgerButton = ({ isOpen, toggleMenu, isDarkMode }) => {
  const iconColor = isDarkMode ? "#FFFFFF" : "#2A2A2A";

  return (
    <button
      onClick={toggleMenu}
      style={{
        background: "none",
        border: "none",
        cursor: "pointer",
        width: "40px",
        height: "40px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {isOpen ? (
        <svg
          key="close-icon"
          viewBox="0 0 24 24"
          width="24"
          height="24"
          fill="none"
        >
          <path
            d="M18 6L6 18M6 6l12 12"
            stroke={iconColor}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ) : (
        <svg
          key="menu-icon"
          viewBox="0 0 24 24"
          width="24"
          height="24"
          fill="none"
        >
          <path
            d="M5 7H19"
            stroke={iconColor}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M5 12H19"
            stroke={iconColor}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M5 17H19"
            stroke={iconColor}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}
    </button>
  );
};

export default HamburgerButton;
