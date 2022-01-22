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
    flex: 0.8,
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
        <Text style={styles.contentFont}>
          안녕하세요! 지원자 윤재진 입니다.
        </Text>
        <Text style={styles.contentFont}>면접 과제를 통해 이렇게 앱상에서</Text>
        <Text style={styles.contentFont}>먼저 인사드리게 되었습니다.</Text>
        <Text style={styles.contentFont}>
          좋은 결과를 얻어 대면 면접에서 다시한번
        </Text>
        <Text style={styles.contentFont}>인사 드릴수 있었으면 좋겠습니다.</Text>
        <Text style={styles.contentFont}>또한 이런 좋은 기회를 주심에</Text>
        <Text style={styles.contentFont}>감사드립니다.</Text>

        <Text style={styles.contentFont}>제출한 면접과제는</Text>
        <Text style={styles.contentFont}>요구사항을 모두 구현했고</Text>
        <Text style={styles.contentFont}>
          추가 과제인 landScape지원도 완료하였습니다.
        </Text>
        <Text style={styles.contentFont}>
          공통 테스트 또한 필수/선택 테스트를 모두
        </Text>
        <Text style={styles.contentFont}>완료하였습니다.</Text>
        <Text style={styles.contentFont}>감사합니다!</Text>
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
