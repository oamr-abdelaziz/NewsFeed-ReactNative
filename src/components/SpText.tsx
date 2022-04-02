import React, { useContext } from "react";
import { StyleSheet, Text } from "react-native";
import { ThemeContext } from "../theming/themeContext";

const SpText = ({children,style})=>{
    const {theme} = useContext(ThemeContext);
    return(
        <Text style={StyleSheet.flatten([styles.text,{color:theme.foreground},style])}>{children}</Text>
    )
}

const styles=StyleSheet.create({
    text:{
        fontFamily: 'georgia',
        marginVertical: 5,
    }
})
export default SpText