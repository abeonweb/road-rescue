// import "../styles/Contact.css"
import phone from "../public/phone.svg";
import location from "../public/location.svg";
import Image from "next/image";
import styles from "@/styles/Contact.module.css";
import { contactData, telephone } from "../data";

export default function Contact() {
  return (
    <section id="contact" className={`section ${styles.sectionContact}`}>
      <div className={styles.contactContainer}>
        <div className={styles.contactInfo}>
          <h3 className={styles.contactInfoTitle}>Offices</h3>
          <ul className={styles.contactInfoList}>
            {contactData.map(({ id, address }) => {
              return (
                <li key={id}>
                  <Image
                    src={location}
                    alt=""
                    className={styles.contactIcon}
                    width={24}
                  />{" "}
                  <p>{address}</p>
                </li>
              );
            })}
          </ul>

          <h3 className={styles.contactInfoTitle}>Mobile</h3>
          <ul className={styles.contactInfoList}>
            {telephone.map(({ id, phoneNumber }) => {
              return (
                <li key={id}>
                  <Image
                    src={phone}
                    alt=""
                    className={styles.contactIcon}
                    width={24}
                  />
                  <p>{phoneNumber}</p>
                </li>
              );
            })}
          </ul>
          <h3 className={styles.contactInfoTitle}>Office hours</h3>
          <p className={styles.officeHours}>Mon - Sat: 8:00 AM - 5:00 PM</p>
        </div>
      </div>
    </section>
  );
}
