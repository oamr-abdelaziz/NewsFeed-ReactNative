import React, { useCallback, useEffect, useState } from 'react';
import {ActivityIndicator, FlatList, RefreshControl, ScrollView} from 'react-native';
import NewsFeedItem from './NewsFeedItem';
import SearchBar from './SearchBar';

const MultipleNews = ({news,refreshControl}) => {

    // 
    const renderItem = ({ item }) => (
        // <Item title={item.title} />
        <NewsFeedItem newsItem={item}/>
      );
//   const renderNews = () => {
//     return news.map((item, idx) => {
//       return <NewsFeedItem key={idx} newsItem={item}/>;
//     });
//   };
  return (
    <>
    <FlatList
      data={news}
      renderItem={renderItem}
      keyExtractor={item => item.id}
      refreshControl={refreshControl}
      />
      {/* <ScrollView
       refreshControl={refreshControl}
          >{renderNews()}</ScrollView> */}
    </>
  );
};

export default MultipleNews;
