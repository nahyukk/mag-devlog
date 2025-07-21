import React from "react";
import styles from "../../page.module.css";

interface BlogCardProps {
  title: string;
  description: string;
  date: string;
}

const BlogCard = ({ title, description, date }: BlogCardProps) => {
  return (
    <article className={styles.StudyCard}>
      <header>
        <h3 className={styles.cardTitle}>{title}</h3>
      </header>
      <section className={styles.cardDetail}>
        <p className={styles.cardDescription}>{description}</p>
        <p className={styles.cardDate}>{date}</p>
      </section>
    </article>
  );
};

export default BlogCard;
