import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './inventory.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';


const Inventory = () => {

    const { inventoryId } = useParams();
    const [singleProduct, setSinleProduct] = useState({});
    // console.log(singleProduct)
    const { _id, img, name, price, quantity, sold, supliername, description } = singleProduct;

    useEffect(() => {
        const url = `http://localhost:5000/products/${inventoryId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setSinleProduct(data))
    }, [])

    const handleDelivery = quantity => {
        const result = quantity - 1;
        const update = { result };
        const url = `http://localhost:5000/products/${inventoryId}`;
        fetch(url, {
            method: "PUT",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(update)
        })
            .then(res => res.json())
            .then(data => {
                const id = inventoryId;
                const url = `http://localhost:5000/products/${id}`;
                fetch(url)
                .then(res => res.json())
                .then(data => setSinleProduct(data))

            })


    }

    return (
        <div className='mt-5 py-5'>
            <div className="container ">
                <div className="row singleWrapper">
                    <div className="col-lg-5">
                        <article className="singleProduct">
                            <div className='singleProduct-frame'>
                                <img src={img} alt="" />
                            </div>
                            <div className="product-info">
                                <h4>{name}</h4>
                                <h5>Price: ${price}</h5>
                                <h6>Quantity: <span className='text-danger quantity'>{quantity}</span> </h6>
                                <h6>Sold: ${sold}</h6>
                                <h6>Id: {_id}</h6>
                                <h6>Suplier: By <span className='text-info'>{supliername}</span></h6>
                                <p>{description}</p>
                            </div>
                            <div className='singleP-Btn'>
                                <button onClick={() => handleDelivery(quantity)} > Deliverd  <FontAwesomeIcon icon={faPaperPlane} /> </button>
                            </div>
                        </article>
                    </div>
                    <div className="col-lg-7">
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto praesentium suscipit unde! Commodi facere vero doloribus et, hic quod fugiat!</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Inventory;