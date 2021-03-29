import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import IconF from 'react-native-vector-icons/Feather';
import ModalDropdown from './ModalDropdown';
const DropDown = ({
  style = {},
  dropdownStyle = {},
  options,
  defaultIndex,
  defaultValue,
  onSelect = () => {},
  disabled,
  animated,
  dropdownTextStyle,
  dropdownTextHighlightStyle,
  title,
  containerStyle,
  titleStyle,
}) => {
  const renderRow = (item) => {
    return (
      <View
        style={{
          height: 40,
          justifyContent: 'center',
          paddingLeft: 20,
        }}>
        <Text>{item.label}</Text>
      </View>
    );
  };
  return (
    <View style={[styles.container, containerStyle]}>
      <ModalDropdown
        style={[styles.style, style]}
        dropdownStyle={[styles.dropdownStyle, dropdownStyle]}
        options={options}
        defaultIndex={defaultIndex}
        defaultValue={defaultValue}
        onSelect={(idx, value) => {
          onSelect(idx, value);
        }}
        textStyle={styles.textStyle}
        disabled={disabled}
        animated={animated}
        showsVerticalScrollIndicator={false}
        dropdownTextStyle={[styles.dropdownTextStyle, dropdownTextStyle]}
        dropdownTextHighlightStyle={[
          styles.dropdownTextHighlightStyle,
          dropdownTextHighlightStyle,
        ]}
        renderButtonText={(props) => {
          return props.label;
        }}
        renderRow={renderRow}
      />
      <IconF style={{marginRight: 5}} name="chevron-down" size={10} />
      {/* <Text style={[styles.title, titleStyle]}>{title}</Text> */}
    </View>
  );
};
export default DropDown;
const styles = StyleSheet.create({
  dropdownStyle: {
    width: '90%',
  },
  style: {
    justifyContent: 'center',
    flex: 1,
  },
  title: {
    position: 'absolute',
    top: -10,
    left: 15,
    backgroundColor: 'white',
    paddingHorizontal: 5,
  },
  container: {
    borderWidth: 1,
    marginHorizontal: 20,
    borderRadius: 8,
    height: 50,
    borderColor: 'green',
    flexDirection: 'row',
    alignItems: 'center',
    width: '90%',
  },
  textStyle: {
    fontSize: 14,
    paddingVertical: 5,
    marginLeft: 10,
    color: 'gray',
  },
  dropdownTextStyle: {
    fontSize: 15,
    textAlign: 'left',
    marginHorizontal: 10,
  },
  dropdownTextHighlightStyle: {
    color: 'green',
  },
});
