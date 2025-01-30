import React from "react";
import styles from "../page.module.css";
import Header from "../components/Header";
import StudyFilteredList from "../components/Study/StudyFilteredList";

export const metadata = {
  title: "Mag's TIL",
};

const dummyPosts = [
  {
    id: 1,
    title: "[JAVA 입문] 형변환",
    description:
      "자동 형변환 vs 명시적 형변환",
		date: "2025.01.07",
		filter: ["Java"],
	},
  {
    id: 2,
    title: "블로그 프로젝트 시작",
    description: "개인 블로그를 만드는 프로젝트 입니다.",
		date: "2025.01.06",
		filter: ["Project", "Nextjs"],
	},
];

const Study = () => {
	const filters = [
		"All",
		...[...new Set(dummyPosts.flatMap((post) => post.filter))].sort((a, b) =>
			a.localeCompare(b)
		),
	];
	
	return (
		<div className={styles.mainBody}>
      <div className={styles.mainContainer}>
        <Header
          title="STUDY"
          description="다시 보고 싶은 내용들을 정리합니다."
        />
        <div>검색</div>
				<StudyFilteredList filters={filters} posts={dummyPosts} />
      </div>
    </div>
	)
}

export default Study