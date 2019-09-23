import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, TouchableOpacity } from 'react-native';

const Details = ({ navigation }) => {
  const goBack = () => navigation.goBack();

  // TODO: navigation.state.params.data
  return (
    <View style={{ flex: 1 }}>
      <TouchableOpacity onPress={goBack}>
        <Text style={{ color: '#fff', fontSize: 36, fontWeight: 'bold' }}><Text style={{ alignItems: 'flex-start' }}>&larr;</Text> Details</Text>
      </TouchableOpacity>
    </View>
  );
};

Details.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default Details;
