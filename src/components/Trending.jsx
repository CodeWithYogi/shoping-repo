import React, { useState } from 'react';
import { list } from '../listingData'
import SingleProduct from './SingleProduct';

const Trending = () => {
    const [productList, setProductList] = useState(list)
    return (
        <div className='container d-flex flex-column align-items-center mb-5'>
            <div className='container d-flex justify-content-between'>
                <div></div>
                <h3>Trending T-Shirts</h3>
                <div></div>
            </div>
            <div className='row'>

                {
                    productList.slice(0,8).map((item) => {
                        return (
                            <div className='col-3'>
                                <SingleProduct
                            productList={productList}
                            item={item}
                        />
                            </div>
                        
                        )
                    })
                }
            </div>
            <button className='btn btn-danger'>VIEW ALL</button>
        </div>
    );
}

export default Trending;
