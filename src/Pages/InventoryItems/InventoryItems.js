import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import useStoredProducts from '../../hooks/useStoredProducts';
import InventoryItem from '../../Pages/InventoryItem/InventoryItem'
import './InventoryItems.css';


const InventoryItems = () => {

    const [products] = useStoredProducts()
    const sixInventoryItem = products.slice(0, 6);
    return (
        <div className="container" id="inventory-items">
            <div className='py-3'>
                <p className='feature-title mt-5'>Featured Product</p>
                <h4 className='products-title' >Popular Products</h4>
            </div>
            <div className="row">
                {
                    sixInventoryItem.map(signleItem => <InventoryItem key={signleItem._id} signleItem={signleItem}></InventoryItem>)
                }
            </div>
            <div className='all-inventory'>
                <button>Manage Inventories <FontAwesomeIcon icon={faArrowRight} /></button>
            </div>
        </div>
    );
};

export default InventoryItems;