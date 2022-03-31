import React, { useEffect } from 'react';
import { StyleSheet } from 'react-native';
import useGetData from '../hooks/useGetData';

const NewsFeed=()=>{

    const {data,loading,error}=useGetData('top-headlines');

    return(
        <></>
    )
}

const styles = StyleSheet.create({
    
})
export default NewsFeed