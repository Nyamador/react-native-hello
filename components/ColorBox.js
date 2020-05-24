import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const ColorBox = ({hexCode, colorName}) => {
  const boxColor = {
    backgroundColor: hexCode,
  };
  const textColor = {
    color:
      parseInt(hexCode.replace('#', ''), 16) > 0xffffff / 1.1
        ? 'black'
        : 'white',
  };
  return (
    <View style={[styles.box, boxColor]}>
      <Text style={[styles.text, textColor]}>
        {colorName} {hexCode}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    height: 50,
    borderRadius: 8,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default ColorBox;
