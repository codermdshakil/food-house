import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import './Banner.css';
import banner1 from '../../images/banner/banner-1.png';



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
                            <div className='row d-flex align-items-center'>
                                <div className="col-lg-6 col-md-6">
                                    <div className='product-banner-title'>
                                        <p className='feaured-title'>Feature Product</p>
                                        <h2>May <span className='highlight'>protect</span> your brain as you age</h2>
                                        <p>Contains beneficial plant compounds. Apples are rich in plant compounds, particularly polyphenols. Supports hydration. Apple juice is 88% water and tastes good.</p>
                                        <button className='banner-btn'>Juicy Apple</button>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-11  m-auto order-first order-md-last mb-5">
                                    <div className='img-frame d-block'>
                                        <img src={banner1} className="img-fluid" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>Slide 2</SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
            </Swiper>
        </>
    );
};

export default Banner;