import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import './Footer.css';
import { faLocationDot, faEnvelope, faPhone, faBell, faBellSlash } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import facebookLogo from '../../images/fb-corner.png';
import instaLogo from '../../images/instagram.png';
import twitterLogo from '../../images/twitter-circle.png';
import linkDinLogo from '../../images/linkedin.png';
import paymentLogo from '../../images/payment.png';



const Footer = () => {

    const dates = new Date();
    let year = dates.getFullYear();
    const [notification, setNotification] = useState(true);

    return (
        <div className='mt-5 pt-5' >
            <div className="footer-section" id='footer'>
                <div className="container">
                    <div className="footer-wrapper">
                        <div className="row">
                            <div className="col-lg-3 col-md-6 col-10 d-block m-auto m-md-0">
                                <div className='footer-items'>
                                    <div className='d-flex align-items-center'
                                    data-aos="fade-down"
                                    >
                                        <h3 className='title'>FOOD</h3><h3 style={{ color: 'white' }}>HOUSE</h3>
                                    </div>
                                    <div
                                        data-aos="fade-right"
                                        data-aos-offset="300"
                                        data-aos-easing="ease-in-sine"
                                    >
                                        <p>Storing of food has several main purposes: Storage of harvested and processed plant and animal food products for distribution to consumers.</p>
                                        <small><FontAwesomeIcon icon={faLocationDot} /> Kapasia, Gazipur, Dhaka</small> <br />
                                        <small><FontAwesomeIcon icon={faEnvelope} /> ahmedshakil0512@gmail.com</small> <br />
                                        <small><FontAwesomeIcon icon={faPhone} /> +8801729107200 </small>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-10 d-block m-auto m-md-0">
                                <div className='footer-items'
                                    data-aos="fade-up"
                                    data-aos-anchor-placement="center-center"
                                >
                                    <h4 className='footer-title'>Quick Links</h4>
                                    <Link to='/banner' className='link-title'>Banner</Link><br />
                                    <Link to='/inventory-items' className='link-title'>
                                        Inventory Items</Link><br />
                                    <Link to='/blogs' className='link-title'>Blogs</Link><br />
                                    <Link to='/signup' className='link-title'>Sign Up</Link><br />
                                    <Link to='/signin' className='link-title'>Sign In</Link><br />
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-10 d-block m-auto m-md-0">
                                <div className='footer-items'
                                    data-aos="fade-up"
                                    data-aos-anchor-placement="center-center"
                                >
                                    <h4 className='footer-title'>Follow Us</h4>
                                    <div className='social-media'>
                                        <a target='_blank' href="https://www.facebook.com/codermdshakil"> <img src={facebookLogo} className="img-fluid" alt="" /></a>
                                        <a target='_blank' href="https://www.instagram.com/codermdshakil/"> <img src={instaLogo} className="img-fluid" alt="" /></a>
                                        <a target='_blank' href="https://twitter.com/codermdshakil/"> <img src={twitterLogo} className="img-fluid" alt="" /></a>
                                        <a target='_blank' href="https://www.linkedin.com/in/codermdshakil/"> <img src={linkDinLogo} className="img-fluid" alt="" /></a>
                                    </div>
                                    <img src={paymentLogo} className="img-fluid mt-4" alt="" />
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-10 d-block m-auto m-md-0">
                                <div className='footer-items'
                                    data-aos="fade-left"
                                >
                                    <h4 className='footer-title'>NewsLetter</h4>
                                    <div className='subscribe'>
                                        <input type="text" name='email' placeholder='E-mail' required />
                                        <button onClick={() => setNotification(false)} >Subscribes
                                            {notification ? <FontAwesomeIcon style={{ marginLeft: '10px' }} icon={faBellSlash} /> : <FontAwesomeIcon style={{ marginLeft: '10px' }} icon={faBell} />}</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <p className='text-center pt-5 px-4 developer' 
                    data-aos="zoom-in"
                    >&copy; CopyRight Reserved <span> <a target='_blank' href="https://www.linkedin.com/in/codermdshakil/"> <span className='developer-name'>Md. Shakil Ahmed</span> | Programming hero Learner - {year} </a> </span> </p>
                </div>
            </div>
        </div>
    );
};

export default Footer;



