import React from "react";
import styles from "../page.module.css";

const TILCard = ({ title, description }) => {
  return (
    <div className={styles.TILCard}>
      <h3 className={styles.cardTitle}>{title}</h3>
      <p className={styles.cardDescription}>{description}</p>
    </div>
  );
};

export default TILCard;
