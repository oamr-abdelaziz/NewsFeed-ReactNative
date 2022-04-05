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
import ThemeButton from './src/components/ThemeButton';
import Navigation from './src/navigation';
import ThemeProvider from './src/theming/themeProvider';
import { getData } from './src/utils/changeLanguage';

const App = () => {
 
  useEffect(()=>{
    getData();
    return()=>{}
  },[])

  return (
    <ThemeProvider>
      <Navigation/>
      <ThemeButton 
      styles={{position:"absolute",bottom:10,alignSelf:"center"}}
      />
    </ThemeProvider>
  );
};

export default App;
