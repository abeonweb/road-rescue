import Image from "next/image";
import React from "react";
import styles from "@/styles/About.module.css";

type ObjectiveProps = {
  image: string;
  alt: string;
  title: string;
  body: string;
  id: number;
};
const Objective = ({ image, alt, title, body, id }: ObjectiveProps) => {
  return (
    <article className={styles.objective}>
      <div className={styles.objectiveContainer}>
        <Image
          src={`/${image}.webp`}
          alt={alt}
          className={styles.aboutImage}
          width={300}
          height={300}
        />
        <div>
          <h3 className={styles.aboutBodyTitle}>{title}</h3>
          <p className={`${styles.aboutBody} ${styles.cutoffText}`}>{body}</p>
          <input type="checkbox" className={styles.expandBtn} placeholder={""}/>
        </div>
      </div>
    </article>
  );
};

export default Objective;
