import React from 'react';
import PropTypes from 'prop-types';
import { ScrollView, Text } from 'react-native';

import { Container, ArrowBack } from '../components';

export const FoodInfo = ({ navigation }) => {
  const goBack = () => navigation.goBack();
  const { params: foodProps, routeName } = navigation.state;
  return (
    <Container>
      <ArrowBack title={routeName} goBack={goBack} />
      <ScrollView>
        {Object.keys(foodProps).map(
          foodParameter =>
            foodProps[foodParameter] && (
              <Text key={foodParameter}>
                {foodParameter}: {foodProps[foodParameter]}
              </Text>
            ),
        )}
      </ScrollView>
    </Container>
  );
};

FoodInfo.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default FoodInfo;
