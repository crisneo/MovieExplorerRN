import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import LineSeparator from '../Separator/LineSeparator';

const Subtitle = ({text}: any) => {
  return (
    <View>
      <Text style={styles.subTitle}>{text}</Text>
      <LineSeparator color="#3bc8e7" width={2} />
    </View>
  );
};
const styles = StyleSheet.create({
  subTitle: {
    textTransform: 'capitalize',
    color: '#3bc8e7',
    fontWeight: '800',
    fontFamily: 'JosefinSans-VariableFont_wght',
  },
});
export default Subtitle;
