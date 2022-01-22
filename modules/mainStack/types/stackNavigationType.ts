import {StackScreenProps} from '@react-navigation/stack';

export type StackNavigationParamList = {
  BottomNavigation: undefined;
  storeDetail: {id: number};
};
export type StoreDetailScreenProps = StackScreenProps<
  StackNavigationParamList,
  'storeDetail'
>;
