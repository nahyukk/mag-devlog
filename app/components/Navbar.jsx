"use client";

import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./Navbar.module.css";
import DarkMode from "./Darkmode";

const Navbar = () => {
  const currentPath = usePathname();
  console.log("Current Path:", currentPath); // 디버깅용

  return (
    <nav className={styles.nav}>
      <div className={styles.navContainer}>
        <div className={styles.navContainerLeft}>
          <div className={styles.navItem}>
            <Link
              href="/TIL"
              className={`${currentPath === "/TIL" ? styles.active : ""}`}
            >
              TIL
            </Link>
          </div>
          <div className={styles.navItem}>
            <Link
              href="/Study"
              className={`${currentPath === "/Study" ? styles.active : ""}`}
            >
              STUDY
            </Link>
          </div>
          <div className={styles.navItem}>
            <Link
              href="/Projects"
              className={`${currentPath === "/Projects" ? styles.active : ""}`}
            >
              PROJECTS
            </Link>
          </div>
        </div>
        <div className={styles.navContainerRight}>
          <DarkMode />
          <div className={styles.navHome}>
            <Link href="/">
              <Image src="/magenta.png" alt="home" width={45} height={45} />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
