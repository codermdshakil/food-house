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
                                <article className='footer-items'>
                                    <div className='d-flex align-items-center'>
                                        <h3 className='title'>FOOD</h3><h3 style={{ color: 'white' }}>HOUSE</h3>
                                    </div>
                                    <div>
                                        <p>Storing of food has several main purposes: Storage of harvested and processed plant and animal food products for distribution to consumers.</p>
                                        <small><FontAwesomeIcon icon={faLocationDot} /> Kapasia, Gazipur, Dhaka</small> <br />
                                        <small><FontAwesomeIcon icon={faEnvelope} /> ahmedshakil0512@gmail.com</small> <br />
                                        <small><FontAwesomeIcon icon={faPhone} /> +8801729107200 </small>
                                    </div>
                                </article>
                            </div>
                            <div className="col-lg-3 col-md-6 col-10 d-block m-auto m-md-0">
                                <article className='footer-items'>
                                    <h4 className='footer-title'>Quick Links</h4>
                                    <Link to='/banner' className='link-title'>Banner</Link><br />
                                    <Link to='/inventory-items' className='link-title'>
                                        Inventory Items</Link><br />
                                    <Link to='/blogs' className='link-title'>Blogs</Link><br />
                                    <Link to='/signup' className='link-title'>Sign Up</Link><br />
                                    <Link to='/signin' className='link-title'>Sign In</Link><br />
                                </article>
                            </div>
                            <div className="col-lg-3 col-md-6 col-10 d-block m-auto m-md-0">
                                <article className='footer-items'>
                                    <h4 className='footer-title'>Follow Us</h4>
                                    <div className='social-media'>
                                        <img src={facebookLogo} className="img-fluid" alt="" />
                                        <img src={instaLogo} className="img-fluid" alt="" />
                                        <img src={twitterLogo} className="img-fluid" alt="" />
                                        <img src={linkDinLogo} className="img-fluid" alt="" />
                                    </div>
                                    <img src={paymentLogo} className="img-fluid mt-4" alt="" />
                                </article>
                            </div>
                            <div className="col-lg-3 col-md-6 col-10 d-block m-auto m-md-0">
                                <article className='footer-items'>
                                    <h4 className='footer-title'>NewsLetter</h4>
                                    <div className='subscribe'>
                                        <input type="text" name='email' placeholder='E-mail' required />
                                        <button onClick={() => setNotification(false)} >Subscribes
                                            {notification ? <FontAwesomeIcon style={{ marginLeft: '10px' }} icon={faBellSlash} /> : <FontAwesomeIcon style={{ marginLeft: '10px' }} icon={faBell} />}</button>
                                    </div>
                                </article>
                            </div>
                        </div>
                    </div>
                    <p className='text-center pt-5 px-4 developer' >&copy; CopyRight Reserved <span><span className='developer-name'>Md. Shakil Ahmed</span> | Programming hero Learner - {year} </span> </p>
                </div>
            </div>
        </div>
    );
};

export default Footer;



