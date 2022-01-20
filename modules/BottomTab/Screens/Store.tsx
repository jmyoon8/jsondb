import {StyleSheet, Text, View, ScrollView, FlatList} from 'react-native';
import React, {useEffect, useLayoutEffect, useState} from 'react';
import {StoreBottomScreenProps} from '../types/bottomNavigationType';
import Header from '../components/Header';
import {apiInstance} from '../../utils/globalUtils';
import {StoresType} from '../../utils/globalType';
import {whiteBackGround} from '../../utils/styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: whiteBackGround,
    flexWrap: 'wrap',
    borderWidth: 1,
  },
  storesContainer: {
    borderWidth: 1,
    height: 40,
    width: '100%',
  },
});

const Store = ({navigation, route}: StoreBottomScreenProps) => {
  const [stores, setStores] = useState<StoresType[]>([]);

  useLayoutEffect(() => {
    navigation.setOptions({
      header: () => <Header route={route} />,
    });
  }, [navigation, route]);
  useEffect(() => {
    const getStores = async () => {
      const getData = await apiInstance.get<StoresType[]>('/stores');
      setStores(getData.data);
    };
    getStores();
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={stores}
        style={{width: '100%', borderWidth: 1}}
        horizontal
        keyExtractor={item => item.id + 'Key!'}
        renderItem={({index, item}) => (
          <View style={styles.storesContainer}></View>
        )}
      />
      <Text>{stores.length}</Text>
    </View>
  );
};

export default Store;
