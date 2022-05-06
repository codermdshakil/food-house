import React from 'react';
import notFoundImg from '../../images/notfound.gif';
import './NotFound.css';



const NotFound = () => {
    return (
        <div>
            <div className="container">
                <div className="img-frame">
                    <img src={notFoundImg} alt="" />
                </div>
            </div>
        </div>
    );
};

export default NotFound;