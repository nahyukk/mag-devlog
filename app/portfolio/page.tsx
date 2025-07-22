import React from 'react'
import styles from "../page.module.css";
import Header from '@/components/Header';

export const metadata = {
  title: "Portfolio | Mag's Devlog",
};

export default function Portfolio() {
  return (
    <main className={styles.mainBody}>
      <div className={styles.mainContainer}>
        <header>
          <Header title="Portfoilo" description="" />
        </header>
      </div>
    </main>
  )
}
