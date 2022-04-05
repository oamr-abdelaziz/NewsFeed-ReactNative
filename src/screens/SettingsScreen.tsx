import React from 'react';
import {StyleSheet, View} from 'react-native';
import SettingsList from '../components/SettingsList';

type Props = {
  navigation: {
    navigate: (a: string) => void;
  };
};

const SettingsScreen: React.FC<Props> = ({navigation}) => {
  return (
    <View style={styles.inputContainer}>
      <SettingsList
        onPressItem={(screen: string) => navigation.navigate(screen)}
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
