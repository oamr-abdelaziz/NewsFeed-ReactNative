import React, { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import MultipleNews from '../components/MultipleNews';
import useGetData from '../hooks/useGetData';

const NewsFeed=({})=>{
    
    const {data,loading,error}=useGetData('top-headlines');
    useEffect(()=>{
        console.log(data);
        
    },[data])
    
    // const showNewsFeed=()=>{
    //     return 
    // }

    return(
        <View>
            {data&&<MultipleNews news={data}/>}    
        </View>
    )
}

const styles = StyleSheet.create({
    
})
export default NewsFeed