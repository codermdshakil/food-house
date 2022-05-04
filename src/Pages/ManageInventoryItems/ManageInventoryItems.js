import React from 'react';
import useStoredProducts from '../../hooks/useStoredProducts';
import ManageInventoryItem from '../ManageInventoryItem/ManageInventoryItem';

const ManageInventoryItems = () => {

    const [products, setProducts] = useStoredProducts();

    const handleProductDelete = id => {
        const url = `http://localhost:5000/items/${id}`;
        fetch(url, {
            method: "DELETE",
        })
            .then(res => res.json())
            .then(data => {
                const confirmation = window.confirm('Are you sure to delete this item?');
                if (confirmation) {
                    const newProducts = products.filter(item => item._id !== id);
                    setProducts(newProducts)
                }

            })
    }

    return (
        <div className='mt-5 py-5'>
            <div className="container">
                <h4 className='text-center py-3 mb-4'>Manage Inventory Item's <span className='text-danger'>({products.length})</span></h4>
                <div className="row">
                    {
                        products.map(items => <ManageInventoryItem key={items._id} handleProductDelete={handleProductDelete} products={items} />)
                    }
                </div>
            </div>
        </div>
    );
};

export default ManageInventoryItems;