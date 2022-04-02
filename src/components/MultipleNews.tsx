import React, { useCallback, useEffect, useState } from 'react';
import {ActivityIndicator, FlatList, RefreshControl, ScrollView} from 'react-native';
import NewsFeedItem from './NewsFeedItem';

const MultipleNews = ({news,refreshControl}) => {
    const renderItem = ({ item }) => (
        <NewsFeedItem newsItem={item}/>
      );
  return (
    <>
    <FlatList
      data={news}
      renderItem={renderItem}
      keyExtractor={item => item.id}
      refreshControl={refreshControl}
      />
    </>
  );
};

export default MultipleNews;
