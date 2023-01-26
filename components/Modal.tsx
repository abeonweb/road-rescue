import { ReactNode } from "react"
import ReactDOM from "react-dom"

type Props = {
    children?: ReactNode,
    name: string,
    id: number,
    image: string,
    title: string,
    description: string
    open: boolean
    onClose: Function
}

export default function Modal({ open, onClose, id, image, name, title, description }: Props) {
    const portal = document.getElementById("portal")
    if(portal === null) return
    if (!open) return null

    return ReactDOM.createPortal(
        <>
            <div className="modal-overlay" onClick={()=>onClose}/>
            <div className="modal" >
                <article key={id} className="management">
                    <button className="modal-close-btn" onClick={()=>onClose}>X</button>
                    <div className="management-inner-container">
                        <figure className="management-image-container">
                            <img className="management-image" src={require("../images/" + image + ".png")} alt="" />
                        </figure>
                        <div className="management-info">
                            <h3 className="management-name">{name}</h3>
                            <h4 className="management-title">{title}</h4>
                            <p className="management-description">{description}</p>
                        </div>
                    </div>
                </article>
            </div>
        </>
        , portal)
}

