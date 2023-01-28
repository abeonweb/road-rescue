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
const Objective = ({ image, alt, title, body, id}: ObjectiveProps) => {
  return (
    <article key={id} className={styles.objective}>
      <div className={styles.objectiveImageContainer}>
        <Image
          src={`/${image}.webp`}
          alt={alt}
          className={styles.aboutImage}
          priority
          fill
          sizes="(min-width: 600px) 100vw, 50vw"
        />
      </div>
        <div className={styles.objectiveText}>
          <h3 className={styles.objectiveTitle}>{title}</h3>
          <p className={`${styles.objectiveBody} ${styles.cutoffText}`}>{body}</p>
          <input type="checkbox" className={styles.expandBtn} placeholder={""}/>
        </div>
    </article>
  );
};

export async function getStaticProps(){

}

export default Objective;
