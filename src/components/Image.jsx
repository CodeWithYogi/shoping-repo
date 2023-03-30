import React from 'react';
import Cover from '../images/image1.png' 

const Image = () => {
    return (
        <div className='container-fluid p-0 mb-5'>
            <img src={Cover} alt="cover-image" className='img-fluid' />
        </div>
    );
}

export default Image;
