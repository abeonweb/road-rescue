import {ReactNode} from "react"
import Navbar from "../components/Navbar"
import Footer from '../components/Footer';

type Props = {
    children?: ReactNode
}

export default function SharedLayout({children}: Props){
    
    return (
        <>
            <Navbar />
            <main>{children}</main>
            <Footer />
        </>
    )
}
