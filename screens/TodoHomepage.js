import React, {useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Switch,
  SafeAreaView,
} from 'react-native';
import TaskItem from '../components/TaskItem';
import BottomBar from '../components/BottomBar';
import Task from '../components/PinnedTask';

const TeamCard = () => {
  return (
    <View style={TeamCardStyles.cardWrapper}>
      <Text style={[styles.BaseText, styles.Title]}>Pinned Tasks</Text>
      <ScrollView
        style={TeamCardStyles.cardContainer}
        horizontal={true}
        alwaysBounceHorizontal={true}>
        <Task
          category="Work"
          body="Design a to-do app for a client at work"
          day="Today"
          colors={['#ed9321', '#e8552d']}
        />
        <Task
          category="Study"
          body="Learn the basics of front-end web.."
          day="Tomorrow"
          colors={['#e72ee5', '#a028f6']}
        />
        <Task
          category="Personal"
          body="Go to the grocery"
          day="Saturday"
          colors={['#ec8961', '#e75037']}
        />
        <Task
          category="Shopping"
          body="Buy Millk"
          day="Tuesday"
          colors={['#7cf7ff', '#008086']}
        />
      </ScrollView>
    </View>
  );
};

const TeamCardStyles = StyleSheet.create({
  cardWrapper: {
    padding: 20,
    paddingRight: 0,
  },
  cardContainer: {
    overflow: 'scroll',
    display: 'flex',
    flexDirection: 'row',
    // width: 1200,
  },
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
    borderRadius: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    width: '50%',
    marginTop: 'auto',
  },
});

const Tasks = () => {
  return (
    <View style={{padding: 20}}>
      <Text style={[styles.BaseText, styles.Title]}>Tasks</Text>

      <TaskItem text={'Build a to-do app with team members'} />
      <TaskItem text={'Build a to-do app with team members'} />
      <TaskItem text={'Build a to-do app with team members'} />
      <TaskItem text={'Build a to-do app with team members'} />
      <TaskItem text={'Build a to-do app with team members'} />
      <TaskItem text={'Build a to-do app with team members'} />
      <TaskItem text={'Build a to-do app with team members'} />
      <TaskItem text={'Build a to-do app with team members'} />
      <TaskItem text={'Build a to-do app with team members'} />
      <TaskItem text={'Build a to-do app with team members'} />
      <TaskItem text={'Build a to-do app with team members'} />
      <TaskItem text={'Build a to-do app with team members'} />
      <TaskItem text={'Build a to-do app with team members'} />
      <TaskItem text={'Learn Basics Of Frontend Development'} />
      <TaskItem text={'Bring Milk'} />
    </View>
  );
};

const TaskStyles = StyleSheet.create({
  TaskItem: {
    backgroundColor: '#242424',
    padding: 10,
    height: 50,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
});

const TodoHomepage = ({navigation}) => {
  return (
    <SafeAreaView style={styles.TodoHomepage}>
      <View style={styles.NavBar}>
        <Text style={[styles.BaseText, styles.HeaderText]}>Wednesday, 16</Text>
      </View>

      <ScrollView>
        <TeamCard />
        <Tasks />
      </ScrollView>
      <View style={styles.BottomBarWrap}>
        <BottomBar style={styles.BottomBar} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  TodoHomepage: {
    backgroundColor: '#1e1e1e',
    color: 'white',
    height: '100%',
  },
  BaseText: {
    color: 'white',
  },
  Title: {
    fontSize: 25,
    marginBottom: 20,
  },
  NavBar: {
    display: 'flex',
    height: 50,
    padding: 10,
    flexDirection: 'row',
    textAlign: 'center',
  },
  HeaderText: {
    margin: 'auto',
  },
  BottomBarWrap: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    position: 'relative',
    bottom: 25,
  },
  BottomBar: {},
});
export default TodoHomepage;
