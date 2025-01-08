import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.navContainer}>
        <div className={styles.navContainerLeft}>
          <div className={styles.navItem}>
            <Link href="/TIL">TIL</Link>
          </div>
          <div className={styles.navItem}>
            <Link href="/Study">STUDY</Link>
          </div>
          <div className={styles.navItem}>
            <Link href="/Projects">PROJECTS</Link>
          </div>
        </div>
        <div className={styles.navContainerRight}>
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