import React from 'react';
import PropTypes from 'prop-types';
import { Text, TouchableOpacity } from 'react-native';

const ArrowBack = ({ title, goBack }) => (
  <TouchableOpacity
    style={{ flexDirection: 'row', alignItems: 'center' }}
    onPress={goBack}
  >
    <Text
      style={{
        color: '#fdecff',
        fontSize: 36,
        fontWeight: 'bold',
        paddingRight: 7,
        paddingBottom: 10.5,
      }}
    >
      &larr;
    </Text>
    <Text style={{ color: '#fdecff', fontSize: 36, fontWeight: 'bold' }}>
      {title}
    </Text>
  </TouchableOpacity>
);

ArrowBack.propTypes = {
  title: PropTypes.string.isRequired,
  goBack: PropTypes.func.isRequired,
};

export default ArrowBack;
