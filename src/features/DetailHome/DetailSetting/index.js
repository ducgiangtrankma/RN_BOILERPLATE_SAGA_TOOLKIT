import React, {useState, useRef} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {styles} from './styles';
import {SupperAler} from '../../../components';
export default function DetailSetting({props, navigation}) {
  console.log('Re-render');
  const modal = useRef();
  const backHome = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={backHome}>
        <Text> Back setting screnn</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          modal.current.openModal();
        }}>
        <Text> SHOW</Text>
      </TouchableOpacity>
      <SupperAler
        isSucces={true}
        ref={modal}
        title="Thành công"
        message="Cập nhật thành công"
        onClose={() => {
          navigation.goBack();
        }}
      />
    </View>
  );
}
