import React, {useCallback, useEffect, useState} from 'react';
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
  const {data, loading, error, refresh} = useGetData('top-headlines');
  const [filtredNews, setFilteredNews] = useState(data);
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    refresh();
    setTimeout(() => {
      setRefreshing(false);
    }, 50);
  }, []);

  useEffect(() => {
    setFilteredNews(data);
  }, [data]);

  return (
    <View>
      {!!filtredNews&&<SearchBar items={data}  setFilteredItems={setFilteredNews}/>}
      {!!loading && <ActivityIndicator color="black" size={20} />}
      {!!error && <Text>{error}</Text>}
      {!!filtredNews && (
        <MultipleNews
          news={filtredNews}
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
