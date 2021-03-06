import React from 'react';
import './InventoryItem.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleUp } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';


const InventoryItem = ({ signleItem }) => {
    const { _id, img, name, price, quantity, supliername, description } = signleItem;
    const navigate = useNavigate();

    const handleInventoryUpdate = (id) => {
        navigate(`/inventory/${id}`)
    }

    return (
        <div className='col-lg-4 col-md-6 col-10 d-block m-auto m-md-0'>
            <article className="item-box" data-aos="fade-up">
                <div className='item-frames'>
                    <img src={img} className="img-fluid" alt="" />
                </div>
                <div className="item-info mt-3 px-2">
                    <h4>{name}</h4>
                    <h6>Price : ${price}</h6>
                    <h6>Quantity : <span className='quantity-style'>{quantity}</span></h6>
                    <h6 className='d-flex suplier-name'> Suplier: <span className='text-muted ms-1'> By </span> <span className='suplier ms-1'> {supliername}</span> </h6>
                    <p>{description}</p>
                    <button onClick={() => handleInventoryUpdate(_id)} > Stock Update <FontAwesomeIcon icon={faArrowAltCircleUp} /> </button>
                </div>
            </article>
        </div>
    );
};

export default InventoryItem;