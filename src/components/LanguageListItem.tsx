import React from 'react';
import { useTranslation } from 'react-i18next';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { changeLanguage } from '../utils/changeLanguage';
// import Icon from 'react-native-vector-icons/Ionicons';

const LanguageListItem = (props)=> {
    const {t}=useTranslation()
    return (
        <TouchableOpacity
        style={styles.listItem}
        onPress={()=>changeLanguage(props.locale)}
      >
        <View style={styles.textWrapper}>
          <Text
            style={[styles.title, (props.isActive && styles.active)]
          }>
            {t(props.name)}
          </Text>
          {
            props.englishName &&
              <Text style={styles.subtitle}>{props.englishName}</Text>
          }
        </View>
        {
          props.isActive &&
            // <Icon
            //   style={styles.active}
            //   name="ios-checkmark-circle-outline"
            //   size={30}
            // />
            <Image source={require('../assets/tick.png')} style={{width:30,height:30}} />
        }
      </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
  listItem: {
    flexDirection: 'row',
    // alignItems: 'flex-end',
    alignItems: 'center',
    padding: 10
  },
  textWrapper: {
    width: '90%',
    marginLeft: 10
  },
  title: {
    fontSize: 18,
    color: '#434343'
  },
  subtitle: {
    color: '#AAAAAA'
  },
  active: {
    color: '#03a87c'
  }
});

export default LanguageListItem;