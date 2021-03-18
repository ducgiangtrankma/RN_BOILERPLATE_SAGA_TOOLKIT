import React from 'react';
import {Text, SafeAreaView, TouchableOpacity} from 'react-native';
import {styles} from './styles';
export default function Setting({props, navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('SettingDetail');
        }}>
        <Text>Setting</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
