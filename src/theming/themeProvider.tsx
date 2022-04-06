import React, {useEffect, useState} from 'react';
import {themes} from './themes';
import {ThemeContext} from './themeContext';
import {useAsyncStorage} from '@react-native-async-storage/async-storage';

const ThemeProvider = ({children}: any) => {
  const [theme, setTheme] = useState(themes.dark);
  const [isAppInitialized, setIsAppInitialized] = useState(true);
  const {getItem, setItem} = useAsyncStorage('theme');

  const getThemeFromStorage = async (): Promise<void> => {
    const item = await getItem();
    if (item != null) setTheme(item == 'light' ? themes.light : themes.dark);
  };

  const writeThemeToStorage = async (newTheme: string): Promise<void> => {
    await setItem(newTheme);
  };
  useEffect(() => {
    if (isAppInitialized) {
      getThemeFromStorage();
      setIsAppInitialized(false);
    } else {
      writeThemeToStorage(theme == themes.dark ? 'dark' : 'light');
    }
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
