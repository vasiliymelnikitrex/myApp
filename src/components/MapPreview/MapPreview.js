import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, ImageBackground } from 'react-native';
import IconFish from 'react-native-vector-icons/MaterialCommunityIcons';

import { PushableWrapper } from '..';
import { TABS, TABBAR_ICONS } from '../../constants';
import mapArea from '../../assets/map_preview.png';
import { MAIN_THEME } from '../../styles/colors';

import styles from './styles';

const MapPreview = ({ onPress, location }) => {
  const locationsPositions = location.map(loc => Object.keys(loc)[0]);

  return (
    <PushableWrapper
      onPress={onPress(TABS.MapInfo)}
      style={styles.mainViewContainer}
    >
      <ImageBackground // TODO: Fast Image Bg
        source={mapArea}
        resizeMode="stretch"
        style={styles.mainViewImage}
      >
        {locationsPositions.map(loc => (
          <IconFish
            style={{ ...styles.mainViewIcon, ...styles[loc] }}
            name={TABBAR_ICONS[TABS.FishList]}
            size={20}
            color={MAIN_THEME.ACTIVE_ICON_COLOR}
          />
        ))}
        <View style={styles.mainViewLabel}>
          <Text>Open map</Text>
          {location.map(item =>
            Object.keys(item).map(key => <Text>{key}</Text>),)}
        </View>
      </ImageBackground>
    </PushableWrapper>
  );
};

MapPreview.propTypes = {
  onPress: PropTypes.func,
  location: PropTypes.arrayOf(PropTypes.shape),
};

MapPreview.defaultProps = {
  onPress: null,
  location: [],
};

export default MapPreview;
