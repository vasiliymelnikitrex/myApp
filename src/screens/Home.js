import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, Button } from 'react-native';

const Home = ({ navigation }) => (
  <View style={{ backgroundColor: '#ffefd5', flex: 1 }}>
    <Text style={{ color: '#8da645', fontSize: 36, fontWeight: 'bold' }}>
      Home
    </Text>
    <Button title="List" onPress={() => navigation.navigate('List')} />
    <Button title="Options" onPress={() => navigation.navigate('Options')} />
    <Button title="Feedback" onPress={() => navigation.navigate('Feedback')} />
  </View>
);

Home.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default Home;
