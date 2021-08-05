import "./Category.css"
import React from 'react'
import Container from "../../containers/Container";
// import datas from "../../data";
import { Redirect, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as faHeartEmpty } from "@fortawesome/free-regular-svg-icons";
import { faHeart as faHeartFill } from "@fortawesome/free-solid-svg-icons";
import { toggleLike } from "../../redux/actions";

const Category = () => {
    const { category } = useParams();

    const data = useSelector(state => state.data[category]);
    console.log(data);

    const dispatch = useDispatch();
    const toggle = (i) => {
        let newData = [...data];
        newData[i].like = !newData[i].like;

        console.log({ [category]: newData });

        dispatch(toggleLike({ [category]: newData }))
    }

    return (
        <Container>
            {!data && <Redirect to="/" />}
            <div className="container">
                <h1>Category: {category}</h1>
                <div className="row">
                    {data?.map((v, i) =>
                        <div className="col-sm-6 col-md-3">
                            <div className="product shadow rounded overflow-hidden p-2">
                                <img src={v.img} className="w-100 mb-4" alt="" />
                                <p>{v.title}</p>
                                <p className="d-flex justify-content-between">
                                    <span>{v.price}</span>
                                    <span className="text-danger" onClick={() => toggle(i)}>
                                        <FontAwesomeIcon icon={v.like && faHeartFill || faHeartEmpty} />
                                    </span>
                                </p>
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
