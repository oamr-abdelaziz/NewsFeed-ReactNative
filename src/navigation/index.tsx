import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, { useContext } from 'react';
import { StyleSheet } from 'react-native';
// import ThemeButton from '../components/ThemeButton';
import DetailedNewFeed from '../screens/DetailedNewFeed';
import NewsFeed from '../screens/NewsFeed';
import { ThemeContext } from '../theming/themeContext';

const Navigation = () => {
  const {theme}= useContext(ThemeContext)
  const MainStack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <MainStack.Navigator screenOptions={{
        contentStyle:{paddingHorizontal:15,backgroundColor:theme.background}
        ,headerStyle:{backgroundColor:theme.headerBackground},
        headerTitleAlign:'center',
        headerTintColor:theme.headerForeground,
        // headerRight:()=><></>
      
      }
        
      }>
        <MainStack.Screen
          name="NewsFeed"
          component={NewsFeed}
          options={{title: 'NewsFeed'}}
        />
        <MainStack.Screen
          name="DetailedNewFeed"
          component={DetailedNewFeed}
          options={{title: 'Detailed NewFeed'}}
        />
      </MainStack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
    
})

export default Navigation;
