import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, View, Text, Image } from 'react-native';

import { FISH_IMG_BASE_URL } from '../../constants';

const FishItem = ({ name, src, onPress }) => (
  <TouchableOpacity
    style={{
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      margin: 10,
      paddingHorizontal: 20,
      paddingVertical: 20,
      backgroundColor: '#6058A5',
      borderRadius: 15,
      borderColor: 'transparent',
      borderWidth: 1,
    }}
    onPress={onPress}
  >
    <View style={{ flex: 2 }}>
      <Text
        style={{
          justifyContent: 'flex-end',
          color: '#fdecff',
          fontSize: 22,
          fontWeight: 'bold',
          paddingRight: 25,
        }}
      >
        {name}
      </Text>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'flex-start',
          alignItems: 'center',
        }}
      >
        <Text
          style={{
            paddingTop: 4,
            paddingRight: 6,
            color: '#fdecff',
            fontSize: 14,
          }}
        >
          more info
        </Text>
        <Text
          style={{
            fontSize: 24,
            color: '#fdecff',
          }}
        >
          &rsaquo;
        </Text>
      </View>
    </View>
    <Image
      style={{ height: 50, flex: 1, justifyContent: 'flex-end' }}
      source={{ uri: `${FISH_IMG_BASE_URL}${src}` }}
      resizeMode="contain"
      resizeMethod="resize"
    />
  </TouchableOpacity>
);

FishItem.propTypes = {
  src: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onPress: PropTypes.func,
};

FishItem.defaultProps = {
  onPress: PropTypes.null,
};

export default FishItem;
