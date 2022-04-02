import React from 'react';
import NewsFeedItemDetails from '../components/NewsFeedItemDetails';

const DetailedNewFeed=({route})=>{
    return(
        <>
            <NewsFeedItemDetails newsItem={route.params.newsItem}/>
        </>
    )
}


export default DetailedNewFeed