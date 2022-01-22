import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';

export type BottomNavigationParamList = {
  store: undefined;
  about: undefined;
  storeDetail: {id: number};
};
export type AboutBottomScreenProps = BottomTabScreenProps<
  BottomNavigationParamList,
  'about'
>;
export type StoreBottomScreenProps = BottomTabScreenProps<
  BottomNavigationParamList,
  'store'
>;
