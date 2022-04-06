import React, {useEffect, useState} from 'react';
import {themes} from './themes';
import {ThemeContext} from './themeContext';
import {getStoredTheme, storeTheme} from '../utils/functions';
import {useAsyncStorage} from '@react-native-async-storage/async-storage';

const ThemeProvider = ({children}: any) => {
  const [theme, setTheme] = useState(themes.dark);
  const [isAppInitialized, setIsAppInitialized] = useState(true);
  const {getItem, setItem} = useAsyncStorage('theme');

  const getThemeFromStorage = async () => {
    const item = await getItem();
    if(item!=null)
        setTheme(item=='light'?themes.light:themes.dark);
  };

  const writeThemeToStorage = async (newTheme:string) => {
    await setItem(newTheme);
  };
  useEffect(() => {
    if(isAppInitialized){
        getThemeFromStorage();
        setIsAppInitialized(false);
    }
    else{
        writeThemeToStorage(theme==themes.dark?'dark':'light')
    }

    // Object.values(currentStoredTheme).forEach((key)=>console.log(key))

    // if(currentStoredTheme!=null&&themes[currentStoredTheme]!=theme){
    //     storeTheme(theme==themes.light?'light':'dark')
    // //     toggleTheme();
    // }
    // console.log(theme);
  }, [theme]);
  const toggleTheme = (): void => {
    setTheme(PrevTheme =>
      PrevTheme == themes.light ? themes.dark : themes.light,
    );
  };

  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
