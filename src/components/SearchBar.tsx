import React, { useEffect, useState } from 'react'
import { StyleSheet, TextInput, View } from 'react-native'

const SearchBar = ({items,setFilteredItems}) => {
    const [searchValue, setSearchValue] = useState('');
    useEffect(() => {
        console.log(searchValue);
        setFilteredItems(items.filter((item)=>item.title.toLowerCase().includes(searchValue.toLowerCase())))
    }, [searchValue])
    
    return (
        <View style={styles.textInputView}>
            <TextInput style={styles.textInput} defaultValue={searchValue} onChangeText={(val)=>setSearchValue(val)}/>

        </View>
   )
}

const styles = StyleSheet.create({
    textInput:{
        borderWidth:1,
        borderColor:'black',
        borderRadius:40,
        textAlign:'center',
        width:'80%',
        margin:15
    },
    textInputView:{
        alignItems:'center'
    }
})
export default SearchBar
