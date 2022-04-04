import React, { useEffect, useState } from 'react';
import Review from '../Review/Review';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <div>
            <h3>My Reviews list</h3>
            <h5> Total Reviews {reviews.length}</h5>
            {
                reviews.map(review => <Review key={review.id} review={review}></Review>)
            }
        </div>
    );
};

export default Reviews;