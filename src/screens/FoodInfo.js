import React from 'react';
import { View, ScrollView, Text, TouchableOpacity } from 'react-native';

export default ({ navigation }) => {
  const goBack = () => navigation.goBack();
  const { params: foodProps } = navigation.state;
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
          FoodInfo
        </Text>
      </TouchableOpacity>
      <ScrollView>
        {Object.keys(foodProps).map(
          foodParameter =>
            foodProps[foodParameter] && (
              <Text key={foodParameter} style={{ color: '#fff', fontSize: 20 }}>
                {foodParameter}: {foodProps[foodParameter]}
              </Text>
            ),
        )}
      </ScrollView>
    </View>
  );
};
