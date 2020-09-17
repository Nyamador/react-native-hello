import React, {useState} from 'react';
import {View, Switch, Text, StyleSheet} from 'react-native';

const TaskItem = ({text}) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const ToggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <View style={styles.TaskItem}>
      <Switch
        value={isEnabled}
        onValueChange={ToggleSwitch}
        style={{marginRight: 10}}
        thumbColor={isEnabled ? '#3768df' : 'white'}
        trackColor={{false: '#000000', true: '#3768dfbd'}}
      />
      <Text style={styles.BaseText}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  TaskItem: {
    backgroundColor: '#242424',
    padding: 10,
    height: 50,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  BaseText: {
    color: 'white',
  },
});
export default TaskItem;
