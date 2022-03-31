import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';

const NewsFeedItem = ({newsItem}) => {
    const navigation = useNavigation();
    console.log('navigation',navigation);

  return (
    <View>
      <TouchableOpacity onPress={()=>navigation.navigate('DetailedNewFeed')}>
        <Text>{newsItem.title}</Text>
      </TouchableOpacity>
      {newsItem.urlToImage && (
        <Image
          style={{width: 100, height: 100}}
          source={{uri: newsItem.urlToImage}}
        />
      )}
    </View>
  );
};
export default NewsFeedItem;
