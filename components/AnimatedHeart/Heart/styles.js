/* @flow */

import { StyleSheet } from 'react-native-web';

const styles: {
  heart: Object,
  heartShape: Object,
  leftHeart: Object,
  rightHeart: Object,
} = StyleSheet.create({
  heart: {
    backgroundColor: 'transparent',
    height: 50,
    width: 50,
  },
  heartShape: {
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    height: 45,
    position: 'absolute',
    top: 0,
    width: 30,
  },
  leftHeart: {
    left: 5,
    transform: [
      { rotate: '-45deg' },
    ],
  },
  rightHeart: {
    right: 5,
    transform: [
      { rotate: '45deg' },
    ],
  },
});

export default styles;
