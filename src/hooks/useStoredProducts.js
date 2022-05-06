import React , { useState, useEffect} from 'react';

const useStoredProducts = () => {

    const [products, setProducts] = useState([]);

    useEffect( () => {
        fetch('https://calm-waters-38040.herokuapp.com/products')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])

    return [products, setProducts];
};

export default useStoredProducts;