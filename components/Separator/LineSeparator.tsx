import {View} from 'react-native';
import React from 'react';
const LineSeparator = ({color, width}: any) => {
  return (
    <View
      style={{
        borderBottomColor: color,
        borderBottomWidth: width,
        marginTop: 10,
      }}
    />
  );
};

export default LineSeparator;
