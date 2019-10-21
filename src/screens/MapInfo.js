import React from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
} from 'react-native';

import { Container, ArrowBack } from '../components';

export const MapInfo = ({ navigation }) => {
  const { params: { location }, routeName } = navigation.state;
  const goBack = () => navigation.goBack();

  return (
    <Container>
      <ArrowBack title={routeName} goBack={goBack} />
      <View>
        {
          location.map(loc => Object.keys(loc).map(locKey => <Text>{`${locKey}: ${loc[locKey]}`}</Text>))
        }
      </View>
    </Container>
  );
};

MapInfo.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default MapInfo;
