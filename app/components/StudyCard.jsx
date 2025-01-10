import React from "react";
import styles from "../page.module.css";

const StudyCard = ({ title, description, date }) => {
  return (
    <div className={styles.StudyCard}>
      <h3 className={styles.cardTitle}>{title}</h3>
      <div className={styles.cardDetail}>
        <p className={styles.cardDescription}>{description}</p>
        <p className={styles.cardDate}>{date}</p>
      </div>
    </div>
  );
};

export default StudyCard;
