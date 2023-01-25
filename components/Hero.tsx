import Link from "next/link";
import "animate.css";
import checkMark from "../public/check-mark.png";
import Image from "next/image";
import styles from "@/styles/Home.module.css"
function Hero() {
  return (
    <>
      <section className={styles.heroContainer}>
        <div className={styles.overlay}></div>

        <div className={styles.hero}>
          <div>
            <div className={styles.logoTitleContainer}>
              <h1 className={styles.heroTitle}>
                <span className={styles.heroTitlePrimary}>Road Rescue</span>
                <span className={styles.heroTitleSecondary}>
                  & Maintenance company limited
                </span>
              </h1>
            </div>
          </div>
          <div className={styles.catchphraseContainer}>
            <h2 className={styles.hero__phrase}>
              <span className={styles.heroHighlight}>Fix</span> road defects{" "}
              <span className={styles.heroHighlight}>fast</span>
            </h2>
            <ul className={styles.heroList}>
              <li className={styles.heroListItem}>
                <Image src={checkMark} className={styles.heroListIcon} alt="" width={22} height={22}/>
                #1 solution effective road repair
              </li>
              <li className={styles.heroListItem}>
                <Image src={checkMark} className={styles.heroListIcon} alt="" width={22} height={22}/>
                Save money and time
              </li>
              <li className={styles.heroListItem}>
                <Image src={checkMark} className={styles.heroListIcon} alt="" width={22} height={22}/>
                Use even in rainy conditions
              </li>
            </ul>
            <div className={styles.ctaContainer}>
              <Link
                href="/#form"
                className={`${styles.heroCtaBtn} ${styles.heroCtaBtnForm} animate__animated animate__slideInLeft shadow`}
              >
                Get a quote
              </Link>
              <Link
                href="/#contact"
                className={`${styles.heroCtaBtn} ${styles.heroCtaBtnContact} animate__animated animate__slideInRight shadow`}
              >
                Call us
              </Link>
            </div>
          </div>
        </div>
      </section>
      <div className="triangle animate__animated animate__shakeY animate__delay-2s animate__repeat-1 animate__slow"></div>
    </>
  );
}

export default Hero;
