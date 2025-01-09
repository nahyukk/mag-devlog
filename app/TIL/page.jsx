import React from "react";
import styles from "../page.module.css";
import Header from "../components/Header";

export const metadata = {
  title: "Mag's TIL",
};

const TIL = () => {
  return (
    <div className={styles.mainBody}>
      <div className={styles.mainContainer}>
        <Header
          title="TIL"
          description="오늘 배운 것을 당일에 바로 정리하기 위해 노력하고 있습니다."
        />
        <div>테스트용</div>
      </div>
    </div>
  );
};

export default TIL;