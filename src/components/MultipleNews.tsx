import React from 'react';
import {ScrollView} from 'react-native';
import NewsFeedItem from './NewsFeedItem';

const MultipleNews = ({news}) => {

  const renderNews = () => {
    return news.map((item, idx) => {
      return <NewsFeedItem key={idx} newsItem={item} />;
    });
  };
  return (
    <>
      <ScrollView>{renderNews()}</ScrollView>
    </>
  );
};

export default MultipleNews;
