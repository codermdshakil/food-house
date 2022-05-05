import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import './TestimonialSlider.css';

const TestimonialSlider = () => {
    return (
        <div>
            <>
                <br />
                <Swiper watchSlidesProgress={true} slidesPerView={3} className="mySwiper">
                    <SwiperSlide>
                        <div className="single-test">
                            <h2>this is items 1</h2>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="single-test">
                            <h2>this is items 2</h2>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="single-test">
                            <h2>this is items 3</h2>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="single-test">
                            <h2>this is items 4</h2>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="single-test">
                            <h2>this is items 5</h2>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="single-test">
                            <h2>this is items 6</h2>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="single-test">
                            <h2>this is items 7</h2>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="single-test">
                            <h2>this is items 8</h2>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="single-test">
                            <h2>this is items 9</h2>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </>
        </div>
    );
};

export default TestimonialSlider;
