import React from 'react';
import {View, Text, StyleSheet, SafeAreaView, FlatList} from 'react-native';
import ColorBox from '../components/ColorBox';

const ColorPalette = () => {
  const COLORS = [
    {colorName: 'Base03', hexCode: '#002b36'},
    {colorName: 'Base02', hexCode: '#073642'},
    {colorName: 'Base01', hexCode: '#586e75'},
    {colorName: 'Base00', hexCode: '#657b83'},
    {colorName: 'Base0', hexCode: '#839496'},
    {colorName: 'Base1', hexCode: '#93a1a1'},
    {colorName: 'Base2', hexCode: '#eee8d5'},
    {colorName: 'Base3', hexCode: '#fdf6e3'},
    {colorName: 'Yellow', hexCode: '#b58900'},
    {colorName: 'Orange', hexCode: '#cb4b16'},
    {colorName: 'Red', hexCode: '#dc322f'},
    {colorName: 'Magenta', hexCode: '#d33682'},
    {colorName: 'Violet', hexCode: '#6c71c4'},
    {colorName: 'Blue', hexCode: '#268bd2'},
    {colorName: 'Cyan', hexCode: '#2aa198'},
    {colorName: 'Green', hexCode: '#859900'},
  ];

  return (
    <View style={styles.container}>
      <View style={styles.Header}>
        <Text style={styles.headerText}>
          Here are some boxes of different colours
        </Text>
      </View>

      <View>
        <FlatList
          style={styles.BoxContainer}
          data={COLORS}
          keyExtractor={item => item.colorName}
          ListHeaderComponent={<Text style={styles.HeaderText} />}
          renderItem={({item}) => (
            <ColorBox colorName={item.colorName} hexCode={item.hexCode} />
          )}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
  Header: {
    padding: 20,
    fontSize: 22,
  },
  headerText: {
    fontSize: 18,
  },
  BoxContainer: {
    paddingHorizontal: 10,
  },
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
  },
  cyan: {
    backgroundColor: '#2aa198',
  },
  blue: {
    backgroundColor: '#268bd2',
  },
  magenta: {
    backgroundColor: '#d33682',
  },
  orange: {
    backgroundColor: '#cb4b16',
  },
});

export default ColorPalette;
