import React from 'react';
import Banner from '../Banner/Banner';
import usePageTitle from '../../hooks/usePageTitle';



const Home = () => {
    return (
        <div>
            {
                usePageTitle('Home')
            }
            <Banner></Banner>
        </div>
    );
};

export default Home;