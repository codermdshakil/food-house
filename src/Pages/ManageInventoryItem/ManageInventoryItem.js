import React from 'react';
import './ManageInventoryItem.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';

const ManageInventoryItem = ({ products, handleProductDelete }) => {

    const { _id , img, name, price, quantity , supliername, sold} = products;

    return (
        <div className='col-lg-6 col-md-8 col-11 d-block m-auto m-lg-0'>
            <article className='product-box' data-aos="fade-up">
                <div className='image-frame'>
                    <img src={img}  className="img-fluid" alt="" />
                </div>
                <div className='products-info'>
                    <h4>{name}</h4>
                    <h5>Price : <span className='price-style'>${price}</span></h5>
                    <h6>Sold: {sold}</h6>
                    <h6>Quantity : <span className='text-danger'>{quantity}</span> </h6>
                    <h6>Suplier : By <span className='suplier'> {supliername}</span> </h6>
                </div>
                <div>
                    <button onClick={() => handleProductDelete(_id)} className='delete-area'><FontAwesomeIcon icon={faTrashCan} /></button>
                </div>
            </article>
        </div>
    );
};

export default ManageInventoryItem;