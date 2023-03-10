import React from 'react';
import { StyleSheet, TextInput, NativeSyntheticEvent, TextInputChangeEventData, View, Text } from 'react-native';

interface Props {
  value: string;
  isError?: boolean | string | null;
  marginBottom?: number;
  onChangeText?(text: string): void;
  onChange?(e: NativeSyntheticEvent<TextInputChangeEventData>): void;
  placeholder?: string;
  errorText?: string;
  isPassword?: boolean;
}

const Input: React.FC<Props> = ({
  value,
  isError,
  marginBottom = 0,
  onChangeText,
  onChange,
  placeholder,
  errorText,
  isPassword
}) => {
  return (
    <View style={[{ marginBottom: marginBottom }, styles.inputWrapper]}>
      <TextInput
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor="#c9cad1"
        value={value}
        onChange={onChange}
        style={!isError ? styles.input : errorInput }
        secureTextEntry={isPassword}
      />
    </View>
  );
}

export default Input;

const styles = StyleSheet.create({
  inputWrapper: {
    width: '100%',
  },

  input: {
    width: '100%',
    height: 40,
    paddingHorizontal: 8,
    borderWidth: 1,
    borderRadius: 12,
    borderColor: '#c9cad1',
    textDecorationLine: 'none',
    fontSize: 14,
  },

  errorInput: {
    borderColor: '#eb4335'
  },
})

const errorInput = StyleSheet.compose(
  styles.input, styles.errorInput
)