import React from 'react';
import {View} from 'react-native';
import SettingsListItem from './SettingsListItem';

type Props={
  onPressItem:(val:string)=>void
}

const settings = [
  {
    name: 'Display language',
    screen: 'LanguageSelector'
},
//   {
//     name: 'About',
//     screen: 'About'
// },
];

const SettingsList:React.FC<Props> = ({onPressItem})=> {
    
    return (
      <View>
      {settings.map((item) => (
        <SettingsListItem
            key={item.name}
            title={item.name}
            onPress={() =>onPressItem(item.screen)}
        />
))}
      </View>
    );
}

export default SettingsList;
