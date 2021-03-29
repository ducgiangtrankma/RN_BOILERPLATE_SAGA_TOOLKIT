import React from 'react';
import {View, SafeAreaView, Text} from 'react-native';
import {styles} from './styles';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {Header} from '../../components';
import DropDown from '../../components/Dropdown';
export default function Home({props, navigation}) {
  const openDrawer = () => {
    navigation.openDrawer();
  };
  const renderLeft = () => {
    return <AntDesign name="menufold" size={18} />;
  };
  const renderRight = () => {};

  return (
    <SafeAreaView style={styles.container}>
      <Header
        title="Home"
        renderLeft={renderLeft}
        renderRight={renderRight}
        onPressLeft={openDrawer}
      />
      <View style={styles.content}>
        <Text>Home Screen</Text>
        <DropDown
          options={[
            {
              label: '1',
              value: '1',
            },
            {
              label: '2',
              value: '2',
            },
          ]}
          defaultIndex={-1}
          defaultValue={'Chọn loại yêu cầu'}
          onSelect={(idx, value) => {
            // setType(value.value);
          }}
          containerStyle={styles.dropDown}
          title="Chọn loại yêu cầu"
          titleStyle={styles.titleDropdown}
        />
      </View>
    </SafeAreaView>
  );
}
