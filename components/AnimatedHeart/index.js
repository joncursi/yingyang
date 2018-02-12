/* @flow */

import * as React from 'react';
import {
  Animated,
  Dimensions,
} from 'react-native-web';

import Heart from './Heart';
import styles from './styles';

const ANIMATION_END_Y = Math.ceil(Dimensions.get('window').height * 0.5);
const NEGATIVE_END_Y = ANIMATION_END_Y * -1;

type PropsFlowType = {
  color: string,
  onComplete: Function,
  style: any,
};

type StateFlowType = {
  position: number,
};

class AnimatedHeart extends React.Component<PropsFlowType, StateFlowType> {
  props: PropsFlowType;

  state: StateFlowType = {
    position: new Animated.Value(0),
  };

  componentWillMount() {
    const {
      position,
    } = this.state;

    /* eslint-disable immutable/no-mutation */
    this._yAnimation = position.interpolate({
      inputRange: [NEGATIVE_END_Y, 0],
      outputRange: [ANIMATION_END_Y, 0],
    });

    this._opacityAnimation = this._yAnimation.interpolate({
      inputRange: [0, ANIMATION_END_Y],
      outputRange: [1, 0],
    });

    this._scaleAnimation = this._yAnimation.interpolate({
      extrapolate: 'clamp',
      inputRange: [0, 15, 30],
      outputRange: [0, 1.2, 1],
    });

    this._xAnimation = this._yAnimation.interpolate({
      inputRange: [0, ANIMATION_END_Y / 2, ANIMATION_END_Y],
      outputRange: [0, 15, 0],
    });

    this._rotateAnimation = this._yAnimation.interpolate({
      inputRange: [
        0,
        ANIMATION_END_Y / 4,
        ANIMATION_END_Y / 3,
        ANIMATION_END_Y / 2,
        ANIMATION_END_Y,
      ],
      outputRange: ['0deg', '-2deg', '0deg', '2deg', '0deg'],
    });
    /* eslint-enable immutable/no-mutation */
  }

  componentDidMount() {
    const {
      onComplete,
    } = this.props;

    Animated.timing(this.state.position, {
      duration: 2000,
      toValue: NEGATIVE_END_Y,
    }).start(onComplete);
  }

  _getHeartAnimationStyle(): Object {
    return {
      opacity: this._opacityAnimation,
      transform: [
        { translateY: this.state.position },
        { translateX: this._xAnimation },
        { scale: this._scaleAnimation },
        { rotate: this._rotateAnimation },
      ],
    };
  }

  render(): React.Node {
    const {
      color,
      style,
    } = this.props;

    return (
      <Animated.View
        style={[
          styles.heartWrap,
          this._getHeartAnimationStyle(),
          style,
        ]}
      >
        <Heart
          color={color}
        />
      </Animated.View>
    );
  }
}

export default AnimatedHeart;
