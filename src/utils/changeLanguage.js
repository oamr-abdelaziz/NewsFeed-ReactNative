import AsyncStorage from '@react-native-async-storage/async-storage';
import i18n from "../translation/i18n";
const storeData = async (value) => {
    try {
      await AsyncStorage.setItem('lang', value);
    } catch (e) {
      // saving error
      console.log(e);

    }
}
 export const changeLanguage=(lang)=>{
    i18n.changeLanguage(lang);
    storeData(lang);
  }