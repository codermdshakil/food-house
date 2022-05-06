import React, { useEffect, useState } from 'react';
import LatestNew from './LatestNew/LatestNew';

const LatestNews = () => {

    const [allNews, setAllNews] = useState([]);
    console.log(allNews)

    useEffect( () => {
        fetch('https://calm-waters-38040.herokuapp.com/news')
        .then(res => res.json())
        .then(data => setAllNews(data))
    }, [])



    return (
        <div className='news-wrapper'>
            <div className="container">
                <div className='py-3'>
                    <p className='feature-title mt-5'>Popular News</p>
                    <h4 className='products-title' >Latest News & Blog</h4>
                </div>
                <div className="row">
                    {
                        allNews.map(news => <LatestNew key={news._id} news={news}></LatestNew>)
                    }
                </div>
            </div>
        </div>
    );
};

export default LatestNews;