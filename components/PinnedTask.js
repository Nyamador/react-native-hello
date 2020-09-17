import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const Task = ({colors, category, body, day}) => {
  return (
    <LinearGradient
      style={styles.linearGradient}
      colors={[...colors]}
      start={{x: 0.1, y: 0.1}}
      end={{x: 1, y: 1}}>
      <Text
        style={[styles.BaseText]}
        style={{
          color: '#f1b778',
          marginBottom: 10,
          marginTop: 'auto',
          textTransform: 'uppercase',
        }}>
        {category}
      </Text>
      <Text style={[styles.BaseText]}>{body}</Text>
      <View style={styles.TaskDate}>
        <Text>{day}</Text>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  linearGradient: {
    marginRight: 15,
    height: '100%',
    width: '100%',
    borderRadius: 10,
    padding: 20,
    height: 200,
    width: 200,
  },
  TaskDate: {
    backgroundColor: 'white',
    padding: 4,
    borderRadius: 20,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    width: '50%',
    marginTop: 'auto',
  },
  BaseText: {
    color: 'white',
  },
});

export default Task;
