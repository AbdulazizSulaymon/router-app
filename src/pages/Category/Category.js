import "./Category.css"
import React from 'react'
import Container from "../../containers/Container";
import datas from "../../data";
import { useParams } from "react-router-dom";

console.log(datas);

const Category = () => {
    const { category } = useParams();
    console.log(category);

    const obj = datas.filter(v => v.category == category)[0];
    const data = obj.data;
    console.log(obj);
    console.log(data);

    return (
        <Container>
            <div className="container">
                <h1>Category: {category}</h1>
                <div className="row">
                    {data.map(v =>
                        <div className="col-sm-6 col-md-3">
                            <div className="product shadow rounded overflow-hidden p-2">
                                <img src={v.img} className="w-100 mb-4" alt="" />
                                <p>{v.title}</p>
                                <span>{v.price}</span> <br />
                                <span>{v.location}</span>
                            </div>
                        </div>)
                    }
                </div>
            </div>
        </Container>

    )
}

export default Category;
