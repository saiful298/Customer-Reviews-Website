import React, { useEffect, useState } from 'react';
import useReview from '../../hook/useReviews';
import Review from '../Review/Review';

const Reviews = () => {
    const [reviews, setReviews] = useReview()
    return (
        <div>
            <h3>Our Reviews list</h3>
            <h5> Total Client {reviews.length}</h5>
            <div className='cardPart'>
                {
                    reviews.map(review => <Review
                        key={review.id}
                        review={review}
                    ></Review>)
                }
            </div>
        </div>
    );
};

export default Reviews;