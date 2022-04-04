import React from 'react';
import { useNavigate } from 'react-router-dom';

const Review = (props) => {
    const { name, username, id } = props.review;
    const navigate = useNavigate()
    const showReviewDetail = () => {
        const path = `/review/${id}`;
        navigate(path);


    }
    return (
        <div>
            <h2>Name:{name}</h2>
            <button onClick={showReviewDetail}>{username} id:{id}</button>

        </div>
    );
};

export default Review;