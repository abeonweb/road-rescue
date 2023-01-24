import logo from "../public/rrlogo.webp";
import styles from "@/styles/Navbar.module.css";
import { useEffect } from "react";
import useToggle from "@/hooks/useToggle";
import { links } from "../data";
import Link from "next/link";
import Image from "next/image";

function Navbar() {
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
    if(navbar === null || sharedLayout === null) return
    if (window.pageYOffset > navbar.clientHeight)
      sharedLayout.classList.add("sticky");
    else sharedLayout.classList.remove("sticky");
  }

  const linksList = links.map((data, index) => {
    if (index === 0) {
      return (
        <li key={index + 1}>
          <Link
            href={data.link}
            className={"navLink"}
            onClick={handleClick}
          >
            {data.name}
          </Link>
        </li>
      );
    }
    return (
      <li key={index + 1}>
        <Link
          href={data.link}
          className={"navLink"}
          onClick={handleClick}
        >
          {data.name}
        </Link>
      </li>
    );
  });
  return (
    <header className={`${styles.navbar} ${openMenu ? styles.navOpen : ""}`}>
      <div className={styles.heroContentWrapper}>
        <div className={styles.navLogo}>
          <Link
            href="/"
            className={"navLink"}
          >
            <Image
              src={logo}
              className={styles.logoNav}
              alt=""
              width={50}
              height={50}
            />
          </Link>
        </div>
        <button
          onClick={handleClick}
          className={styles.menuIcon}
          aria-label="toggle navigation menu"
          type="submit"
        >
          <span className="hamburger"></span>
        </button>
        <nav className="nav">
          <ul className="nav-list">{linksList}</ul>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
