import React from 'react';
import './MyItem.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';


const MyItem = ({ item, handleMyitemDelete }) => {

    const { _id, name, img, price, email, quantity, sold, supliername, description } = item;
    return (
        <div className='col-lg-4 col-md-6 col-10 d-block m-auto m-md-0'>
            <article className="my-item-box" data-aos="fade-up">
                <div className="item-frame">
                    <img src={img} className="img-fluid" alt="" />
                </div>
                <div className="item-details">
                    <h6 className='text-muted'>Id: {_id}</h6>
                    <h3>{name}</h3>
                    <h6>Price: ${price}</h6>
                    <h6>Sold: {sold}</h6>
                    <h6>Quantity: <span className='item-quantity'>{quantity}</span> </h6>
                    <h6>Suplier : <span className='text-muted'>by</span> <span className='text-info'>{supliername}</span> </h6>
                    <h6>Email: <span className='text-muted'>{email}</span></h6>
                    <p>Description : <span className='text-muted'>{description}</span> </p>
                </div>
                <div>
                    <button className='item-delete-btn' onClick={() => handleMyitemDelete(_id)}>Delete Item <FontAwesomeIcon icon={faTrashCan} /></button>
                </div>
            </article>
        </div>
    );
};

export default MyItem;