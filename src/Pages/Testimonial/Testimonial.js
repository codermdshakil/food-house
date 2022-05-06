import React from 'react';
import './Testimonial.css';
import TestimonialSlider from './TestimonialSlider/TestimonialSlider';

const Testimonial = () => {
    return (
        <div className='mt-3' id='testimonial'>
            <div className="container">
                <div className='py-3'>
                    <p className='feature-title mt-5'>Testimonial</p>
                    <h4 className='products-title' >What Our Client's Say About Us</h4>
                </div>
                <TestimonialSlider></TestimonialSlider>
            </div>
        </div>
    );
};

export default Testimonial;