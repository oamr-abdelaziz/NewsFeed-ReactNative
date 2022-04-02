import React from 'react';
import {
  Image,
  Linking,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import SpText from './SpText';

const NewsFeedItemDetails = ({newsItem}) => {
  const {
    title,
    description,
    urlToImage,
    content,
    url,
    author,
    publishedAt,
    source,
  } = newsItem;
  return (
    <View style={styles.container}>
      {!!title&&<SpText style={styles.title}>{title}</SpText>}
      {!!description&&<SpText style={styles.description}>{description}</SpText>}
      {!!urlToImage && <Image style={styles.img} source={{uri: urlToImage}} />}
      {!!content&&<SpText style={styles.content}>
        {content.substring(content.lastIndexOf('[+'), -1)}
      </SpText>}
      {url&&
      <View style={{marginVertical:5}}>
        <SpText style={styles.url}>For the full article:-</SpText>
        <TouchableOpacity onPress={() => {
            Linking.openURL(url);
          }}><SpText 
          style={StyleSheet.flatten([styles.url, {color: 'blue'}])}>{url}</SpText></TouchableOpacity></View>}
      <View style={styles.authDate}>
        {!!author&&
        <View style={styles.authDateSingleView}>
          <SpText style={styles.author}>author:</SpText>
          <SpText style={StyleSheet.flatten([styles.author,styles.marginZero])}>{author}</SpText>
        </View>}
        {!!publishedAt&&<View >
        <SpText style={styles.publishedAt}>published at:</SpText>
        <SpText style={StyleSheet.flatten([styles.publishedAt,styles.marginZero])}>{publishedAt}</SpText>
        </View>}
      </View>
      {!!source&&<SpText style={styles.src}>{source.name}</SpText>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  title: {
    fontSize: 18,
    fontWeight: '700',
  },
  img: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    resizeMode: 'cover',
  },
  description: {
    fontSize: 16,
  },
  content: {
    fontSize: 14,
  },
  author: {
    fontSize: 10,
  },
  publishedAt: {
    fontSize: 10,
  },
  src: {
    marginVertical: 15,
    fontSize: 10,
    alignSelf:'center',
    fontWeight:'800'
  },
  url: {
    fontSize: 12,
    marginVertical:0
  },
  authDate:{
    flexDirection:'row',
    justifyContent:'space-between'
  },
  marginZero:{
    marginVertical:0
  },
  authDateSingleView:{
    width:'50%'
  }
});
export default NewsFeedItemDetails;
