import React, { useState, useEffect } from 'react';
import { Animated, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

const PushableWrapper = ({ style, onPress, children }) => {
  const [anim] = useState({
    pressAnim: new Animated.Value(1),
    appearAnim: new Animated.Value(0),
  });

  const pressAnimation = () =>
    Animated.timing(anim.pressAnim, {
      toValue: 0.95,
      duration: 100,
    }).start();

  const releaseAnimation = () =>
    Animated.timing(anim.pressAnim, {
      toValue: 1,
      duration: 100,
    }).start();

  const handlePressIn = () => pressAnimation();

  const handlePressOut = () => releaseAnimation();

  useEffect(() => {
    Animated.timing(anim.appearAnim, {
      toValue: 1,
      duration: 250,
    }).start();
  }, []);

  return (
    <TouchableOpacity
      onPress={onPress}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
    >
      <Animated.View style={styles.animation(anim.pressAnim, anim.appearAnim, style)}>
        {children}
      </Animated.View>
    </TouchableOpacity>
  );
};

PushableWrapper.propTypes = {
  style: PropTypes.object,
  onPress: PropTypes.func,
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
};

PushableWrapper.defaultProps = {
  style: {},
  onPress: null,
};

export default PushableWrapper;
