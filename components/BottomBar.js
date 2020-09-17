import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const BottomBar = () => {
  return (
    <View style={styles.Container}>
      <Text>skmd</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    backgroundColor: '#1a1a1a',
    height: 54,
    width: '60%',
  },
});
export default BottomBar;
