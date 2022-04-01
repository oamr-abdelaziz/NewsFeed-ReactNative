import React from 'react';
import {
  Image,
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

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
      {!!title&&<Text style={styles.title}>{title}</Text>}
      {!!description&&<Text style={styles.description}>{description}</Text>}
      {!!urlToImage && <Image style={styles.img} source={{uri: urlToImage}} />}
      {!!content&&<Text style={styles.content}>
        {content.substring(content.lastIndexOf('[+'), -1)}
      </Text>}
      {url&&<Text style={styles.url}>For the full article:-<Text onPress={() => {
            Linking.openURL(url);
          }}
          style={StyleSheet.flatten([styles.url, {color: 'blue'}])}>{url}</Text>
      </Text>}
      <View style={styles.authDate}>
        {!!author&&
        <View style={styles.authDateSingleView}>
          <Text style={styles.author}>author:</Text>
          <Text style={StyleSheet.flatten([styles.author,styles.marginZero])}>{author}</Text>
        </View>}
        {!!publishedAt&&<View >
        <Text style={styles.publishedAt}>published at:</Text>
        <Text style={StyleSheet.flatten([styles.publishedAt,styles.marginZero])}>{publishedAt}</Text>
        </View>}
      </View>
      {!!source&&<Text style={styles.src}>{source.name}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  title: {
    color: 'black',
    fontFamily: 'georgia',
    fontSize: 18,
    fontWeight: '700',
    marginVertical: 5,
  },
  img: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    resizeMode: 'cover',
  },
  description: {
    color: 'black',
    fontFamily: 'georgia',
    fontSize: 16,
    marginVertical: 5,
  },
  content: {
    color: 'black',
    fontFamily: 'georgia',
    marginVertical: 5,
    fontSize: 14,
  },
  author: {
    color: 'black',
    fontFamily: 'georgia',
    marginVertical: 5,
    fontSize: 10,
  },
  src: {
    color: 'black',
    fontFamily: 'georgia',
    marginVertical: 15,
    fontSize: 10,
    alignSelf:'center',
    fontWeight:'800'
  },
  publishedAt: {
    color: 'black',
    fontFamily: 'georgia',
    marginVertical: 5,
    fontSize: 10,
  },
  url: {
    color: 'black',
    fontFamily: 'georgia',
    marginVertical: 5,
    fontSize: 12,
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
