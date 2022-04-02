/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, { useContext } from 'react';

import ThemeButton from './src/components/ThemeButton';
import Navigation from './src/navigation';
import ThemeProvider from './src/theming/themeProvider';
const App = () => {
  
  return (
    <ThemeProvider>
      <Navigation/>
      <ThemeButton/>
    </ThemeProvider>
  );
};

export default App;
