import "./Home.css"
import React from 'react'
import Container from "../../containers/Container";
import { Link } from "react-router-dom";

const categories = [
    {
        icon: "https://categories.olxcdn.com/assets/categories/olxuz/detskiy-mir-36-2x.png",
        backColor: "rgb(255, 206, 50)",
        title: "Детский мир",
        to: "detskiy-mir"
    },
    {
        icon: "https://categories.olxcdn.com/assets/categories/olxuz/transport-3-2x.png",
        backColor: "rgb(35, 229, 219)",
        title: "Транспорт",
        to: "transport"
    },
    {
        icon: "https://categories.olxcdn.com/assets/categories/olxuz/detskiy-mir-36-2x.png",
        backColor: "rgb(255, 206, 50)",
        title: "Детский мир",
        to: "detskiy-mir"
    },
]

const Home = () => {
    return (
        <Container>
            <div className="container py-4">
                <h1 className="text-center">Главные категории</h1>
                {categories.map(v =>
                    <Link to={v.to} key={v.to} className="category">
                        <div className="icon" style={{ backgroundColor: v.backColor }}>
                            <img src={v.icon} alt="" />
                        </div>
                        {v.title}
                    </Link>)
                }
            </div>
        </Container>
    )
}

export default Home;
