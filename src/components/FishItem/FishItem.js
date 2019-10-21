import React from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import FastImage from 'react-native-fast-image';

import PushableWrapper from '../PushableWrapper';
import { FISH_IMG_BASE_URL } from '../../constants';
import styles from './styles';

const FishItem = ({ name, src, onPress }) => {
  const uri = `${FISH_IMG_BASE_URL}${src}`;
  FastImage.preload([
    {
      uri,
      headers: {},
    },
  ]);

  return (
    <PushableWrapper style={styles.container} onPress={onPress}>
      <View style={styles.itemLabel}>
        <Text style={styles.labelName}>{name}</Text>
        <View style={styles.labelLinkContainer}>
          <Text style={styles.labelLinkText}>more info</Text>
          <Text style={styles.labelLinkArrow}>&rsaquo;</Text>
        </View>
      </View>
      <FastImage
        style={styles.itemImage}
        source={{
          priority: FastImage.priority.high,
          uri,
        }}
        resizeMode={FastImage.resizeMode.contain}
      />
    </PushableWrapper>
  );
};

FishItem.propTypes = {
  src: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onPress: PropTypes.func,
};

FishItem.defaultProps = {
  onPress: PropTypes.null,
};

export default FishItem;
