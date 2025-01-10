import React from "react";
import styles from "../page.module.css";
import Header from "../components/Header";
import StudyList from "../components/StudyList";

export const metadata = {
  title: "Mag's TIL",
};

const dummyPosts = [
  {
    id: 1,
    title: "[JAVA 입문] 형변환",
    description:
      "자동 형변환 vs 명시적 형변환",
		date: "2025.01.07"
	},
  {
    id: 2,
    title: "블로그 프로젝트 시작",
    description: "개인 블로그를 만드는 프로젝트 입니다.",
		date: "2025.01.06"
	},
];

const Study = () => {
	return (
		<div className={styles.mainBody}>
      <div className={styles.mainContainer}>
        <Header
          title="STUDY"
          description="다시 보고 싶은 내용들을 정리합니다."
        />
        <div>검색</div>
				<div>카테고리</div>
				<StudyList posts={dummyPosts}/>
      </div>
    </div>
	)
}

export default Study