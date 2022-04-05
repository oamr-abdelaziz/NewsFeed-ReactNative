import React from 'react';
import {StyleSheet, View} from 'react-native';

import LanguageListItem from '../components/LanguageListItem';
import i18n from '../translation/i18n';

const languages = [
  {
    locale: 'en',
    name: 'English',
  },
  {
    locale: 'fr',
    name: 'Francais',
    englishName: 'French',
  },
];

class LanguageSelector extends React.Component {
  static navigationOptions = {
    title: 'Language',
  };

  render() {
    return (
      <View style={styles.container}>
        {languages.map(language => (
          <LanguageListItem
            key={language.locale}
            isActive={language.locale === i18n.language}
            locale={language.locale}
            name={language.name}
            englishName={language.englishName}
          />
        ))}
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 45,
  },
});
export default LanguageSelector;
