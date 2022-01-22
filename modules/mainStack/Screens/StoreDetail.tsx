/* eslint-disable react-native/no-inline-styles */
import {
  Alert,
  Dimensions,
  Image,
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {StoreDetailScreenProps} from '../types/stackNavigationType';
import {whiteBackGround} from '../../utils/styles';
import {Icon} from 'react-native-elements/dist/icons/Icon';
import {apiInstance} from '../../utils/globalUtils';
import {dimentionType, StoresType} from '../../BottomTab/types/DataType';
import {ScrollView} from 'react-native-gesture-handler';
import {useIsFocused} from '@react-navigation/native';

const StoreDetail = ({navigation, route}: StoreDetailScreenProps) => {
  const [storeInfo, setStoreInfo] = useState<StoresType>();
  const [isOrientChange, setIsOrientChange] = useState<'garo' | 'sero'>('sero');
  const isFocus = useIsFocused();
  const goToBack = () => {
    navigation.goBack();
  };
  const goToLink = async (url: string | undefined) => {
    if (url) {
      const canOpen = await Linking.canOpenURL(url);
      if (canOpen) {
        Linking.openURL(url);
      } else {
        Alert.alert('링크가 유효하지 않습니다.');
      }
    } else {
      Alert.alert('링크가 유효하지 않습니다.');
    }
  };
  useEffect(() => {
    const getDetail = async () => {
      try {
        const getData = await apiInstance.get<StoresType>(
          `/stores/${route.params.id}`,
        );
        setStoreInfo(getData.data);
      } catch (error) {
        Alert.alert('링크가 유효하지 않습니다.');
        setStoreInfo(undefined);
        navigation.goBack();
      }
    };
    const dimentionChange = ({screen}: dimentionType) => {
      if (screen.height > screen.width) {
        setIsOrientChange('sero');
      } else {
        setIsOrientChange('garo');
      }
    };
    if (isFocus) {
      getDetail();
    }
    const remove = Dimensions.addEventListener('change', dimentionChange);
    return () => {
      remove.remove();
    };
  }, [navigation, route.params.id, isFocus]);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.storeInfoContainer}>
          <Image
            source={{uri: storeInfo?.image}}
            resizeMode="stretch"
            style={[
              styles.imageStyle,
              {
                height: isOrientChange === 'sero' ? 400 : 900,
              },
            ]}
          />
          <View style={styles.StoreInfoContainer}>
            <Text style={styles.StoreTitle}>{storeInfo?.title}</Text>
            <Text style={styles.StoreDescription}>
              {storeInfo?.description}
            </Text>
          </View>
        </View>
      </ScrollView>
      <View
        style={{
          bottom: 50,
          position: 'absolute',

          width: '100%',
          alignSelf: 'center',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingHorizontal: 26,
        }}>
        <TouchableOpacity onPress={goToBack} style={styles.backButton}>
          <Icon name="arrowleft" type="antdesign" />
        </TouchableOpacity>

        {storeInfo?.url ? (
          <TouchableOpacity
            onPress={() => goToLink(storeInfo.url)}
            style={styles.backButton}>
            <Icon name="world" type="fontisto" />
          </TouchableOpacity>
        ) : null}
      </View>
    </SafeAreaView>
  );
};

export default StoreDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: whiteBackGround,
    padding: 1,
  },
  storeInfoContainer: {
    alignItems: 'center',
    flex: 1,
    paddingBottom: 100,
  },
  backButton: {
    width: 50,
    height: 50,
    borderRadius: 50,
    backgroundColor: whiteBackGround,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageStyle: {
    width: '100%',
  },
  StoreInfoContainer: {
    marginTop: 40,
    paddingHorizontal: 26,
  },
  StoreTitle: {
    fontWeight: '600',
    fontSize: 25,
    maxWidth: '60%',
    marginBottom: 24,
  },
  StoreDescription: {
    color: 'gray',
    fontSize: 16,
  },
});
