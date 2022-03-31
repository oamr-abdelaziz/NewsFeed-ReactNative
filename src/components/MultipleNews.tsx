import React, { useState } from 'react';
import {ScrollView} from 'react-native';
import NewsFeedItem from './NewsFeedItem';
import SearchBar from './SearchBar';

const MultipleNews = ({news}) => {
    const [filtredNews,setFilteredNews] = useState(news);


  const renderNews = () => {
    return filtredNews.map((item, idx) => {
      return <NewsFeedItem key={idx} newsItem={item} />;
    });
  };
  return (
    <>
        <SearchBar items={news}  setFilteredItems={setFilteredNews}/>
      <ScrollView>{renderNews()}</ScrollView>
    </>
  );
};

export default MultipleNews;
