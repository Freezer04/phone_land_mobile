import React from 'react';
import {View, Text, TouchableOpacity, TextInput} from 'react-native';

export default function InputField({
  label,
  icon,
  inputType,
  fieldButtonLabel,
  onChangeText,
 
}) {
  return (
    <View
      style={{
        flexDirection: 'row',
        borderBottomColor: '#fff',
        borderBottomWidth: 1,
        paddingBottom: 8,
        marginBottom: 25,
      }}>
      {icon}
      {inputType == 'password' ? (
        <TextInput
          color ={"#fff"}
          placeholder={label}
          placeholderTextColor="#FFF"
          style={{flex: 1, paddingVertical: 0 , color: "#fff"}}
          secureTextEntry={true}
          onChangeText={onChangeText}
        />
      ) : (
        <TextInput
          color ={"#fff"}
          placeholder={label}
          placeholderTextColor="#FFF"
          style={{flex: 1, paddingVertical: 0, color: "#fff"}}
          onChangeText={onChangeText}
        />
      )}
      <TouchableOpacity >
        <Text style={{color: '#fff', fontWeight: '600'}}>{fieldButtonLabel}</Text>
      </TouchableOpacity>
    </View>
  );
}