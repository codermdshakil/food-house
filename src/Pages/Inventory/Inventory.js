import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './inventory.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import usePageTitle from '../../hooks/usePageTitle';


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


    // handleItemQuantityNumber 
    const handleItemQuantityNumber = e => {
        e.preventDefault()
        const userInput = parseInt(e.target.storeQuantity.value);
        const inputValue = singleProduct.quantity + userInput;
        console.log(inputValue)
        const reStored = { inputValue };
        const url = `http://localhost:5000/product/${inventoryId}`;
        fetch(url, {
            method: "PUT",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(reStored)
        })
            .then(res => res.json())
            .then(data => {
                const id = inventoryId;
                const url = `http://localhost:5000/products/${id}`;
                fetch(url)
                    .then(res => res.json())
                    .then(data => setSinleProduct(data))
            })

        e.target.reset();
    }



    return (
        <div className='mt-5 py-5'>
            {
                usePageTitle('Stock Item')
            }
            <div className="container ">
                <div className="row d-flex align-items-center singleWrapper">
                    <div className="col-lg-5 col-md-8 d-block m-auto">
                        <article className="singleProduct">
                            <div className='singleProduct-frame'>
                                <img src={img} alt="" />
                            </div>
                            <div className="product-info">
                                <h6>Id: <span className='id-style'> {_id}</span></h6>
                                <h4>{name}</h4>
                                <h5>Price: ${price}</h5>
                                <h6>Quantity: <span className='text-danger quantity'>{quantity}</span> </h6>
                                <h6>Sold: ${sold}</h6>
                                <h6>Suplier: By <span className='text-info'>{supliername}</span></h6>
                                <p>{description}</p>
                            </div>
                            <div className='singleP-Btn'>
                                <button onClick={() => handleDelivery(quantity)} > Deliverd  <FontAwesomeIcon icon={faPaperPlane} /> </button>
                            </div>
                        </article>
                    </div>
                    <div className='col-lg-1 restored'></div>
                    <div className="col-lg-6 col-md-6 ">
                        <div className='store-item-box'>
                            <h3>Restored Item</h3>
                            <form onSubmit={handleItemQuantityNumber}>
                                <input type="number" name='storeQuantity' placeholder='Enter quantity number' required /> <br />
                                <button>ReStored Product</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Inventory;