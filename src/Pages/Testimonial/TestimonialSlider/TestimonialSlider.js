import React from 'react';
import { EffectCoverflow, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import './TestimonialSlider.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalfAlt, faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import clint1 from '../../../images/clients/client-1.jpg';
import clint2 from '../../../images/clients/client-2.jpg';
import clint3 from '../../../images/clients/client-3.jpg';
import clint4 from '../../../images/clients/client-4.jpg';
import clint5 from '../../../images/clients/client-5.jpg';



const TestimonialSlider = () => {
    return (
        <div>

            <Swiper
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={"auto"}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                pagination={true}
                modules={[EffectCoverflow, Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className="row box">
                        <div className="col-lg-5 col-md-8  col-11 d-block m-auto">
                            <div className="review-box">
                                <div className="client-info d-flex align-items-center">
                                    <img src={clint1} className='img-fluid rounded-circle' alt="" />
                                    <div className='client-name'>
                                        <h6>Alex Meyer <FontAwesomeIcon className='bg-white text-primary rounded-circle ms-1' icon={faCheckCircle} /></h6>
                                        <p className='text-muted'>Belt Line Rd</p>
                                    </div>
                                </div>
                                <div className='d-flex align-items-center '>
                                    <p style={{ color: 'orange' }}> <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStarHalfAlt} /> <span style={{ color: 'black' }}>4.9</span> </p>
                                </div>
                                <h5>Fresh and healthy foods</h5>
                                <p>Incredable service and these guys are really awsome. Product this very fresh and testy. Awsome!</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="row box">
                        <div className="col-lg-5 col-md-8  col-11 d-block m-auto">
                            <div className="review-box">
                                <div className="client-info d-flex align-items-center">
                                    <img src={clint2} className='img-fluid rounded-circle' alt="" />
                                    <div className='client-name'>
                                        <h6>Phillip Hart<FontAwesomeIcon className='bg-white text-primary rounded-circle ms-2' icon={faCheckCircle} /></h6>
                                        <p className='text-muted'>Poplar Dr</p>
                                    </div>
                                </div>
                                <div className='d-flex align-items-center '>
                                    <p style={{ color: 'orange' }}> <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /> <span style={{ color: 'black' }}>5</span> </p>
                                </div>
                                <h5>All foods is nicely served</h5>
                                <p>Embedsoscial it's really good on managing looking goods and it's very professional, Thank you.</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="row box">
                        <div className="col-lg-5 col-md-8  col-11 d-block m-auto">
                            <div className="review-box">
                                <div className="client-info d-flex align-items-center">
                                    <img src={clint3} className='img-fluid rounded-circle' alt="" />
                                    <div className='client-name'>
                                        <h6>Terrence Sutton <FontAwesomeIcon className='bg-white text-primary rounded-circle ms-1' icon={faCheckCircle} /></h6>
                                        <p className='text-muted'>Plum St</p>
                                    </div>
                                </div>
                                <div className='d-flex align-items-center '>
                                    <p style={{ color: 'orange' }}> <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStarHalfAlt} /> <span style={{ color: 'black' }}>4.7</span> </p>
                                </div>
                                <h5>Great all products</h5>
                                <p>This website is beatifull and user friendly i like this website and this website service foods, Just Wow.</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="row box">
                        <div className="col-lg-5 col-md-8  col-11 d-block m-auto">
                            <div className="review-box">
                                <div className="client-info d-flex align-items-center">
                                    <img src={clint4} className='img-fluid rounded-circle' alt="" />
                                    <div className='client-name'>
                                        <h6>Ana Fox <FontAwesomeIcon className='bg-white text-primary rounded-circle ms-1' icon={faCheckCircle} /></h6>
                                        <p className='text-muted'>Center St</p>
                                    </div>
                                </div>
                                <div className='d-flex align-items-center '>
                                    <p style={{ color: 'orange' }}> <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStarHalfAlt} /> <span style={{ color: 'black' }}>4.8</span> </p>
                                </div>
                                <h5>This is Great And Good Job</h5>
                                <p>My favarate and I'm always buy foods from this website this website is owner Good Person. Like This.</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="row box">
                        <div className="col-lg-5 col-md-8  col-11 d-block m-auto">
                            <div className="review-box">
                                <div className="client-info d-flex align-items-center">
                                    <img src={clint5} className='img-fluid rounded-circle' alt="" />
                                    <div className='client-name'>
                                        <h6>Floyd Pena <FontAwesomeIcon className='bg-white text-primary rounded-circle ms-1' icon={faCheckCircle} /></h6>
                                        <p className='text-muted'>Mockingbird Ln</p>
                                    </div>
                                </div>
                                <div className='d-flex align-items-center '>
                                    <p style={{ color: 'orange' }}> <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStarHalfAlt} /> <span style={{ color: 'black' }}>4.9</span> </p>
                                </div>
                                <h5>I love this website and services</h5>
                                <p>This is really a good website and there services and food quiality is best , fruits always need and clean.</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default TestimonialSlider;


