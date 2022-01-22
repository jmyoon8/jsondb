import {StyleSheet, View, ScrollView, Dimensions, Alert} from 'react-native';
import React, {useEffect, useLayoutEffect, useState} from 'react';
import {StoreBottomScreenProps} from '../types/bottomNavigationType';
import Header from '../components/Header';
import {apiInstance} from '../../utils/globalUtils';

import {whiteBackGround} from '../../utils/styles';
import StoreCard from '../components/StoreCard';
import {dimentionType, StoresType} from '../types/DataType';
import {useIsFocused} from '@react-navigation/native';

const styles = StyleSheet.create({
  scrollViewContainer: {
    flex: 1,
    backgroundColor: whiteBackGround,
    flexWrap: 'wrap',
  },
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    paddingTop: 14,
  },
});

const Store = ({navigation, route}: StoreBottomScreenProps) => {
  const [stores, setStores] = useState<StoresType[]>([]);
  const [Orient, setOrient] = useState<'garo' | 'sero'>('sero');
  const focus = useIsFocused();
  useLayoutEffect(() => {
    navigation.setOptions({
      header: () => <Header route={route} />,
    });
  }, [navigation, route]);
  useEffect(() => {
    const getStores = async () => {
      try {
        const getData = await apiInstance.get<StoresType[]>('/stores');
        setStores(getData.data);
      } catch (error) {
        setStores([]);
        Alert.alert('링크가 유효하지 않습니다.');
        navigation.goBack();
      }
    };

    const dimentionChange = ({screen}: dimentionType) => {
      if (screen.height > screen.width) {
        setOrient('sero');
      } else {
        setOrient('garo');
      }
    };
    const remove = Dimensions.addEventListener('change', dimentionChange);
    if (focus) {
      getStores();
    }
    return () => {
      remove.remove();
    };
  }, [navigation, focus]);

  return (
    <ScrollView style={styles.scrollViewContainer}>
      <View style={styles.container}>
        {stores.map(item => {
          return (
            <StoreCard
              key={item.id + 'stores'}
              {...item}
              navigation={navigation}
              Orient={Orient}
            />
          );
        })}
      </View>
    </ScrollView>
  );
};

export default Store;
