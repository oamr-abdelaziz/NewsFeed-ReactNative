import AsyncStorage from '@react-native-async-storage/async-storage';
import i18n from "../translation/i18n";
import RNRestart from 'react-native-restart';
import { I18nManager } from 'react-native';
export const getData = async () :Promise<any>=> {
  try {
    const value = await AsyncStorage.getItem('lang')
    if(value !== null) {
      i18n.changeLanguage(value);
      // value previously stored
    }
  } catch(e) {
    console.log(e);
    // error reading value
  }
}
export const storeData = async (value:string):Promise<any> => {
    try {
      await AsyncStorage.setItem('lang', value);
      RNRestart.Restart();
    } catch (e) {
      // saving error
      console.log(e);

    }
}

export const changeLanguage=async(lang:string):Promise<any>=>{
  const prev=await AsyncStorage.getItem('lang');
  console.log(prev);
  
  if(prev!=lang){
    i18n.changeLanguage(lang).then(()=>{
        I18nManager.forceRTL(i18n.language=='ar')
    });
    storeData(lang);
  }
}