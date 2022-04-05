import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator, useBottomTabBarHeight} from '@react-navigation/bottom-tabs';
import React, { useContext } from 'react';
import {useTranslation} from 'react-i18next';
import {Image, StyleSheet, Text, View} from 'react-native';
// import ThemeButton from '../components/ThemeButton';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {ThemeContext} from '../theming/themeContext';
import HomeStackScreen from './HomeStack';
import SettingsStack from './SettingsStack';
import images from '../assets/images';
import ThemeButton from '../components/ThemeButton';

const Navigation: React.FC = () => {
  //adb shell am start -W -a android.intent.action.VIEW -d "newsfeed://set" com.newsfeed
  //adb shell am start -W -a android.intent.action.VIEW -d "newsfeed://news" com.newsfeed
  const {t}=useTranslation();
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
          // headerTitle:()=><></>,
          // headerRight:()=><ThemeButton/>,
          // headerLeft:()=><></>,
          // headerShown: false,
          // headerTransparent:true,
          // headerTitleAlign:"center",
          headerShown:false,
          headerRightContainerStyle:{paddingRight:15},
          headerLeftContainerStyle:{top:100},
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
              iconName="home"
            } else {
              icon = 'Settings';
              iconName="settings"
            }
            
            return (
              // <Image
              //   style={{width: size, height: size}}
              //   source={images[icon]}
              //   // color={color}
              // />
              <Ionicons name={iconName} size={size} color={color} />
            );

          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
          tabBarLabel: route.title,
          // tabBarBackground:()=><Text style={{backgroundColor:theme.headerBackground,paddingBottom:useBottomTabBarHeight()}}></Text>
          tabBarActiveBackgroundColor:theme.headerBackground,
          tabBarInactiveBackgroundColor:theme.headerBackground,
          // headerBackgroundContainerStyle:theme.headerBackground
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

const styles = StyleSheet.create({});

export default Navigation;
