// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';
import PropTypes from 'prop-types';

const Cards = ({handleAddToCart}) => {

    const [course, setCourse] = useState([]);

    useEffect(() => {
        fetch('./course.json')
            .then(res => res.json())
            .then(data => setCourse(data))
    }, [])
    return (
        <div className='w-3/4'>
            <h3>Data: {course.length}</h3>
            <div className='grid grid-cols-3 gap-2'>
                {
                    course.map(course => <Card
                        key={course.id}
                        handleAddToCart={handleAddToCart}
                        course={course}></Card>)
                }
            </div>
        </div>
    );
};

Cards.propTypes={
    handleAddToCart:PropTypes.func.isRequired,

}
export default Cards;