import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {useTranslation} from 'react-i18next';
import {Image, StyleSheet, Text} from 'react-native';
// import ThemeButton from '../components/ThemeButton';
// import Ionicons from 'react-native-vector-icons/Ionicons';
import {ThemeContext} from '../theming/themeContext';
import HomeStackScreen from './HomeStack';
import SettingsStack from './SettingsStack';
import images from "../assets/images"
import { t } from 'i18next';
const Navigation = () => {
  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          headerShown:false,
          tabBarIcon: ({focused, color, size}) => {
            let iconName;

            if (route.name === t('Home')) {
              iconName = focused
                ? 'ios-information-circle'
                : 'ios-information-circle-outline';
            } else if (route.name === 'Settings') {
              iconName = focused ? 'ios-list-box' : 'ios-list';
            }
            let icon;
            if(route.name==t('Home')){
              icon='Home'
            }
            else{
              icon='Settings'
            }
            // You can return any component that you like here!
            return <Image style={{width:size,height:size}} source={images[icon]} 
            // color={color}
            />
            
            // <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}
        >
        <Tab.Screen name={t("Home")} component={HomeStackScreen} />
        <Tab.Screen name={t("Settings")} component={SettingsStack} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({});

export default Navigation;
