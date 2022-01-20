import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {BottomNavigationParamList} from './types/bottomNavigationType';
import About from './Screens/About';
import Store from './Screens/Store';
import {Icon} from 'react-native-elements/dist/icons/Icon';

const bottomNavigation = createBottomTabNavigator<BottomNavigationParamList>();

const BottomNavigation = () => {
  return (
    <bottomNavigation.Navigator>
      <bottomNavigation.Screen
        options={{
          tabBarIcon: ({color, size, focused}) => (
            <Icon
              type="antdesign"
              name="home"
              color={focused ? color : 'gray'}
              size={focused ? size : 20}
            />
          ),
          title: 'ABOUT',
        }}
        name="about"
        component={About}
      />
      <bottomNavigation.Screen
        options={{
          tabBarIcon: ({color, size, focused}) => (
            <Icon
              type="antdesign"
              name="user"
              color={focused ? color : 'gray'}
              size={focused ? size : 20}
            />
          ),
          title: 'STORE',
        }}
        name="store"
        component={Store}
      />
    </bottomNavigation.Navigator>
  );
};

export default BottomNavigation;
