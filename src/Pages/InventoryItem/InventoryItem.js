import React from 'react';
import './InventoryItem.css';


const InventoryItem = ({ signleItem }) => {

    const { img, name, price, quantity } = signleItem;

    return (
        <div className='col-lg-4'>
            <div className="item-box" >
                <img src={img} className="img-fluid" alt="" />
                <div className="item-info px-2">
                    <h4>{name}</h4>
                    <p>Price : ${price}</p>
                    <small>Quantity : {quantity}</small>
                </div>
            </div>
        </div>
    );
};

export default InventoryItem;