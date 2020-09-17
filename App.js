import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Home from './screens/Home';
import ColorPalette from './screens/ColorPalette';
import {createStackNavigator} from '@react-navigation/stack';
import TodoHomepage from './screens/TodoHomepage';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="TodoHomepage"
          component={TodoHomepage}
          options={{headerShown: false}}
        />
        <Stack.Screen name="ColorPalette" component={ColorPalette} />
        {/* <Stack.Screen name="Home" component={Home} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
