import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

interface CustomInputProps {
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
  secureTextEntry?: boolean;
}

const CustomInput = ({ placeholder, value, onChangeText, secureTextEntry }: CustomInputProps) => {
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
  input: { width: '100%', borderWidth: 1, borderColor: '#ff0000ff', padding: 15, marginBottom: 15, borderRadius: 8, backgroundColor: '#960000ff' },
});
export default CustomInput;
