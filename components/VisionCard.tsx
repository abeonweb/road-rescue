import Image from "next/image";
import React from "react";
import styles from "@/styles/About.module.css";

type VisionProps = {
  image: string;
  alt: string;
  title: string;
  text: string;
};

const VisionCard = ({ title, image, alt, text }: VisionProps) => {
  return (
    <article className={styles.visionCard}>
      <div className={styles.visionCardImageContainer}>
        <Image
          src={`/${image}.webp`}
          alt={alt}
          className={styles.visionImage}
          fill
          sizes="(max-width: 780px) 90vw, (max-width: 1100px) 40vw, 30vw"
        />
      </div>
      <div className={styles.visionBody}>
      <h3 className={styles.visionTitle}>{title}</h3>
      <p className={styles.visionText}>{text}</p>
      </div>
    </article>
  );
};

export default VisionCard;
