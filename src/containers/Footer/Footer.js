import "./Footer.css"
import React from 'react'
import { Link } from "react-router-dom"

let menu = [
    { to: "/mobileapps", title: "Мобильные приложения" },
    { to: "/help", title: "Помощь" },
    { to: "/features", title: "Платные услуги" },
]

const Footer = () => {
    return (
        <footer className="bg-dark text-white">
            <div className="container py-5">
                <h1>Footer</h1>
                <div class="row">
                    <div className="col-md-4"><div>
                        {menu.map(value =>
                            <Link to={value.to} key={value.to}>{value.title}</Link>)}
                    </div></div>
                    <div className="col-md-4">
                        <div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
