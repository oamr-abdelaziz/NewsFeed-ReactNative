import {createContext} from 'react';
import {themes} from './themes';

export const ThemeContext = createContext({
  theme: themes.dark,
  toggleTheme: (): void => {},
});
