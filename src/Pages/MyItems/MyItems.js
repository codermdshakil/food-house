import React from 'react';
import useStoredProducts from '../../hooks/useStoredProducts';
import MyItem from '../MyItem/MyItem';

const MyItems = () => {

    const [products, setProducts] = useStoredProducts()
    const myItems = products.filter(item => item.email);

    const handleMyitemDelete = id => {
        const confirmationMessage = window.confirm('Are you sure to delete this item?');
        if (confirmationMessage) {
            const url = `https://calm-waters-38040.herokuapp.com/items/${id}`;
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
        <div className='mt-5 pt-5'>
            <div className="container">
                <h3 className='text-center py-3 mb-3'>My Item's <span style={{ color: 'red' }}>({myItems.length})</span>  </h3>
                <div className="row">
                    {
                        myItems.map(item => <MyItem key={item._id} item={item} handleMyitemDelete={handleMyitemDelete}></MyItem>)
                    }
                </div>
            </div>
        </div>
    );
};

export default MyItems;