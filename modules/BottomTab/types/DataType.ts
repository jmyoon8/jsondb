import {ScaledSize} from 'react-native';

export interface StoresType {
  id: number;
  name: string;
  title: string;
  description: string;
  image: string;
  thumb: string;
}

export type dimentionType = {screen: ScaledSize};
