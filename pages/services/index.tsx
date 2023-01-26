import styles from "@/styles/Product.module.css";
import { services } from "../../data";
import Image from "next/image";

export default function Services() {
  return (
    <main className="main">
      <h1 className="page--title">What we do</h1>
      <section className={styles.sectionServices}>
        <div>
          {/* <h2 className="section--title">Scope of Services</h2> */}
          <div>
            <p className={styles.scopeBody}>
              Our vision is to be able to foster Public Private Partnerships
              that will be beneficial to the community at large. With guided
              effort, we hope to collaborate with interested parties to bring
              about positive change for citizens, communities, and eventually
              the economy.
            </p>
            <p className={styles.scopeBody}>Join us and let's make a safer, better Nigeria.</p>
          </div>
        </div>
      </section>
      <section className={styles.sectionService}>
        {services.map((service) => {
          const { id, image, heading, body } = service;
          return (
            <article
              key={id}
              className={`${styles.sectionServiceArticle} ${
                id % 2 === 0 ? styles.right : styles.left
              }`}
            >
              <Image
                className={styles.serviceImage}
                src={`/${image}.webp`}
                alt=""
                width={600}
                height={400}
                priority
              />
              <div className={styles.serviceInfo}>
                <h5 className={styles.serviceHeading}>{heading}</h5>
                <p className={styles.serviceBody}>{body}</p>
              </div>
            </article>
          );
        })}
      </section>
    </main>
  );
}
