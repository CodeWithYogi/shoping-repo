import React, { useState } from 'react';
import {data} from '../listingData'

const Categories = () => {
    const [listData, setListData] = useState(data)
    return (
        <>
        <div className='container d-flex m-auto justify-content-between align-items-center flex-wrap mb-5'>
            {
                listData.map((item) => {
                    const { id, category, img, backColor } = item;
                    return (
                        <div key={id} className='d-flex flex-column align-items-center'>
                            <div className={`${backColor} rounded-circle mb-3`}>
                                <img src={img} alt={category} />
                            </div>
                            <h6 className='text-center'>{category}</h6>
                        </div>
                    )
                })
            }
        </div>
        <div className='container mb-5'>
            <div className='row mb-4'>
                <img src="./images/image 2.png" alt="image2" className='col-6'/>
                <img src="./images/image 3.png" alt="image3" className='col-6'/>
            </div>
            <div className='row'>
                <img src="./images/image 4.png" alt="image4" className='col-4'/>
                <img src="./images/image 6.png" alt="image6" className='col-4'/>
                <img src="./images/image 5.png" alt="image5" className='col-4'/>
            </div>
        </div>
        </>
    );
}

export default Categories;
