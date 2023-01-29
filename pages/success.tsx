import React from 'react'
import Link from "next/link"

const Success = () => {
    return (
        <main className="main">
            <section className="section__success">
                <h1 className="page--title">Thank you.</h1>
                <div className="success-container">
                    <p className="subtitle on-hover">Your Message has been sent. A representative will contact you shortly and answer any questions you may have.</p>
                    <Link href="/">Back to Homepage</Link>
                </div>
            </section>
        </main>
    )
}

export default Success