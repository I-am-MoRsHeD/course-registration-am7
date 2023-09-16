// eslint-disable-next-line no-unused-vars
import React from 'react';
import { ImBookmark } from 'react-icons/im'
import PropTypes from 'prop-types';

const Card = ({ course ,handleAddToCart}) => {
    // console.log(course)
    const { course_img, course_title, course_details, credit_hour, price } = course;
    return (
            <div className="card w-full bg-base-200 my-5 shadow-xl">
                <div className="p-3 space-y-3">
                    <figure><img className='rounded-lg' src={course_img} alt="Course-image" /></figure>
                    <h2 className="font-bold text-xl">{course_title}</h2>
                    <p>{course_details}</p>
                    <div className='flex justify-between'>
                        <p>$ Price: {price}</p>
                        <button><ImBookmark></ImBookmark></button>
                        <p>Credit: {credit_hour}hr</p>
                    </div>
                    <div className="card-actions">
                        <button 
                            onClick={()=> handleAddToCart(course)}
                            className="btn btn-primary w-full">Select</button>
                    </div>
                </div>
            </div>
    );
};

Card.propTypes ={
    course:PropTypes.object.isRequired,
    handleAddToCart:PropTypes.func,
}

export default Card;