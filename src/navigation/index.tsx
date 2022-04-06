import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React, {useContext} from 'react';
import {useTranslation} from 'react-i18next';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {ThemeContext} from '../theming/themeContext';
import HomeStackScreen from './HomeStack';
import SettingsStack from './SettingsStack';

const Navigation: React.FC = () => {
  ////to run deep linking
  //adb shell am start -W -a android.intent.action.VIEW -d "newsfeed://set" com.newsfeed
  //adb shell am start -W -a android.intent.action.VIEW -d "newsfeed://news" com.newsfeed
  //adb shell am start -W -a android.intent.action.VIEW -d "newsfeed://news/en" com.newsfeed
  //adb shell am start -W -a android.intent.action.VIEW -d "newsfeed://news/fr" com.newsfeed
  //adb shell am start -W -a android.intent.action.VIEW -d "newsfeed://news/ar" com.newsfeed

  const {t} = useTranslation();
  const {theme} = useContext(ThemeContext);
  const Tab = createBottomTabNavigator();
  const linking = {
    prefixes: ['newsfeed://'],
    config: {
      screens: {
        Home: {
          path: 'news/:lng?',
        },

        Settings: 'set',
      },
    },
  };

  return (
    <NavigationContainer linking={linking}>
      <Tab.Navigator
        screenOptions={({route}: any) => ({
          headerShown: false,
          headerRightContainerStyle: {paddingRight: 15},
          headerLeftContainerStyle: {top: 100},
          tabBarIcon: ({focused, color, size}) => {
            let iconName;
            if (route.name === 'Home') {
              iconName = focused
                ? 'ios-information-circle'
                : 'ios-information-circle-outline';
            } else if (route.name === 'Settings') {
              iconName = focused ? 'ios-list-box' : 'ios-list';
            }
            let icon;
            if (route.name == 'Home') {
              icon = 'Home';
              iconName = 'home';
            } else {
              icon = 'Settings';
              iconName = 'settings';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
          tabBarLabel: route.title,
          tabBarActiveBackgroundColor: theme.headerBackground,
          tabBarInactiveBackgroundColor: theme.headerBackground,
        })}>
        <Tab.Screen
          name="Home"
          options={{title: t('Home')}}
          component={HomeStackScreen}
        />
        <Tab.Screen
          name="Settings"
          options={{title: t('Settings')}}
          component={SettingsStack}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
