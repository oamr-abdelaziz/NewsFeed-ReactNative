import React, {useContext} from 'react';
import {Switch, View} from 'react-native';
import {ThemeContext} from '../theming/themeContext';
import {themes} from '../theming/themes';

const ThemeButton: React.FC = () => {
  const {theme, toggleTheme} = useContext(ThemeContext);
  return (
    <View
      style={{
        backgroundColor: theme.headerBackground,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Switch
        trackColor={{false: '#767577', true: '#81b0ff'}}
        thumbColor={theme == themes.dark ? '#f5dd4b' : '#f4f3f4'}
        ios_backgroundColor="#3e3e3e"
        value={theme == themes.dark ? true : false}
        onValueChange={toggleTheme}
      />
    </View>
  );
};

export default ThemeButton;
