import React from 'react';
import './InventoryItem.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleUp } from '@fortawesome/free-solid-svg-icons';

const InventoryItem = ({ signleItem }) => {

    const { img, name, price, quantity , supliername, description} = signleItem;

    return (
        <div className='col-lg-4 '>
            <div className="item-box " >
                <img src={img} className="img-fluid" alt="" />
                <div className="item-info px-2">
                    <h4>{name}</h4>
                    <h6>Price : ${price}</h6>
                    <h6>Quantity : <span className='quantity-style'>{quantity}</span></h6>
                    <h6>Suplier: By <span className='suplier'> {supliername}</span> </h6>
                    <p>{description}</p>
                    <button>Update Item <FontAwesomeIcon icon={faArrowAltCircleUp}/> </button>
                </div>
            </div>
        </div>
    );
};

export default InventoryItem;