import React, { useContext, useEffect, useState } from 'react'
import { Image, StyleSheet, TextInput, TouchableOpacity, View } from 'react-native'
import { ThemeContext } from '../theming/themeContext';

const SearchBar = ({items,setFilteredItems}) => {
  const {theme}= useContext(ThemeContext)
    const [searchValue, setSearchValue] = useState(null);
    useEffect(() => {
        if(searchValue!=null||searchValue=='')
            setFilteredItems(items.filter((item)=>item.title.toLowerCase().includes(searchValue.toLowerCase())))
        else
            setFilteredItems(items)
    }, [searchValue])
    
    return (
        <View style={styles.textInputView}>
            <TextInput placeholder='Filter results' placeholderTextColor={theme.searchBarPlaceHolder} style={StyleSheet.flatten([styles.textInput,{color:theme.searchBarForeGround,borderColor:theme.searchBarBorder}])} value={searchValue} onChangeText={(val)=>setSearchValue(val)}/>
            {/* <TouchableOpacity
            style={styles.closeButtonParent}
            onPress={() => setSearchValue(null)}
          >
            <Image
              style={styles.closeButton}
              source={require("../assets/close.png")}
            />
          </TouchableOpacity> */}
        </View>
   )
}

const styles = StyleSheet.create({
    textInput:{
        borderWidth:1,
        borderRadius:10,
        textAlign:'center',
        width:'80%',
        margin:15,
        padding:5,
        // borderColor:'dodgerblue'
        // left:25
    },
    textInputView:{
        alignItems:'center',
        // flexDirection:'row',
    },
    closeButton: {
        height: 16,
        width: 16,
      },
      closeButtonParent: {
        justifyContent: "center",
        alignItems: "center",
        position:'absolute',
        // right:25
      },
})
export default SearchBar
