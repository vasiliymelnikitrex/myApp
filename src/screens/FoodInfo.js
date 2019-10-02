import React from 'react';
import { ScrollView, Text } from 'react-native';

import { Container, ArrowBack } from '../components';

export default ({ navigation }) => {
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
