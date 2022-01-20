import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {StackNavigationParamList} from './types/stackNavigationType';
import StoreDetail from './Screens/StoreDetail';
import BottomNavigation from '../BottomTab/BottomNavigation';

const stackNavigation = createStackNavigator<StackNavigationParamList>();
const StackNavigation = () => {
  return (
    <stackNavigation.Navigator screenOptions={{headerShown: false}}>
      <stackNavigation.Screen
        name="BottomNavigation"
        component={BottomNavigation}
      />
      <stackNavigation.Screen name="storeDetail" component={StoreDetail} />
    </stackNavigation.Navigator>
  );
};

export default StackNavigation;
