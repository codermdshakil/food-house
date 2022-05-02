import React from 'react';
import useStoredProducts from '../../hooks/useStoredProducts';
import InventoryItem from '../../Pages/InventoryItem/InventoryItem'
import './InventoryItems.css';


const InventoryItems = () => {

    const [products] = useStoredProducts()
    const sixInventoryItem = products.slice(0, 6);
    console.log(sixInventoryItem);
    return (
        <div className="container">
            <div className='py-3'>
                <p className='feature-title'>Featured Product</p>
                <h4 className='products-title' >Popular Products</h4>
            </div>
            <div className="row">
                {
                    sixInventoryItem.map(signleItem => <InventoryItem key={signleItem._id} signleItem={signleItem}></InventoryItem>)
                }
            </div>
        </div>
    );
};

export default InventoryItems;