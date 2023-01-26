import Image from "next/image"
import React, {ReactNode, useState} from 'react'
// import Modal from "../components/Modal"
import styles from "@/styles/About.module.css"

type Props = {
    children?: ReactNode,
    name: string,
    id: number,
    title: string,
    image: string,
    description: string
}

const Profile = ({id, name, title, image, description}: Props) => {
    const [isOpen, setIsOpen] = useState(false)
    
    return (
        <div key={`profile-${id}`}>
            <article className={styles.profile} onClick={() => setIsOpen(true)}>
                <figure className={styles.profileImageContainer}>
                    <Image className={styles.profileImage} src={`/${image}.png`} alt="" width={120} height={120}/>
                    <figcaption>
                        <h3 className={styles.profileName}>{name}</h3>
                        <h4 className={styles.profileTitle}>{title}</h4>
                    </figcaption>
                </figure>
            </article>
            {/* <Modal
                open={isOpen}
                onClose={() => setIsOpen(false)}
                id={id} 
                name={name} 
                title={title} 
                image={image}
                description={description}
            /> */}
        </div>
    )
}

export default Profile