import './Header.css';
import React from 'react'
import { Link } from 'react-router-dom';

let menu = [
    { to: "/", title: "Home" },
    { to: "/mobileapps", title: "Мобильные приложения" },
    { to: "/dashboard", title: "Dashboard" },
]

const Header = () => {
    return (
        <header className="shadow mb-3">
            <div className="container py-3 ">
                {menu.map((item, value) => <Link to={item.to} key={item.to} className="me-3 btn">{item.title}</Link>)}
                {/* <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/dashboard">Dashboard</Link> */}
            </div>
        </header>
    )
}

export default Header
