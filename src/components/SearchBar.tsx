import React, { useEffect, useState } from 'react'
import { Image, StyleSheet, TextInput, TouchableOpacity, View } from 'react-native'

const SearchBar = ({items,setFilteredItems}) => {
    const [searchValue, setSearchValue] = useState(null);
    useEffect(() => {
        // console.log(searchValue);
        if(searchValue!=null||searchValue=='')
            setFilteredItems(items.filter((item)=>item.title.toLowerCase().includes(searchValue.toLowerCase())))
        else
            setFilteredItems(items)
    }, [searchValue])
    
    return (
        <View style={styles.textInputView}>
            <TextInput placeholder='Filter results' placeholderTextColor='rgba(30,144,255,0.4)' style={styles.textInput} value={searchValue} onChangeText={(val)=>setSearchValue(val)}/>
            <TouchableOpacity
            style={styles.closeButtonParent}
            onPress={() => setSearchValue(null)}
          >
            <Image
              style={styles.closeButton}
              source={require("../assets/close.png")}
            />
          </TouchableOpacity>
        </View>
   )
}

const styles = StyleSheet.create({
    textInput:{
        borderWidth:1,
        borderColor:'dodgerblue',
        borderRadius:10,
        textAlign:'center',
        width:'80%',
        margin:15,
        color:'dodgerblue',
        padding:5,
        left:25
 
    },
    textInputView:{
        alignItems:'center',
        flexDirection:'row',
    },
    closeButton: {
        height: 16,
        width: 16,
      },
      closeButtonParent: {
        justifyContent: "center",
        alignItems: "center",
        right:25
      },
})
export default SearchBar
