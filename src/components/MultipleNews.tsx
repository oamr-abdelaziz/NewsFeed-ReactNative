import React, { ReactElement, useCallback, useEffect, useState } from 'react';
import {ActivityIndicator, FlatList, RefreshControl, ScrollView} from 'react-native';
import NewsFeedItem from './NewsFeedItem';
export type ItemProps={
  item:{
    title?:string,
    description?:string,
    urlToImage?:string,
    content?:string,
    url?:string,
    author?:string,
    publishedAt?:string,
    source?:{id?:any,name?:string},
    id?:any
  }
}
type Props={
  news:ItemProps['item'][],
  refreshControl:ReactElement
}
const MultipleNews :React.FC<Props> = ({news,refreshControl}) => {
    const renderItem = ({ item }:ItemProps) => (
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
