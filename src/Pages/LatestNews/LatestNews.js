import React from 'react';
import './LatestNews.css';
import news1 from '../../images/news/news-1.jpg';
import news2 from '../../images/news/news-2.jpg';
import news3 from '../../images/news/news-3.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDays, faComments } from '@fortawesome/free-solid-svg-icons';
import suplier1 from '../../images/suplier/1.jpg';
import suplier2 from '../../images/suplier/2.jpg';
import suplier3 from '../../images/suplier/3.jpg';

const LatestNews = () => {
    return (
        <div className='news-wrapper'>
            <div className="container">
                <div className='py-3'>
                    <p className='feature-title mt-5'>Popular News</p>
                    <h4 className='products-title' >Latest News & Blog</h4>
                </div>
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-10 d-block m-auto m-md-0">
                        <div className="news-box">
                            <div className="new-image">
                                <img src={news1} className="img-fluid" alt="" />
                            </div>
                            <div className="news-details">
                                <div className='d-flex align-items-center justify-content-between py-1'>
                                    <p className='text-muted'><FontAwesomeIcon icon={faCalendarDays} /> 1 May, 2022 </p>
                                    <p className='text-muted'><FontAwesomeIcon icon={faComments} /> comments(04) </p>
                                </div>
                                <p>Peruvian Pía León, chef-patron of Lima's Kjollel, has been named The World's Best Female Chef 2021 ahead of The World's ceremony.</p>
                                <div className='suplier'>
                                    <img src={suplier1} alt="" />
                                    <p className='mt-2'>By <span> Prience Orner</span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-10 d-block m-auto m-md-0">
                        <div className="news-box">
                            <div className="new-image">
                                <img src={news2} className="img-fluid" alt="" />
                            </div>
                            <div className="news-details">
                                <div className='d-flex align-items-center justify-content-between py-1'>
                                    <p className='text-muted'><FontAwesomeIcon icon={faCalendarDays} /> 29 Jan, 2022 </p>
                                    <p className='text-muted'><FontAwesomeIcon icon={faComments} /> comments(06) </p>
                                </div>
                                <p>Mix cereals and mashed cooked grains with breast milk, formula, or water to make it smooth and easy for your baby to swallow Mash or puree vegetables.</p>
                                <div className='suplier'>
                                    <img src={suplier2} alt="" />
                                    <p className='mt-2'>By <span> Louise Torres</span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-10 d-block m-auto m-md-0">
                        <div className="news-box">
                            <div className="new-image">
                                <img src={news3} className="img-fluid" alt="" />
                            </div>
                            <div className="news-details">
                                <div className='d-flex align-items-center justify-content-between py-1'>
                                    <p className='text-muted'><FontAwesomeIcon icon={faCalendarDays} /> 2 May, 2022 </p>
                                    <p className='text-muted'><FontAwesomeIcon icon={faComments} /> comments(07) </p>
                                </div>
                                <p>A good egg is a nice person. Good egg is a friendly, old-fashioned way to a good guy or a kind person. When you call your next door neighbor.</p>
                                <div className='suplier'>
                                    <img src={suplier3} alt="" />
                                    <p className='mt-2'>By <span> Yolanda Simpson</span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LatestNews;