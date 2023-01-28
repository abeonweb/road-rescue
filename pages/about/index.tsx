import { about, teamData, vision } from "../../data"
import styles from "@/styles/About.module.css"
import Profile from "../../components/Profile"
import VisionCard from "../../components/VisionCard"
import Objective from "../../components/Objective"
import Banner from "@/components/Banner"

export default function About() {

    const visionList = vision.map((item, index) => {
        return (
                <VisionCard key={`vision${index}`} {...item} />
        )
    })

    const aboutSection = about.map((item, index) => {
        return (
            <Objective key={`objective${index}`} {...item} />
        )
    })

    const managementTeam = teamData.map(executive => {
        return (
            <Profile key={executive.id} {...executive} />
        )
    })

    return (
        <main className={"main"}>
            <h1 className={`page--title ${styles.aboutTitle}`}>Who we are</h1>
            <section className={` ${styles.sectionAbout}`}>
                <h2 className={`section--title`}>Our Objective</h2>
                {aboutSection}
            </section>
            <section className={`section ${styles.sectionVision}`}>
                <h2 className={`section--title`}> Our Vision</h2>
                <div className={styles.visionList}>
                    {visionList}
                </div>
            </section>
            <section className={`section ${styles.sectionManagement}`}>
                <h2 className={`section--title ${styles.managementSectionTitle}`}>Our Management Team</h2>
                <div className={styles.profileContainer}>
                    {managementTeam}
                </div>
            </section>
            <Banner />
        </main >
    )
}