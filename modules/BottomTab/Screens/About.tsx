import {StyleSheet, Text, View} from 'react-native';
import React, {useLayoutEffect} from 'react';
import {Icon} from 'react-native-elements/dist/icons/Icon';
import {red, whiteBackGround} from '../../utils/styles';
import {AboutBottomScreenProps} from '../types/bottomNavigationType';
import Header from '../components/Header';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: whiteBackGround,
    paddingTop: 10,
    paddingHorizontal: 16,
  },
  contentBox: {
    flex: 0.5,
    justifyContent: 'space-between',
  },
  contentFont: {
    fontSize: 16,
    fontWeight: '800',
  },
  iconContainer: {
    borderWidth: 1,
  },
});

const About = ({navigation, route}: AboutBottomScreenProps) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      header: () => <Header route={route} />,
    });
  }, [navigation, route, route.name]);

  return (
    <View style={styles.container}>
      <View style={styles.contentBox}>
        <Text style={styles.contentFont}>안녕하세요 지원자 윤재진 입니다.</Text>
        <Text style={styles.contentFont}>
          저를 좋게 봐주셔서 좋은 기회를 주심에
        </Text>
        <Text style={styles.contentFont}>감사드립니다.</Text>
        <Text style={styles.contentFont}>면접 과제를 통해 이렇게 앱상에서</Text>
        <Text style={styles.contentFont}>먼저 인사드리게 되었습니다.</Text>
        <Text style={styles.contentFont}>잘부탁드립니다.</Text>
        <Icon
          reverse
          name="heart"
          type="antdesign"
          iconStyle={{color: red}}
          containerStyle={styles.iconContainer}
        />
      </View>
    </View>
  );
};

export default About;
