import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import './inventory.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane, faArrowRight} from '@fortawesome/free-solid-svg-icons';
import usePageTitle from '../../hooks/usePageTitle';
import { toast } from 'react-toastify';


const Inventory = () => {

    const { inventoryId } = useParams();
    const [singleProduct, setSinleProduct] = useState({});
    const { _id, img, name, price, quantity, sold, supliername, description } = singleProduct;


    // tostify time control
    const resolveAfter3Sec = new Promise(resolve => setTimeout(resolve));

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
        toast.promise(
            resolveAfter3Sec,
            {
                success: `New ${userInput} product stored`,
            }
        )
    }

    return (
        <div className='mt-5 py-5'>
            {
                usePageTitle('Stock Item')
            }
            <div className="container ">
                <div className="row d-flex align-items-center singleWrapper">
                    <div className="col-lg-5 col-md-8 col-10 d-block m-auto">
                        <article className="singleProduct mb-5" data-aos="fade-right" >
                            <div className='singleProduct-frame'>
                                <img src={img} alt="" />
                            </div>
                            <div className="product-info">
                                <h6>Id: <span className='id-style'> {_id}</span></h6>
                                <h4>{name}</h4>
                                <h5>Price: ${price}</h5>
                                <h6>Quantity: <span className='text-danger quantity'>{quantity}</span> </h6>
                                <h6>Sold: {sold}</h6>
                                <h6>Suplier: By <span className='text-info'>{supliername}</span></h6>
                                <p>{description}</p>
                            </div>
                            <div className='singleP-Btn'>
                                <button onClick={() => handleDelivery(quantity)} > Deliverd  <FontAwesomeIcon icon={faPaperPlane} /> </button>
                            </div>
                        </article>
                        <div className='all-inventory'>
                            <p><Link className='text-white' to="/manageinventoryitems">Manage Inventories <FontAwesomeIcon icon={faArrowRight} /> </Link> </p>
                        </div>
                    </div>
                    <div className='col-lg-1 col-md-0  restored'></div>
                    <div className="col-lg-6 col-md-8 d-block col-11 m-auto">
                        <div className='store-item-box' data-aos="fade-down" >
                            <h3 style={{color:'#82cd00'}}>Restored Item</h3>
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