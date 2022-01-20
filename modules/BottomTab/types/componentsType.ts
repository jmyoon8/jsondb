import {RouteProp} from '@react-navigation/native';
import {BottomNavigationParamList} from './bottomNavigationType';

export interface HeaderType {
  route:
    | RouteProp<BottomNavigationParamList, 'about'>
    | RouteProp<BottomNavigationParamList, 'store'>;
}
