import React from 'react';
import { BsTelephone } from 'react-icons/bs'

const Header = () => {
    return (
        <div className='container-fluid bg-black' >
            <div className='d-flex justify-content-between align-items-center px-5'>
                <p className='text-white m-0 p-0'>Welcome to our store Hiscraves</p>
                <div className='d-flex justify-content-between'>
                    <span className='text-white me-2 h6'><BsTelephone /></span>
                    <p className='text-white m-0 p-0'>Call Us: 1234567890</p>
                </div>
            </div>
        </div>
    );
}

export default Header;
