import React from 'react';
import {RiMenu4Line} from 'react-icons/ri'
import {AiOutlineSearch} from 'react-icons/ai'
import {AiOutlineHeart} from 'react-icons/ai'
import {FiShoppingBag} from 'react-icons/fi'
import {AiOutlineUser} from 'react-icons/ai'
const Navbar = () => {
    return (
        <div className='container-fluid navbar'>
            <div className='container d-flex justify-content-between align-items-center'>
            <span className='text-danger'><RiMenu4Line/></span>
            <span>Logo Here</span>
            <div>
                <span className='ps-3'><AiOutlineSearch/></span>
                <span className='ps-5'><AiOutlineHeart/></span>
                <span className='ps-5'><FiShoppingBag/></span>
                <span className='ps-5'><AiOutlineUser/></span>
            </div>
            </div>
            
        </div>
    );
}

export default Navbar;
