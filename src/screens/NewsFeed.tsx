import React, {useCallback, useEffect, useState} from 'react';
import { useTranslation } from 'react-i18next';
import {
  ActivityIndicator,
  RefreshControl,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import MultipleNews from '../components/MultipleNews';
import SearchBar from '../components/SearchBar';
import useGetData from '../hooks/useGetData';

const NewsFeed = ({}) => {
  const {i18n} = useTranslation();
  const {data, loading, error, refresh} = useGetData('top-headlines',i18n.language);
  const [filteredNews, setFilteredNews] = useState(data);
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    refresh();
    setTimeout(() => {
      setRefreshing(false);
    }, 50);
  }, []);

  useEffect(() => {
    if (typeof(data) == 'object'&&data!=null) {
      setFilteredNews(
        data.map((item, idx) => {
            return Object.assign(item,{id:idx})
        }),
      );
      
    } else {
      setFilteredNews(data);
    }
  }, [data]);

  return (
    <View style={{height: '100%'}}>
      {!!filteredNews && (
        <SearchBar items={data} setFilteredItems={setFilteredNews} />
      )}
      {!!loading && <ActivityIndicator color="black" size={20} />}
      {!!error && <Text>{error}</Text>}
      {!!filteredNews && (
        <MultipleNews
          news={filteredNews}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({});
export default NewsFeed;
