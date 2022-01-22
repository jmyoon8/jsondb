/* eslint-disable react-native/no-inline-styles */
import {Image, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {whiteBackGround} from '../../utils/styles';
import {BottomNavigationParamList} from '../types/bottomNavigationType';
import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import {StoresType} from '../types/DataType';

const StoreCard = ({
  description,
  id,
  name,
  thumb,
  title,
  navigation,
  Orient,
}: StoresType & {
  navigation: BottomTabNavigationProp<BottomNavigationParamList, 'store'>;
  Orient: 'garo' | 'sero';
}) => {
  const goToDetailScreen = () => {
    navigation.navigate('storeDetail', {
      id,
    });
  };
  return (
    <TouchableOpacity
      onPress={goToDetailScreen}
      key={id}
      style={[
        styles.storesContainer,
        {width: Orient === 'sero' ? '45%' : '20%'},
      ]}>
      <View style={styles.storeImageBox}>
        <View style={styles.storeImageTitleBox}>
          <Text style={styles.storeImageTitle} numberOfLines={2}>
            {name}
          </Text>
        </View>
        <Image
          resizeMode="stretch"
          source={{uri: thumb}}
          style={styles.image}
        />
      </View>
      <View style={styles.storeInfoContainer}>
        <Text numberOfLines={2} style={styles.storeTitle}>
          {title}
        </Text>
        <Text numberOfLines={1} style={styles.storeDescription}>
          {description}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default StoreCard;

const styles = StyleSheet.create({
  storesContainer: {
    justifyContent: 'space-between',
    height: 270,
    maxHeight: 270,

    marginVertical: 10,
    marginHorizontal: 8,
  },
  storeImageBox: {
    flex: 1.2,
    borderRadius: 10,
    backgroundColor: whiteBackGround,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  image: {
    height: '100%',
    width: '100%',
    borderRadius: 10,
  },
  storeImageTitleBox: {
    position: 'absolute',
    top: 10,
    left: 10,
    zIndex: 10,
    backgroundColor: 'gray',
    paddingVertical: 4,
    paddingHorizontal: 4,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  storeImageTitle: {
    color: '#fff',
    fontWeight: '800',
    fontSize: 12,
  },
  storeInfoContainer: {
    height: 70,
    justifyContent: 'space-around',

    marginTop: 15,
  },
  storeTitle: {
    fontWeight: '500',
    fontSize: 16,
  },
  storeDescription: {
    fontWeight: '700',
  },
});
