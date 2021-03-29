import React, {useState, useRef, useCallback} from 'react';
import {View, Text, TouchableOpacity, FlatList} from 'react-native';
import {styles} from './styles';
import {SupperAlert} from '../../../components';
export default function DetailSetting({props, navigation}) {
  console.log('Re-render');
  const [messag, setMesage] = useState('a');
  const [count, setCount] = useState(1);
  const modal = useRef();
  const backHome = useCallback(() => {
    navigation.goBack();
  }, [navigation]);
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={backHome}>
        <Text> Back setting screnn</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          console.log(modal);
          modal.current.test();
          modal.current.openModal();
        }}>
        <Text> SHOW</Text>
      </TouchableOpacity>
      <Text>{count}</Text>
      <TouchableOpacity
        onPress={() => {
          setCount(count + 1);
        }}>
        <Text>+</Text>
      </TouchableOpacity>
      <SupperAlert
        isSuccess={true}
        ref={modal}
        title="Thành công"
        message="Cập nhật thành công"
        onClose={backHome}
      />
    </View>
  );
}
