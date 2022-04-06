import React, {useContext, useEffect, useState} from 'react';
import {useTranslation} from 'react-i18next';
import {StyleSheet, TextInput, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {ThemeContext} from '../theming/themeContext';
import {ItemProps} from './NewsFeed/MultipleNews';

type Props = {
  items: ItemProps['item'][];
  setFilteredItems: (key: ItemProps['item'][]) => void;
};
const SearchBar: React.FC<Props> = ({items, setFilteredItems}) => {
  const {t} = useTranslation();
  const {theme} = useContext(ThemeContext);
  const [searchValue, setSearchValue] = useState('');
  useEffect(() => {
    if (searchValue != null || searchValue == '')
      setFilteredItems(
        items.filter(
          item =>
            item.title &&
            item.title.toLowerCase().includes(searchValue.toLowerCase()),
        ),
      );
    else setFilteredItems(items);
  }, [searchValue]);

  return (
    <View style={styles.textInputView}>
      <TextInput
        placeholder={t('search')}
        placeholderTextColor={theme.searchBarPlaceHolder}
        style={StyleSheet.flatten([
          styles.textInput,
          {
            color: theme.searchBarForeGround,
            borderColor: theme.searchBarBorder,
          },
        ])}
        value={searchValue}
        onChangeText={(val: any) => setSearchValue(val)}
      />
      <TouchableOpacity
        style={styles.closeButtonParent}
        onPress={() => setSearchValue('')}>
        <Icon
          color={
            searchValue != ''
              ? theme.searchBarForeGround
              : theme.searchBarPlaceHolder
          }
          name="close-circle-outline"
          size={16}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  textInput: {
    borderWidth: 1,
    borderRadius: 10,
    textAlign: 'center',
    width: '80%',
    margin: 15,
    padding: 5,
    // borderColor:'dodgerblue'
    // left:25
  },
  textInputView: {
    alignItems: 'center',
    // flexDirection:'row',
  },
  closeButton: {
    height: 16,
    width: 16,
  },
  closeButtonParent: {
    justifyContent: 'center',
    alignItems: 'center',

    position: 'absolute',
    right: 55,
    top: 25,
  },
});
export default SearchBar;
