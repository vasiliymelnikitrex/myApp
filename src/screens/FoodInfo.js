import React from 'react';
import { ScrollView, Text } from 'react-native';

import { Container, ArrowBack } from '../components';
import { TEXT_FONT_SIZE } from '../styles/fontSizes';
import { PRIMARY_COLOR } from '../styles/colors';

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
              <Text key={foodParameter} style={{ color: PRIMARY_COLOR, fontSize: TEXT_FONT_SIZE }}>
                {foodParameter}: {foodProps[foodParameter]}
              </Text>
            ),
        )}
      </ScrollView>
    </Container>
  );
};
