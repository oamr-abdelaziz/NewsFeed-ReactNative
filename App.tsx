/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ThemeButton from './src/components/ThemeButton';
import Navigation from './src/navigation';
import ThemeProvider from './src/theming/themeProvider';
import { changeLanguage } from './src/utils/changeLanguage';

const App = () => {
  const {t,i18n} = useTranslation();
  
  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('lang')
      if(value !== null) {
        changeLanguage(value);
        // value previously stored
      }
    } catch(e) {
      console.log(e);
      // error reading value
    }
  }
  useEffect(()=>{
    getData();
    return()=>{}
  },[])

  return (
    <ThemeProvider>
      <Navigation/>
      <ThemeButton/>
    </ThemeProvider>
  );
};

export default App;
