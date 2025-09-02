import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, TextInput, TextInputProps, View } from 'react-native';

type FormInputProps = TextInputProps & {
  iconName?: keyof typeof Ionicons.glyphMap;
};

const FormInput: React.FC<FormInputProps> = ({
  iconName = 'mail-outline',
  placeholder,
  value,
  onChangeText,
  secureTextEntry,
  keyboardType,
  ...rest
}) => {
  return (
    <View style={styles.container}>
      <Ionicons name={iconName} size={20} style={styles.icon} />
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor="#8b8b8b"
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
        autoCapitalize="none"
        {...rest}
      />
    </View>
  );
};

export default FormInput;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#E6E6E6',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    marginVertical: 14,
    backgroundColor: '#fff',
  },
  icon: {
    color: '#7a7a7a',
    marginRight: 10,
  },
  input: {
    flex: 1,
    width: 250,
    fontSize: 16,
    color: '#222',
    padding: 0,
  },
});
