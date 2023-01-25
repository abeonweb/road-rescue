// import "../styles/Contact.css"
import phone from "../public/phone.svg"
import location from "../public/location.svg"
import Image from "next/image";
// import

export default function Contact() {
    return (
        <section id="contact" className="section section__contact">
            <div className="contact-container">
                <div className="contact--info">
                        <h3 className="contact--info--title">Offices</h3>
                        <ul className="contact--info--list">
                            <li><Image src={location} alt="" className="contact--icon" width={20} height={20}/> <p>Gloryland Plaza Apata Ibadan, Oyo</p></li>
                            <li><Image src={location} alt="" className="contact--icon" width={20} height={20}/> <p>45/47 Karimu Street Surulere, Lagos</p></li>
                            <li><Image src={location} alt="" className="contact--icon" width={20} height={20}/> <p>773 AMAC Housing Estate Airport Rd, Abuja</p></li>
                        </ul>

                        <h3 className="contact--info--title">Mobile</h3>
                        <ul className="contact--info--list">
                            <li><Image src={phone} alt="" className="contact--icon" width={20} height={20}/> +234 803 323 7141</li>
                            <li><Image src={phone} alt="" className="contact--icon" width={20} height={20}/> +234 803 301 7071</li>
                            <li><Image src={phone} alt="" className="contact--icon" width={20} height={20}/> +234 913 660 6955</li>
                        </ul>
                    <h3 className="contact--info--title">Office hours</h3>
                    <p className="office-hours">Mon - Sat: 8:00 AM - 5:00 PM</p>
                </div>
            </div>
        </section>
    )
}