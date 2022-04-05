import React from 'react';
import { useTranslation } from 'react-i18next';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

type Props={
  title:string,
  onPress:()=>void
}
const SettingsListItem :React.FC<Props>= ({title,onPress})=> {
    const {t} = useTranslation();
    return (
        <TouchableOpacity
        style={styles.listItem}
        onPress={onPress}
      >
        <Text style={styles.listItemText}>{t(title)}</Text>
        <Image source={require('../assets/right-arrow.png')} style={{width:25,height:25}} />
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
    color: '#434343',
    width: '90%'
  },
  icon: {
    color: '#CCCCCC',
    paddingLeft: 5
  }
});

export default SettingsListItem;