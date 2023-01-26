import Image from "next/image";
import React from "react";

type VisionProps = {
  image: string;
  alt: string;
  title: string;
  text: string;
};

const VisionCard = ({ title, image, alt, text }: VisionProps) => {
  return (
    <div className="vision-card">
      <Image
        src={`/${image}.webp`}
        alt={alt}
        className="vision-image"
        width={400}
        height={300}
      />
      {/* <div className="vision-body"> */}
      <h3 className="vision-title">{title}</h3>
      <p className="vision-text-body">{text}</p>
      {/* </div> */}
    </div>
  );
};

export default VisionCard;
