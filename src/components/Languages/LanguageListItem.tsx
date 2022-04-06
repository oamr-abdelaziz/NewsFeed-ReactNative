import React, {useContext} from 'react';
import {useTranslation} from 'react-i18next';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {ThemeContext} from '../../theming/themeContext';
import {changeLanguage} from '../../utils/functions';
import Icon from 'react-native-vector-icons/Ionicons';

type Props = {
  locale: string;
  isActive: boolean;
  name: string;
  englishName: string | undefined;
};
const LanguageListItem: React.FC<Props> = props => {
  const {t} = useTranslation();
  const {theme} = useContext(ThemeContext);
  return (
    <TouchableOpacity
      style={styles.listItem}
      onPress={() => changeLanguage(props.locale)}>
      <View style={styles.textWrapper}>
        <Text
          style={StyleSheet.flatten([
            styles.title,
            {color: theme.titleNotActive},
            props.isActive && styles.active,
          ])}>
          {t(props.name)}
        </Text>
        {props.englishName && (
          <Text
            style={StyleSheet.flatten([
              styles.subtitle,
              {color: theme.subTitleLng},
            ])}>
            {props.englishName}
          </Text>
        )}
      </View>
      {props.isActive && (
        <Icon
          style={styles.active}
          name="ios-checkmark-circle-outline"
          size={30}
        />
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  textWrapper: {
    width: '90%',
    marginLeft: 10,
  },
  title: {
    fontSize: 18,
  },
  subtitle: {
    textAlign: 'left',
  },
  active: {
    color: '#03a87c',
  },
});

export default LanguageListItem;
