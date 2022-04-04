import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useContext} from 'react';
import {useTranslation} from 'react-i18next';
import SettingsScreen from '../screens/SettingsScreen';
import LanguageSelector from '../screens/LanguageSelector';
import {ThemeContext} from '../theming/themeContext';

const SettingsStackScreen = () => {
  const {theme} = useContext(ThemeContext);
  const SettingsStack = createNativeStackNavigator();
  const {t, i18n} = useTranslation();

  return (
    <SettingsStack.Navigator
      screenOptions={{
        contentStyle: {
          paddingHorizontal: 15,
          backgroundColor: theme.background,
        },
        headerStyle: {backgroundColor: theme.headerBackground},
        headerTitleAlign: 'center',
        headerTintColor: theme.headerForeground,
      }}>
      <SettingsStack.Screen
        name="Settings Screen"
        component={SettingsScreen}
        options={{title: t('Settings')}}
      />
          <SettingsStack.Screen
        name="LanguageSelector"
        component={LanguageSelector}
        options={{title: t('Language Selector')}}
      />
    </SettingsStack.Navigator>
  );
};
export default SettingsStackScreen;
