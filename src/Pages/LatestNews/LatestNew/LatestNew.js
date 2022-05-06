import { faCalendarDays, faComments } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import '../LatestNew.css';


const LatestNew = ({news}) => {

    const {img, des, dates, comment, suplierImg, suplierName } = news;

    return (
        <div className="col-lg-4 col-md-6 col-10 d-block m-auto m-md-0">
            <div className="news-box">
                <div className="new-image">
                    <img src={img} className="img-fluid" alt="" />
                </div>
                <div className="news-details">
                    <div className='d-flex align-items-center justify-content-between py-1'>
                        <p className='text-muted'><FontAwesomeIcon icon={faCalendarDays} /> {dates}</p>
                        <p className='text-muted'><FontAwesomeIcon icon={faComments} /> comments(0{comment}) </p>
                    </div>
                    <p>{des}</p>
                    <div className='suplier'>
                        <img src={suplierImg} alt="" />
                        <p className='mt-2'>By <span> {suplierName}</span></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LatestNew;