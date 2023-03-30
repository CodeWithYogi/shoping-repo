import React from 'react';

const SingleCategory = ({img, title, back}) => {
    return (
        <div className='container main-container px-0'>
            <img src={img} alt={title} className={`${back} mb-3 image-fluid`}/>
            <p className='overlay mb-0 text-center pt-2'>{title}</p>
        </div>
    );
}

export default SingleCategory;
