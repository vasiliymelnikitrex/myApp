import React from 'react';
import { View, ScrollView, Text } from 'react-native';
import ArrowBack from '../components/ArrowBack';
import { TEXT_FONT_SIZE } from '../styles/fontSizes';

export default ({ navigation }) => {
  const goBack = () => navigation.goBack();
  const { params: foodProps, routeName } = navigation.state;
  return (
    <View style={{ flex: 1 }}>
      <ArrowBack title={routeName} goBack={goBack} />
      <ScrollView>
        {Object.keys(foodProps).map(
          foodParameter =>
            foodProps[foodParameter] && (
              <Text key={foodParameter} style={{ color: '#fdecff', fontSize: TEXT_FONT_SIZE }}>
                {foodParameter}: {foodProps[foodParameter]}
              </Text>
            ),
        )}
      </ScrollView>
    </View>
  );
};
