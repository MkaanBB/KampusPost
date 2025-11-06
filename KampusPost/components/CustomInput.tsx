import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

const CustomInput = ({ placeholder, value, onChangeText, secureTextEntry }: any) => {
  return (
    <TextInput
      style={styles.input}
      placeholder={placeholder}
      value={value}
      onChangeText={onChangeText}
      secureTextEntry={secureTextEntry}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    width: '80%',
    borderWidth: 1,
    borderColor: '#aaa',
    padding: 10,
    marginBottom: 15,
    borderRadius: 5,
    backgroundColor: '#fff',
  },
});

export default CustomInput;
