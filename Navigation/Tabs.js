import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Categories from '../screens/Categories';
import AddRecipe from '../screens/AddRecipe';
import Favorites from '../screens/Favorites';
import Profile from '../screens/Profile';
import IonIcons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();
const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          if (route.name === 'Explorer') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Categories') {
            iconName = focused ? 'ios-albums' : 'ios-albums-outline';
          } else if (route.name === 'Nouveau') {
            iconName = focused ? 'ios-add-circle' : 'ios-add-circle-outline';
          } else if (route.name === 'Favorites') {
            iconName = focused ? 'ios-heart' : 'ios-heart-outline';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'person-circle' : 'person-circle-outline';
          }
          return <IonIcons name={iconName} color={color} size={size} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: '#38D67A',
        inactiveTintColor: '#8E7C7A',
      }}>
      <Tab.Screen name="Explorer" component={Home} />
      <Tab.Screen name="Categories" component={Categories} />
      <Tab.Screen name="Nouveau" component={AddRecipe} />
      <Tab.Screen name="Favorites" component={Favorites} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

export default Tabs;
