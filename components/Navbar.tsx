import logo from "../public/rrlogo.webp";
import styles from "@/styles/Navbar.module.css";
import { useEffect } from "react";
import useToggle from "@/hooks/useToggle";
import { links } from "../data";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const { openMenu, handleClick } = useToggle();

  useEffect(() => {
    window.addEventListener("scroll", scrolled);

    return function () {
      window.removeEventListener("scroll", scrolled);
    };
  });

  function scrolled() {
    const navbar = document.querySelector(".navbar");
    const sharedLayout = document.querySelector("#shared-layout");
    if (navbar !== null && sharedLayout !== null){
        if (window.scrollY > navbar.clientHeight) {
            console.log("adding to navbar class");
            sharedLayout.classList.add(`sticky`);
        } else {
            sharedLayout.classList.remove(`sticky`);
            console.log("nothing");
        }
    } 
  }

  const linksList = links.map((data, index) => {
    if (index === 0) {
      return (
        <li key={index + 1}>
          <Link
            href={data.link}
            className={styles.navLink}
            onClick={handleClick}
          >
            {data.name}
          </Link>
        </li>
      );
    }
    return (
      <li key={index + 1}>
        <Link href={data.link} className={styles.navLink} onClick={handleClick}>
          {data.name}
        </Link>
      </li>
    );
  });
  return (
    <header
      className={`${styles.navbar} ${
        openMenu ? styles.navOpen + " active" : ""
      }`}
    >
      <div className={styles.heroContentWrapper}>
        <div className={styles.navLogo}>
          <Link href="/" className={"navLink"}>
            <Image
              src={logo}
              className={styles.logoNav}
              alt=""
              width={50}
              height={40}
            />
          </Link>
        </div>
        <button
          onClick={handleClick}
          className={styles.menuIcon}
          aria-label="toggle navigation menu"
          type="submit"
        >
          <span className={styles.hamburger}></span>
        </button>
        <nav className={styles.nav}>
          <ul className={styles.navList}>{linksList}</ul>
        </nav>
      </div>
    </header>
  );
}
