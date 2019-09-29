import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export default ({ navigation }) => {
  const goBack = () => navigation.goBack();

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
    </View>
  );
};
