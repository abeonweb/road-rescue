import Link from "next/link";
import React from "react";

const Banner = () => {
  return (
    <div className={"banner-image"}>
      <div className={"banner-overlay"} />
      <p className={`banner-image-text banner-image-text-primary`}>
        Road Rescue
      </p>
      <p className={`banner-image-text banner-image-text-secondary`}>
        We pave the way
      </p>
      <Link href="/contacts" className={"banner-btn"}>
        Get an Estimate
      </Link>
    </div>
  );
};

export default Banner;
