"use client";

import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import styles from "./Navbar.module.css";
import DarkMode from "./DarkMode";
import HamburgerButton from "./HamburgerButton";

const Navbar = () => {
  const currentPath = usePathname();
  const [isMobile, setIsMobile] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 639);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  return (
    <nav className={styles.nav}>
      <div className={styles.navContainer}>
        <div className={styles.navContainerLeft}>
          {isMobile ? (
            <HamburgerButton
              isOpen={isMenuOpen}
              toggleMenu={toggleMenu}
              isDarkMode={isDarkMode}
            />
          ) : (
            <ul className={styles.navList}>
              {/* <li className={styles.navItem}>
                <Link
                  href="/TIL"
                  className={`${currentPath === "/TIL" ? styles.active : ""}`}
                >
                  TIL
                </Link>
              </li>
              <li className={styles.navItem}>
                <Link
                  href="/Study"
                  className={`${currentPath === "/Study" ? styles.active : ""}`}
                >
                  STUDY
                </Link>
              </li> */}
              <li className={styles.navItem}>
                <Link
                  href="/blog"
                  className={`${currentPath === "/blog" || currentPath.startsWith("/blog/") ? styles.active : ""
                    }`}
                >
                  BLOG
                </Link>
              </li>
              <li className={styles.navItem}>
                <Link
                  href="/projects"
                  className={`${currentPath === "/projects" || currentPath.startsWith("/projects/") ? styles.active : ""
                    }`}
                >
                  PROJECTS
                </Link>
              </li>
              <li className={styles.navItem}>
                <Link
                  href="/portfolio"
                  className={`${currentPath === "/portfolio" ? styles.active : ""
                    }`}
                >
                  PORTFOLIO
                </Link>
              </li>
              <li className={styles.navItem}>
                <Link
                  href="/resume"
                  className={`${currentPath === "/resume" ? styles.active : ""}`}
                >
                  RESUME
                </Link>
              </li>
            </ul>
          )}
        </div>
        <div className={styles.navContainerRight}>
          <DarkMode onToggle={setIsDarkMode} />
          <div className={styles.navHome}>
            <Link href="/">
              <Image src="/magenta.png" alt="home" width={45} height={45} />
            </Link>
          </div>
        </div>
      </div>
      {isMobile && isMenuOpen && (
        <div className={styles.mobileMenu}>
          {/* <Link
            href="/TIL"
            className={currentPath === "/TIL" ? styles.active : ""}
            onClick={toggleMenu}
          >
            TIL
          </Link>
          <Link
            href="/Study"
            className={currentPath === "/Study" ? styles.active : ""}
            onClick={toggleMenu}
          >
            STUDY
          </Link> */}
          <Link href="/blog" onClick={toggleMenu}>
            BLOG
          </Link>
          <Link href="/projects" onClick={toggleMenu}>
            PROJECTS
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
