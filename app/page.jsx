import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.mainBody}>
      <div className={styles.mainContainer}>
        <div className={styles.introduction}>
          <div className={styles.introLeft}>
            <h1>Mag's TIL & Study</h1>
            <p className={styles.introMyself}>
              Hello, there! This is Mag, <br />
              a Fullstack Engineer <br />
              who loves both coding and making music on keyboards.
            </p>
          </div>
          <div className={styles.introRight}>
            <Image
              src="/keyboard-c.svg"
              alt="compKeyboard"
              width={120}
              height={80}
            />
            <Image
              src="/keyboard-p.svg"
              alt="compKeyboard"
              width={120}
              height={80}
              style={{ fill: "var(--primary-color)" }}
            />
          </div>
        </div>
        <div className={styles.recentPosts}>
          <h2>Recent Posts</h2>
        </div>
        <div className={styles.randomTIL}>
          <h2>Random TIL</h2>
        </div>
      </div>
    </div>
  );
}
