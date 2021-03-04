import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screens/Home';
import Tabs from './Tabs';

const Stack = createStackNavigator();
const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Accueil" component={Tabs} />
    </Stack.Navigator>
  );
};

export default HomeStack;
