import React from 'react';
import Banner from '../Banner/Banner';
import usePageTitle from '../../hooks/usePageTitle';
import InventoryItems from '../InventoryItems/InventoryItems';



const Home = () => {
    return (
        <div>
            {
                usePageTitle('Home')
            }
            <Banner></Banner>
            <InventoryItems></InventoryItems>
        </div>
    );
};

export default Home;