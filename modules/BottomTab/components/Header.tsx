import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {black, whiteBackGround} from '../../utils/styles';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {HeaderType} from '../types/componentsType';

const Header = ({route}: HeaderType) => {
  const safeAreaInset = useSafeAreaInsets();
  const styles = StyleSheet.create({
    container: {
      paddingTop: safeAreaInset.top,
      backgroundColor: whiteBackGround,
      paddingHorizontal: 16,
    },
    titleContainer: {
      borderBottomWidth: 1,
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'center',
      height: 40,
    },
    title: {
      fontSize: 17,
      fontWeight: 'bold',
      borderBottomColor: black,
    },
  });
  return (
    <>
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{route.name.toUpperCase()}</Text>
        </View>
      </View>
    </>
  );
};

export default Header;
