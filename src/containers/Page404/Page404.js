import "./Page404.css"
import React from 'react'
import { Link } from "react-router-dom"

const Page404 = () => {
    return (
        <div className="page404 p-3">
            <Link to="/" className="btn btn-dark">Home</Link>
        </div>
    )
}

export default Page404
