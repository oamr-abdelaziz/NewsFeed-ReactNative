import AsyncStorage from '@react-native-async-storage/async-storage';
import i18n from '../translation/i18n';
import RNRestart from 'react-native-restart';
import {I18nManager} from 'react-native';

export const getStoredLang = async (): Promise<any> => {
  try {
    const value = await AsyncStorage.getItem('lang');
    if (value !== null) {
      i18n.changeLanguage(value);
    }
  } catch (e) {
    console.log(e);
  }
};

export const storeLang = async (value: string): Promise<any> => {
  try {
    await AsyncStorage.setItem('lang', value);
    RNRestart.Restart();
  } catch (e) {
    console.log(e);
  }
};

export const changeLanguage = async (lang: string): Promise<any> => {
  const prev = await AsyncStorage.getItem('lang');

  if (prev != lang) {
    i18n.changeLanguage(lang).then(() => {
      I18nManager.forceRTL(i18n.language == 'ar');
    });
    storeLang(lang);
  }
};
