import Image from "next/image"
import React, {ReactNode, useState} from 'react'
// import Modal from "../components/Modal"

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
            <article className="profile" onClick={() => setIsOpen(true)}>
                <figure className="profile-image-container">
                    <Image className="profile-image" src={`/${image}.png`} alt="" width={100} height={100}/>
                    <figcaption>
                        <h3 className="profile-name">{name}</h3>
                        <h4 className="profile-title">{title}</h4>
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