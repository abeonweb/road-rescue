import "@/styles/Product.module.css";
import { services } from "../../data";
import Image from "next/image";

export default function Services() {
  return (
    <main className="main">
      <h1 className="page--title">What we do</h1>
      <section className="section__services">
        <div>
          {/* <h2 className="section--title">Scope of Services</h2> */}
          <div>
            <p className="scope-body">
              Our vision is to be able to foster Public Private Partnerships
              that will be beneficial to the community at large. With guided
              effort, we hope to collaborate with interested parties to bring
              about positive change for citizens, communities, and eventually
              the economy.
            </p>
            <p className="scope-body">Join us.</p>
          </div>
        </div>
      </section>
      <section className="section-service">
        {services.map((service) => {
          const { id, image, heading, body } = service;
          return (
            <article
              key={id}
              className={`section-service-article ${
                id % 2 === 0 ? "right" : "left"
              }`}
            >
              <Image
                className="service-image"
                src={`/${image}.webp`}
                alt=""
                width={600}
                height={400}
              />
              <div className="service-info">
                <h5 className="service-heading">{heading}</h5>
                <p className="service-body">{body}</p>
              </div>
            </article>
          );
        })}
      </section>
    </main>
  );
}
