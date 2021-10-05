import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';

const SButton = ({text, handleAction, height, width}: any) => {
  return (
    <TouchableOpacity onPress={handleAction}>
      <View style={styles(height, width).mStyle}>
        <Text style={styles(height, width).textStyle}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = ({height, width}: any) =>
  StyleSheet.create({
    mStyle: {
      backgroundColor: '#3bc8e7',
      minWidth: 80,
      minHeight: 40,
      color: '#fff',
      textAlign: 'center',
      borderRadius: 20,
      fontFamily: 'Josefin Sans, sans-serif',
      height: height,
      width: width,
      textAlignVertical: 'center',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    textStyle: {
      color: '#fff',
    },
  });

export default SButton;
