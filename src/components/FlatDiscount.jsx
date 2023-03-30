import React from 'react';

const FlatDiscount = () => {
    return (
        <div className='row'>
            <div className='col-6 main-container'>
                <img src='./images/Rectangle 12.png' alt="rect12"/>
                <img src="./images/diamond 1.png" alt="diamond" className='diamond center-item'/>
                <h5 className='center-item hurryUp'>Hurry Up!</h5>
                <h3 className='center-item percentage'>85% OFF</h3>
                <h5 className='center-item sale'>Sale</h5>
                <button className='center-item shop-now btn btn-outline-light'>SHOP NOW</button>
            </div>
            <div className='col-6 main-container'>
                <img src='./images/Rectangle 13.png' alt="rect12"/>
                <img src="./images/discount 1.png" alt="diamond" className='diamond center-item'/>
                <h5 className='center-item hurryUp'>Hurry Up!</h5>
                <h3 className='center-item percentage'>85% OFF</h3>
                <h5 className='center-item sale'>Sale</h5>
                <button className='center-item shop-now btn btn-outline-light'>SHOP NOW</button>
            </div>
        </div>
    );
}

export default FlatDiscount;
