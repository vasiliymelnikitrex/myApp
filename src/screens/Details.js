import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, TouchableOpacity } from 'react-native';

import FishDescription from '../components/FishDescription';

const Details = ({ navigation }) => {
  const goBack = () => navigation.goBack();
  const { RenderComponent, data } = navigation.state.params;

  return (
    <View style={{ flex: 1 }}>
      <TouchableOpacity style={{ flexDirection: 'row' }} onPress={goBack}>
        <Text
          style={{
            color: '#fff',
            fontSize: 36,
            fontWeight: 'bold',
            paddingRight: 10,
          }}
        >
          &larr;
        </Text>
        <Text style={{ color: '#fff', fontSize: 36, fontWeight: 'bold' }}>
          Details
        </Text>
      </TouchableOpacity>
      {
        {
          FishDescription: <FishDescription {...data} />,
        }[RenderComponent]
      }
    </View>
  );
};

Details.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default Details;
