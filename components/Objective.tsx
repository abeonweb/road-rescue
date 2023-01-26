import Image from "next/image";
import React from "react";
import { string } from "yup";

type ObjectiveProps = {
  image: string;
  alt: string;
  title: string;
  body: string;
  id: number;
};
const Objective = ({ image, alt, title, body, id }: ObjectiveProps) => {
  return (
    <article className="objective">
      <div className="objective-container">
        <Image
          src={`/${image}.webp`}
          alt={alt}
          className="about-image"
          width={700}
          height={500}
        />
        <div>
          <h3 className="about-body-title">{title}</h3>
          <p className="about-body cutoff-text">{body}</p>
          <input type="checkbox" className="expand-btn" />
        </div>
      </div>
    </article>
  );
};

export default Objective;
