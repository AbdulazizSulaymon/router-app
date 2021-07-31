// import './Header.css';
import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import ThemeContext from "./../../theme-context";
import { Button } from 'reactstrap';
import HeaderWrapper from './HeaderWrapper';

let menu = [
    { to: "/", title: "Home" },
    { to: "/mobileapps", title: "Мобильные приложения" },
    { to: "/dashboard", title: "Dashboard" },
]


const Header = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);
    console.log(theme, toggleTheme);

    return (
        <HeaderWrapper className={`shadow mb-3 ${theme}`}>
            <div className="container py-3 d-flex justify-content-between align-items-center">
                <div>
                    {menu.map((item, value) => <Link to={item.to} key={item.to} className="me-3 btn">{item.title}</Link>)}
                </div>
                <Button onClick={toggleTheme} color={theme}>{theme == "dark" ? "Day" : "Night"}</Button>
                {/* <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/dashboard">Dashboard</Link> */}
            </div>
        </HeaderWrapper>
    )
}

export default Header
