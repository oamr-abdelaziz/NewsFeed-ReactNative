import React, {useCallback, useEffect, useState} from 'react';
import {useTranslation} from 'react-i18next';
import {
  ActivityIndicator,
  Linking,
  RefreshControl,
  Text,
  View,
} from 'react-native';
import MultipleNews from '../components/NewsFeed/MultipleNews';
import SearchBar from '../components/SearchBar';
import useGetData from '../hooks/useGetData';
import {changeLanguage} from '../utils/functions';

type Props = {
  navigation: {
    setParams: ({refresh}: {refresh: boolean}) => void;
  };
};
const NewsFeed: React.FC<Props> = ({navigation}) => {
  const {i18n} = useTranslation();
  const {data, loading, error, refresh} = useGetData(
    'top-headlines',
    i18n.language,
  );

  const [filteredNews, setFilteredNews] = useState(data);
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    const fun = ({url}: {url: string}) => {
      const lng = url.replace('newsfeed://news', '');
      if (lng == '/fr' || lng == '/en' || lng == '/ar') {
        changeLanguage(lng.replace('/', ''));
      }
    };
    Linking.addEventListener('url', fun);

    ////check this if needed
    // Linking.getInitialURL().then((url) => {
    //   console.log(`url`, url);
    // });
    // if(lng){
    //   changeLanguage(route.params.lng);
    // }
  }, []);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    refresh();
    setTimeout(() => {
      setRefreshing(false);
    }, 50);
  }, [i18n.language]);

  useEffect(() => {
    //// revise the following line
    if (typeof data == 'object' && data != null) {
      setFilteredNews(
        data.map((item, idx) => {
          return Object.assign(item, {id: idx});
        }),
      );
    } else {
      setFilteredNews(data);
    }
  }, [data]);

  useEffect(() => {
    navigation.setParams({refresh: true});
  }, [i18n.language]);

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

export default NewsFeed;
