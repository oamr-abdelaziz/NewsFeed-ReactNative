import React, { useContext } from "react";
import { useTranslation } from "react-i18next";
import { StyleSheet, Text } from "react-native";
import { ThemeContext } from "../theming/themeContext";

type Props={
    children:any,
    style:{},
    key:string
}
const SpText :React.FC<Props> = ({children,style,key})=>{
    const {theme} = useContext(ThemeContext);
  const {t} = useTranslation();
   
    return(
        <Text style={StyleSheet.flatten([styles.text,{color:theme.foreground},style])}>{t(`${key}`,children)}</Text>
    )
}

const styles=StyleSheet.create({
    text:{
        fontFamily: 'georgia',
        marginVertical: 5,
    }
})
export default SpText