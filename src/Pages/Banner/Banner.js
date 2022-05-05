import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation , Autoplay} from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import './Banner.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

const Banner = () => {
    return (
        <div className='banner-wrapper' id="banner">
            <Swiper
                pagination={{
                    type: "fraction",
                }}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                  }}
                navigation={true}
                modules={[ Autoplay ,Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className="item-2-container">
                        <div className="container">
                            <div className='row'>
                                <div className="col-lg-6 col-md-6 ">
                                    {/* empty */}
                                </div>
                                <div className="col-lg-6 col-md-6 col-11">
                                    <div className='text-end '>
                                        <div className="product-banner2-title">
                                            <p className='feaured-title'>Feature Product</p>
                                            <h2>Most  <span className='highlight'> Nutrient </span> lively  Vegetables </h2>
                                            <p className='pl-3'>Check the characteristic signs of freshness such as bright, lively color in the vegetable and look to see if the vegetable is crisp and free of soft spots.</p>
                                            <button className='banner-btn'>Vegetables <FontAwesomeIcon style={{ marginLeft: '10px' }} icon={faArrowRight} /></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="item-container">
                        <div className="container">
                            <div className='row'>
                                <div className="col-lg-6 col-md-6 ">
                                    <div className='product-banner-title '>
                                        <p className='feaured-title'>Feature Product</p>
                                        <h2>May <span className='highlight'>Protect</span> your brain as you age</h2>
                                        <p>Contains beneficial plant compounds. Apples are rich in plant compounds, particularly polyphenols. Supports hydration. Apple juice is 88% water and tastes good.</p>
                                        <button className='banner-btn'>Juicy Apple <FontAwesomeIcon style={{ marginLeft: '10px' }} icon={faArrowRight} />  </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="item-3-container">
                        <div className="container">
                            <div className='row'>
                                <div className="col-lg-6 col-md-7 col-11">
                                    <div className='text-start '>
                                        <div className="product-banner2-title">
                                            <p className='feaured-title'>Feature Product</p>
                                            <h2> Having good thymes  in the <span className='highlight'>Garden</span> </h2>
                                            <p>Check the characteristic signs of freshness such as bright, lively color in the vegetable and look to see if the vegetable is crisp and free of soft spots.</p>
                                            <button className='banner-btn'> Purple Onion <FontAwesomeIcon style={{ marginLeft: '10px' }} icon={faArrowRight} /></button>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-5 ">
                                    {/* empty */}
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Banner;