import {useNavigation} from '@react-navigation/native';
import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import { ThemeContext } from '../theming/themeContext';

const NewsFeedItem = ({newsItem}) => {
  const {theme} = useContext(ThemeContext);
  const navigation = useNavigation();
  const {t,i18n} = useTranslation();

  return (
    <View
      style={StyleSheet.flatten([
        styles.newsFeedItemView,
        {borderColor:theme.border},
      ])}>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('DetailedNewFeed', {newsItem: newsItem})
        }>
        <Text style={StyleSheet.flatten([styles.header,{color:theme.foreground}])}>{t(`News-${newsItem.id}-title`,newsItem.title)}</Text>
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
