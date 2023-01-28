import Link from "next/link";
import Image from "next/image";
import styles from "@/styles/Product.module.css";
import { productFeatures } from "../../data";
import Banner from "@/components/Banner";

export default function Product() {
  return (
    <main className={styles.productMain}>
      <h1 className={"page--title"}>Cold Mix Asphalt</h1>
      <section className={`section ${styles.sectionProduct}`}>
        <h2 className={`section--title`}>
          What makes our asphalt the best choice.
        </h2>
        <section className={styles.sectionProductFeatures}>
          {productFeatures.map((feature, index) => {
            const { id, image, heading, body } = feature;
            return (
              <div
                key={id}
                className={`${index % 2 === 0 ? styles.right : styles.left} ${styles.productFeature}`}
              >
                <Image
                  className={styles.productImage}
                  src={`/${image}.webp`}
                  alt=""
                  width={400}
                  height={300}
                />
                <div className={styles.productInfo}>
                  <h5 className={styles.productHeading}>{heading}</h5>
                  <p className={styles.productBody}>{body}</p>
                </div>
              </div>
            );
          })}
        </section>
        <Banner />
      </section>
    </main>
  );
}
