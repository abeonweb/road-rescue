import { about, teamData, vision } from "../../data"
import "@/styles/About.module.css"
import Profile from "../../components/Profile"
import VisionCard from "../../components/VisionCard"
import Objective from "../../components/Objective"

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
        <main className="main">
            <h1 className="page--title about-title">Who we are</h1>
            <section className="section section__vision">
                <h2 className="section--title"> Our Vision</h2>
                <div className="vision-list">
                    {visionList}
                </div>
            </section>
            <section className="section section__about">
                <h2 className="section--title">Our Objective</h2>
                {aboutSection}
            </section>
            <section className="section section__management">
                <h2 className="section--title management-section-title">Our Management Team</h2>
                <div className="profile-container">
                    {managementTeam}
                </div>
            </section>
        </main >
    )
}