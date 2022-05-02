import React , { useState, useEffect} from 'react';

const useStoredProducts = () => {

    const [products, setProducts] = useState([]);

    useEffect( () => {
        fetch('http://localhost:5000/products')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])

    return [products, setProducts];
};

export default useStoredProducts;