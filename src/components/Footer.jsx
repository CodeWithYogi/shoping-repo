import React from 'react';
import {BsFacebook} from 'react-icons/bs'
import {AiFillTwitterCircle} from 'react-icons/ai'
import {AiFillInstagram} from 'react-icons/ai'
import {AiFillLinkedin} from 'react-icons/ai'
import {BsPinterest} from 'react-icons/bs'
import {GoLocation} from 'react-icons/go'
import {IoCallOutline} from 'react-icons/io5'
import {IoMailOutline} from 'react-icons/io5'

const Footer = () => {
    return (
        <footer className='container-fluid d-flex flex-column align-items-center justify-content-center m-0 p-0'>
            <div className="container-fluid bg-secondary position-relative mb-5">
                <hr />
                <hr />
                <hr />
                <hr />
                <hr />
                <hr />
                <hr />
                <hr />
                <img src="./images/Ellipse 39.png" alt="ellipse" className='ellipse1' />
                <img src="./images/Ellipse 27.png" alt="ellipse" className='ellipse2' />
            </div>
            <div className="container bg-danger d-flex flex-column justify-content-center align-items-center px-5 py-5 mb-5">
                <h1 className='text-white text-center'>Subscribe to get updates on exciting offers & deals</h1>
                <div className='d-flex'>
                <input type="search" placeholder='Enter your Email' className='form-control bg-danger'/>
                <button className='btn btn-light'>Subscribe</button>
                </div>
            </div>
            <div className="container row m-0 p-0 justify-content-between align-items-start">
                <div className='col-3 ms-0 ps-0'>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut corporis vero id alias. Aliquam dolor sequi officiis! Illo neque ea voluptas aspernatur optio, corrupti autem accusamus in nesciunt ut similique quibusdam et iusto iste, repudiandae nobis ducimus laborum aut architecto? Dolor, optio perspiciatis praesentium ad animi perferendis quasi cum quo aut nemo reprehenderit adipisci voluptatem molestias.</p>
                    <div className='d-flex align-items-center justify-content-start'>
                        <span className='me-3'><BsFacebook/></span>
                        <span className='me-3'><AiFillTwitterCircle/></span>
                        <span className='me-3'><AiFillInstagram/></span>
                        <span className='me-3'><AiFillLinkedin/></span>
                        <span className='me-3'><BsPinterest/></span>
                    </div>
                </div>
                <div className='col-2'>
                    <h6 className='text-danger'>ONLINE SHOPPING</h6>
                    <p>Men’s T-Shirts</p>
                    <p>Women’s Wear</p>
                    <p>Winter Collections</p>
                    <p>Hooded T-Shirts</p>
                    <p>Streetwear Collections</p>
                </div>
                <div className='col-2'>
                    <h6 className='text-danger'>CUSTOMER POLICIES</h6>
                    <p>About Us</p>
                    <p>Terms & Conditions</p>
                    <p>Shipping & Returns Policy</p>
                    <p>Cancellation & Refund Policy</p>
                    <p>Contact Us</p>
                </div>
                <div className='col-4 me-0 pe-0'>
                    <h6 className='text-danger'>STORE INFORMATION</h6>
                    <p><span><GoLocation/></span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                    <p><span><IoCallOutline/></span>Call Us: 1234567890</p>
                    <p><span><IoMailOutline/></span>Email Us: info@yourmail.com</p>
                </div>
            </div>
            <div className='container-fluid text-center bg-dark text-white mx-0 px-0'>
                    <small>2022-23 Powered By dummy team</small>
            </div>
        </footer>
    );
}

export default Footer;
