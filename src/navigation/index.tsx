import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import { StyleSheet } from 'react-native';
import DetailedNewFeed from '../screens/DetailedNewFeed';
import NewsFeed from '../screens/NewsFeed';

const Navigation = () => {
  const MainStack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <MainStack.Navigator>
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
