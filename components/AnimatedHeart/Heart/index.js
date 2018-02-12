/* @flow */

import * as React from 'react';
import { View } from 'react-native-web';

import styles from './styles';

type PropsFlowType = {
  color: string,
};

const Heart = ({
  color,
}: PropsFlowType): React.Node => (
  <View
    style={styles.heart}
  >

    <View
      style={[
        styles.heartShape,
        styles.leftHeart,
        { backgroundColor: color },
      ]}
    />

    <View
      style={[
        styles.heartShape,
        styles.rightHeart,
        { backgroundColor: color },
      ]}
    />

  </View>
);

export default Heart;
