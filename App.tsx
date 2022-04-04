/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import { useTranslation } from 'react-i18next';
import { Text, TouchableHighlight } from 'react-native';

import ThemeButton from './src/components/ThemeButton';
import Navigation from './src/navigation';
import ThemeProvider from './src/theming/themeProvider';

const App = () => {
  const {t,i18n} = useTranslation();
  const toggleLang=()=>{
    const lang= i18n.language;
    i18n.changeLanguage(lang=='en'?'fr':'en')
    console.log(i18n.language);
  }

  return (
    <ThemeProvider>
      <TouchableHighlight style={{alignItems:'center',padding:5}} onPress={()=>toggleLang()}><Text>toggle lang</Text></TouchableHighlight>
      <Navigation/>
      <ThemeButton/>
    </ThemeProvider>
  );
};

export default App;
