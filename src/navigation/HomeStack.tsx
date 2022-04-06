import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useContext} from 'react';
import {useTranslation} from 'react-i18next';
import DetailedNewFeed from '../screens/DetailedNewFeed';
import NewsFeed from '../screens/NewsFeed';
import {ThemeContext} from '../theming/themeContext';
const HomeStackScreen: React.FC = () => {
  const {theme} = useContext(ThemeContext);
  const HomeStack = createNativeStackNavigator();
  const {t} = useTranslation();

  return (
    <HomeStack.Navigator
      screenOptions={{
        contentStyle: {
          paddingHorizontal: 15,
          backgroundColor: theme.background,
        },
        headerStyle: {backgroundColor: theme.headerBackground},
        headerTitleAlign: 'center',
        headerTintColor: theme.headerForeground,
      }}>
      <HomeStack.Screen
        name="NewsFeed"
        component={NewsFeed}
        options={{title: t('NewsFeed')}}
      />
      <HomeStack.Screen
        name="DetailedNewFeed"
        component={DetailedNewFeed}
        options={{title: t('Detailed NewFeed')}}
      />
    </HomeStack.Navigator>
  );
};
export default HomeStackScreen;
