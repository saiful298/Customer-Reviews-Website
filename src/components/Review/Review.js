import React from 'react';
import { useNavigate } from 'react-router-dom';

const Review = (props) => {
    const { review, ratings, img, name, username, id } = props.review;
    const navigate = useNavigate()
    const showReviewDetail = () => {
        const path = `/review/${id}`;
        navigate(path);


    }
    return (
        <div class="card">
            <img src={img} alt="" width="250" height="200"></img>
            <div class="container">
                <h4><b>Name:{name}</b></h4>
                <h5>Rating:{ratings}</h5><hr />
                <p>Review: <small style={{ color: "red" }}>{review}</small></p>
                <button onClick={showReviewDetail}>{username} MemberShip Num :{id}</button>
            </div>
        </div>
    );
};

export default Review;
