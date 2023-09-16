// eslint-disable-next-line no-unused-vars
import React from 'react';
import PropTypes from 'prop-types';

const Carts = ({title, credit, remaining, totalPrice}) => {
    console.log(title)
    return (
        <div className='w-1/4 bg-base-200 p-3 space-y-3 card shadow-xl'>
            <div className='border-b-black border-b pb-2'>
                <h2 className=' text-blue-500 text-xl'>Credit Hour Remaining:{remaining} hr</h2>
            </div>
            <h3 className='font-bold text-2xl border-b-black border-b pb-2'>Course Name</h3>
            {
                title.map(item => 
                <li className='list-decimal' key={item.id}>{item.course_title}</li>)
            }
            <h3 className='font-semibold text-lg'>Total Credit Hour: {credit} hr</h3>
            <p className='font-semibold text-lg'>Total Price:{totalPrice} USD</p>
        </div>
    );
};

Carts.propTypes ={
    title:PropTypes.array,
    credit:PropTypes.number,
    remaining:PropTypes.number,
    totalPrice:PropTypes.number,
}
export default Carts;