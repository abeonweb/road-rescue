// import "../styles/Navbar.css"
import facebook from "../public/facebook.svg"
import twitter from "../public/twitter.svg"
import instagram from "../public/instagram.svg"
import {links} from "../data"
import Link from "next/link"
import Image from "next/image";
import styles from "@/styles/Navbar.module.css"

export default function Footer(){
    const linksList = links.map((data, index) => {

        if(index === 0){
            return (
                <li key ={index + 1}>
                    <Link href={data.link}
                        className= {styles.footerNavLink}
                    >{data.name}
                    </Link>
                </li>
            )
        }
        return (
            <li key ={index+1}>
                <Link href={data.link} 
                    className= {styles.footerNavLink}
                >{data.name}
                </Link>
            </li>
        )
    })
    return (
        <footer className={styles.footer}>
            <div className={styles.footerNavContainer}>
                <div className={styles.footerNavs}>
                    <nav className={styles.footerNav}>
                        <ul className={styles.footerNavList}>
                            {linksList}
                        </ul>           
                    </nav> 
                    <nav className={styles.footerNav}>
                        <ul className={styles.footerNavList}>
                            <li>
                                <Link href="terms"  className={styles.footerNavLink}>Terms & Conditions</Link>
                            </li>
                            <li>
                                <Link href="privacy"  className={styles.footerNavLink}>Privacy Policy</Link>
                            </li>
                        </ul>           
                    </nav> 
                </div>
                <div className={styles.footerSocialMediaContainer}>
                    <h4>We are on Social Media</h4>
                    <ul className={styles.footerNavListIcons}>
                        <li>
                            <a href="https://www.twitter.com" target="_blank" className={styles.footerSocialLink} rel=" noopener noreferrer">
                                <Image src={twitter} alt="twitter" className={styles.footerSocialIcon} width={30} height={30}/>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.facebook.com" target="_blank" className={styles.footerSocialLink} rel=" noopener noreferrer">
                                <Image src={facebook} alt="facebook" className={styles.footerSocialIcon} width={30} height={30}/>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com" target="_blank" className={styles.footerSocialLink} rel=" noopener noreferrer">
                                <Image src={instagram} alt="instagram" className={styles.footerSocialIcon} width={30} height={30}/>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className={styles.copyright}>&copy; Road Rescue And Maintenance Company Limited 2021</div>
        </footer>
    )
}