import React from 'react';
import useStoredProducts from '../../hooks/useStoredProducts';
import ManageInventoryItem from '../ManageInventoryItem/ManageInventoryItem';
import usePageTitle from '../../hooks/usePageTitle';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const ManageInventoryItems = () => {

    const [products, setProducts] = useStoredProducts();

    const handleProductDelete = id => {
        const confirmationMessage = window.confirm('Are you sure to delete this item?');
        if (confirmationMessage) {
            const url = `http://localhost:5000/items/${id}`;
            fetch(url, {
                method: "DELETE",
            })
                .then(res => res.json())
                .then(data => {
                    const newProducts = products.filter(item => item._id !== id);
                    setProducts(newProducts)
                })
        }

    }

    return (
        <div className='mt-5 py-5'>
            {
                usePageTitle('Manage Item')
            }
            <div className="container">
                <h4 className='text-center py-3 mb-4'>Manage Inventory Item's <span className='text-danger'>({products.length})</span></h4>

                <div>
                    <div className='all-inventory'>
                        <p><Link className='text-white' to="/additem"> Add New Item <FontAwesomeIcon icon={faArrowRight} /> </Link> </p>
                    </div>
                </div>

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