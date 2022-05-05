import React from 'react';
import Banner from '../Banner/Banner';
import usePageTitle from '../../hooks/usePageTitle';
import InventoryItems from '../InventoryItems/InventoryItems';
import LatestNews from '../LatestNews/LatestNews';
import Testimonial from '../Testimonial/Testimonial';



const Home = () => {
    return (
        <div>
            {
                usePageTitle('Home')
            }
            <Banner></Banner>
            <InventoryItems></InventoryItems>
            <LatestNews></LatestNews>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;