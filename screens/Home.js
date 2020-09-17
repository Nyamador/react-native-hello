import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

const Home = ({navigation}) => {
  return (
    <View>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('ColorPalette');
        }}>
        <Text style={styles.button}> Open Color Palette</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('TodoHomepage');
        }}>
        <Text style={styles.button}> Open Todo Home</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    height: 40,
    padding: 10,
    backgroundColor: 'gray',
    textAlign: 'center',
  },
});
export default Home;
