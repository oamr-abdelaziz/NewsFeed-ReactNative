import React from 'react';
import {Image, Text, View} from 'react-native';

const NewsFeedItemDetails = ({newsItem}) => {
//     author: null
// content: "GREENVILLE, S.C. —***LIVE COVERAGE FROM WYFF NEWS 4 ABOVE*** \r\nSummary: \r\nA student has been shot at Tanglewood Middle School in Greenville, South Carolina. Deputies said a suspect, who is a minor, i… [+3826 chars]"
// description: "A student has been shot at Tanglewood Middle School in Greenville, South Carolina."
// publishedAt: "2022-03-31T18:27:00Z"
// source: {id: null, name: 'WYFF4 Greenville'}
// title: "Student shot at Tanglewood Middle School in Greenville, South Carolina - WYFF4 Greenville"
// url: "https://www.wyff4.com/article/south-carolina-greenville-school-shooting/39600904"
// urlToImage:
  return (
    <View>
        <Text>author: {newsItem.author}</Text>
        <Text>content: {newsItem.content}</Text>
        <Text>description: {newsItem.description}</Text>
        <Text>published at: {newsItem.publishedAt}</Text>
        <Text>source name: {newsItem.source.name}</Text>
        <Text>title: {newsItem.title}</Text>
        <Text>Url: {newsItem.url}</Text>
      {newsItem.urlToImage && (
        <Image
          style={{width: 100, height: 100}}
          source={{uri: newsItem.urlToImage}}
        />
      )}
    </View>
  );
};
export default NewsFeedItemDetails;
