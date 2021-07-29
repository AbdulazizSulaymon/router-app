import "./Container.css";
import Header from "../Header"
import Footer from "../Footer"
import React from 'react'

const Container = (props) => {
    return (
        <>
            <Header />
            <div className="content">
                {props.children}
            </div>
            <Footer />
        </>
    )
}

export default Container
