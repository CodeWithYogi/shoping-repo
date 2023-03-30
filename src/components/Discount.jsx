import React, { useState } from 'react';
import { listedCategory } from '../listingData';
import SingleCategory from './SingleCategory';
import Image3 from './Image3';
import FlatDiscount from './FlatDiscount';

const Discount = () => {
    const [listCategory, setListCategory] = useState(listedCategory)
    return (
        <div className='container d-flex flex-column align-items-center mb-5'>
            <div className='row mb-4'>
                {
                    listCategory.map((item) => {
                        const { title, img, back } = item;
                        return (
                            <div className='col-4' key={item.id}>
                                <SingleCategory
                                    title={title}
                                    img={img}
                                    back={back}
                                />
                            </div>

                        )
                    })
                }
            </div>
            <Image3/>
            <FlatDiscount/>
        </div>
    );
}

export default Discount;
