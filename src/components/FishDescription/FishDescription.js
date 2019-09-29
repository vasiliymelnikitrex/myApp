import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import {
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';

import { getFishInfoSelector } from '../../redux/selectors';
import { getFishInfo } from '../../redux/actions';
import { removeTags } from '../../helpers';
import map from '../../assets/map_preview.png';

const FishDescription = ({ path, navigate }) => {
  const dispatch = useDispatch();
  const fishInfo = useSelector(getFishInfoSelector);

  const onPress = screen => () => navigate(screen);

  useEffect(() => {
    dispatch(getFishInfo('REQUEST', path));
  }, []);

  return fishInfo ? (
    <ScrollView style={{ flex: 1 }}>
      <View style={{ width: '100%', height: 300 }}>
        <ImageBackground
          source={map}
          resizeMode="stretch"
          style={{ width: '100%', height: '100%', position: 'relative' }}
        >
          <Text style={{ position: 'absolute', left: 30, top: 30 }}>v</Text>
        </ImageBackground>
      </View>
      <Text
        style={{
          justifyContent: 'flex-end',
          color: '#fff',
          fontWeight: 'bold',
        }}
      >
        {fishInfo && removeTags(fishInfo.Availability)}
      </Text>
      <Text
        style={{
          justifyContent: 'flex-end',
          color: '#fff',
          fontWeight: 'bold',
        }}
      >
        {removeTags(fishInfo.Biology)}
      </Text>
      <TouchableOpacity onPress={onPress('MapInfo')}>
        <Text>Map</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={onPress('FoodInfo')}>
        <Text>Food</Text>
      </TouchableOpacity>
    </ScrollView>
  ) : (
    <View>
      <Text>Loading...</Text>
    </View>
  );
};

FishDescription.propTypes = {
  path: PropTypes.string.isRequired,
};

export default FishDescription;
