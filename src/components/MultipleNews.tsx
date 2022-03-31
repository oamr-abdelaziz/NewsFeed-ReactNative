import React, { useCallback, useEffect, useState } from 'react';
import {ActivityIndicator, RefreshControl, ScrollView} from 'react-native';
import NewsFeedItem from './NewsFeedItem';
import SearchBar from './SearchBar';

const MultipleNews = ({news,refreshControl}) => {

  const renderNews = () => {
    return news.map((item, idx) => {
      return <NewsFeedItem key={idx} newsItem={item}/>;
    });
  };
  return (
    <>
      <ScrollView
       refreshControl={refreshControl}
          >{renderNews()}</ScrollView>
    </>
  );
};

export default MultipleNews;
