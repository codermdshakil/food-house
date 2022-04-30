import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import './Banner.css';



const Banner = () => {
    return (
        <>
            <Swiper
                pagination={{
                    type: "fraction",
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className="item-container">
                        <div className="container">
                            <div className='row'>
                                <div className="col-lg-6 col-md-6">
                                    <div className='product-banner-title '>
                                        <p className='feaured-title'>Feature Product</p>
                                        <h2>May <span className='highlight'>protect</span> your brain as you age</h2>
                                        <p>Contains beneficial plant compounds. Apples are rich in plant compounds, particularly polyphenols. Supports hydration. Apple juice is 88% water and tastes good.</p>
                                        <button className='banner-btn'>Juicy Apple  </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
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
                                            <p>Check the characteristic signs of freshness such as bright, lively color in the vegetable and look to see if the vegetable is crisp and free of soft spots.</p>
                                            <button className='banner-btn'>Juicy Apple  </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
            </Swiper>
        </>
    );
};

export default Banner;