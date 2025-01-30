import React from "react";
import styles from "../page.module.css";
import Header from "../components/Header";
import TILFilteredList from "../components/TIL/TILFilteredList";

export const metadata = {
  title: "Mag's TIL",
};

const dummyPosts = [
  {
    id: 250107,
    title: "TIL 250107",
    description:
      "특강 - 칸반보드|알고리즘 - 새싹(입력 및 계산)|JAVA - 스코프와 형변환",
    filter: "❄️2025.01",
  },
  {
    id: 250106,
    title: "TIL 250106",
    description: "특강 - 애자일|스크럼, 알고리즘 - 새싹(출력)|JAVA - 반복문",
    filter: "❄️2025.01",
  },
  {
    id: 250105,
    title: "TIL 241231",
    description: "React - Component Lifecycle",
    filter: "🎄2024.12",
  },
];

const TIL = () => {
  const filters = ["All", ...new Set(dummyPosts.flatMap((post) => post.filter))];

  return (
    <div className={styles.mainBody}>
      <div className={styles.mainContainer}>
        <Header
          title="TIL"
          description="오늘 배운 것을 당일에 바로 정리하기 위해 노력하고 있습니다."
        />
        <TILFilteredList filters={filters} posts={dummyPosts} />
      </div>
    </div>
  );
};

export default TIL;
