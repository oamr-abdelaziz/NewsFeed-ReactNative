import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const NewsFeedItem = ({newsItem}) => {
  const navigation = useNavigation();

  return (
    <View
      style={StyleSheet.flatten([
        styles.newsFeedItemView,
        {borderColor: 'black'},
      ])}>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('DetailedNewFeed', {newsItem: newsItem})
        }>
        <Text style={StyleSheet.flatten([styles.header,{color:'black'}])}>{newsItem.title}</Text>
      </TouchableOpacity>
      {newsItem.urlToImage && (
        // <View style={{width:'100%',height:200}}>

        <Image style={styles.img} source={{uri: newsItem.urlToImage}} />
        // </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  newsFeedItemView: {
    borderRadius: 10,
    borderWidth: 1,
    marginVertical: 5,
    padding: 5,
  },
  img: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    resizeMode: 'cover',
  },
  header:{
    fontSize:16,
    fontWeight:'500',
    margin:3,
    fontFamily:'georgia'
  }
});
export default NewsFeedItem;
