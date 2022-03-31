import React from 'react';
import { StyleSheet } from 'react-native';
import NewsFeedItemDetails from '../components/NewsFeedItemDetails';

const DetailedNewFeed=({route})=>{
    return(
        <>
            <NewsFeedItemDetails newsItem={route.params.newsItem}/>
        </>
    )
}

const styles = StyleSheet.create({
    
})
export default DetailedNewFeed