import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { I18nManager, Image, StyleSheet, Text, TouchableOpacity } from 'react-native';
import  Icon from 'react-native-vector-icons/MaterialIcons';
import { ThemeContext } from '../../theming/themeContext';

type Props={
  title:string,
  onPress:()=>void
}
const SettingsListItem :React.FC<Props>= ({title,onPress})=> {
    const {t} = useTranslation();
    const {theme} = useContext(ThemeContext);
    return (
        <TouchableOpacity
        style={styles.listItem}
        onPress={onPress}
      >
        <Text style={StyleSheet.flatten([styles.listItemText,{color:theme.titleNotActive}])}>{t(title)}</Text>
        <Icon style={styles.icon} name={`arrow-${I18nManager.isRTL?'back':'forward'}-ios`} size={25} color={theme.titleNotActive}/>
      </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
  listItem: {
    // flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10
  },
  listItemText: {
    marginLeft: 10,
    fontSize: 18,
    width: '90%'
    // color: '#AAAAAA',
  },
  icon: {
    paddingLeft: 5
  }
});

export default SettingsListItem;