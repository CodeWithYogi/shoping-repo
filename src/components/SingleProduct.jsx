import React from 'react';
import {FaRupeeSign} from 'react-icons/fa'

const SingleProduct = ({productList, item}) => {
    const {id, title, price, discount, img, disc} = item;
    return (
        <div className='container d-flex flex-column align-items-center mb-3'>
            <img src={img} alt={title} className='mb-2'/>
            <p className='mb-0'>{title}</p>
            <p className='mb-1'>{disc}</p>
            <div className='d-flex align-items-center'>
                <h4><FaRupeeSign/>{discount}</h4>
                <p className='ps-2 h6 text-danger'><del><FaRupeeSign/>{price}</del></p>
            </div>
            <div>
                <button className='btn btn-light btn-outline-secondary'>S</button>
                <button className='btn btn-light btn-outline-secondary ms-2'>M</button>
                <button className='btn btn-light btn-outline-secondary ms-2'>L</button>
                <button className='btn btn-light btn-outline-secondary ms-2'>XL</button>
                <button className='btn btn-light btn-outline-secondary ms-2'>XXL</button>
            </div>
        </div>
    );
}

export default SingleProduct;
