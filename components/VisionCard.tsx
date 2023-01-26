import Image from "next/image";
import React from "react";
import styles from "@/styles/About.module.css"

type VisionProps = {
  image: string;
  alt: string;
  title: string;
  text: string;
};

const VisionCard = ({ title, image, alt, text }: VisionProps) => {
  return (
    <div className={styles.visionCard}>
      <Image
        src={`/${image}.webp`}
        alt={alt}
        className={styles.visionImage}
        width={150}
        height={150}
        priority
      />
      {/* <div className={styles.visionBody}> */}
      <h3 className={styles.visionTitle}>{title}</h3>
      <p className={styles.visionTextBody}>{text}</p>
      {/* </div> */}
    </div>
  );
};

export default VisionCard;
