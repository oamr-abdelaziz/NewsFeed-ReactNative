import React from 'react';
import {StyleSheet, View} from 'react-native';
import SettingsList from '../components/SettingsList';
const SettingsScreen = ({navigation}) => {
  return (
    // <View>
    // <TouchableHighlight style={{alignItems:'center',padding:5}}
    // //  onPress={()=>toggleLang()}
    //  ><Text>toggle lang</Text></TouchableHighlight>

    // </View>
    <View style={styles.inputContainer}>
      <SettingsList 
        onPressItem={(screen) => navigation.navigate(screen)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    paddingTop: 15,
  },
});
export default SettingsScreen;
