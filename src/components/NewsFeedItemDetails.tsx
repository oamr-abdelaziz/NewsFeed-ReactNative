import { t } from 'i18next';
import React from 'react';
import { useTranslation } from 'react-i18next';
import {
  Image,
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { SingleItemProps } from './NewsFeedItem';

const NewsFeedItemDetails  :React.FC<SingleItemProps>= ({newsItem}) => {
  const {t} = useTranslation();
  const {
    title,
    description,
    urlToImage,
    content,
    url,
    author,
    publishedAt,
    source,
    id
  } = newsItem;
  return (
    <View style={styles.container}>
      {!!title&&<Text style={styles.title}>{title}</Text>}
      {!!description&&<Text style={styles.description}>{description}</Text>}
      {!!urlToImage && <Image style={styles.img} source={{uri: urlToImage}} />}
      {!!content&&<Text style={styles.content}>
        {content.substring(content.lastIndexOf('[+'), -1)}
      </Text>}
      {url&&
      <View style={{marginVertical:5}}>
        <Text style={styles.url} >{t('url')}</Text>
        <TouchableOpacity onPress={() => {
            Linking.openURL(url);
          }}><Text 
          style={StyleSheet.flatten([styles.url, {color: 'blue'}])} >{url}</Text></TouchableOpacity></View>}
      <View style={styles.authDate}>
        {!!author&&
        <View style={styles.authDateSingleView}>
          <Text style={styles.author} >{t('author')}</Text>
          <Text style={StyleSheet.flatten([styles.author,styles.marginZero])} >{author}</Text>
        </View>}
        {!!publishedAt&&<View >
        <Text style={styles.publishedAt} >{t('publish')}</Text>
        <Text style={StyleSheet.flatten([styles.publishedAt,styles.marginZero])} >{publishedAt}</Text>
        </View>}
      </View>
      {!!source&&<Text style={styles.src} >{source.name}</Text>}
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
