import React from 'react';
import useStoredProducts from '../../hooks/useStoredProducts';
import ManageInventoryItem from '../ManageInventoryItem/ManageInventoryItem';

const ManageInventoryItems = () => {

    const [products] = useStoredProducts();
    console.log(products);


    return (
        <div className='mt-5 py-5'>
            <div className="container">
                <h4 className='text-center py-3 mb-4'>Manage Inventory Item's <span className='text-danger'>({products.length})</span></h4>
                <div className="row">
                    {
                        products.map(items => <ManageInventoryItem key={items._id} products={items} />)
                    }
                </div>
            </div>
        </div>
    );
};

export default ManageInventoryItems;