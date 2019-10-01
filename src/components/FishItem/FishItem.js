import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, View, Text, Image } from 'react-native';

import { FISH_IMG_BASE_URL } from '../../constants';
import { ITEM_MARGIN } from '../../styles/margins';
import { ITEM_HORIZONTAL_PADDING, ITEM_VERTICAL_PADDING, SECONDARY_TEXT_PADDING } from '../../styles/paddings';
import { SUB_HEADER_FONT_SIZE, SUB_TEXT_FONT_SIZE } from '../../styles/fontSizes';
import { PRIMARY_COLOR } from '../../styles/colors';

const FishItem = ({ name, src, onPress }) => (
  <TouchableOpacity
    style={{
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: ITEM_MARGIN,
      paddingHorizontal: ITEM_HORIZONTAL_PADDING,
      paddingVertical: ITEM_VERTICAL_PADDING,
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
          color: PRIMARY_COLOR,
          fontSize: SUB_HEADER_FONT_SIZE,
          fontWeight: 'bold',
          paddingRight: ITEM_HORIZONTAL_PADDING,
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
            paddingTop: SECONDARY_TEXT_PADDING,
            paddingRight: SECONDARY_TEXT_PADDING,
            color: PRIMARY_COLOR,
            fontSize: SUB_TEXT_FONT_SIZE,
          }}
        >
          more info
        </Text>
        <Text
          style={{
            fontSize: SUB_HEADER_FONT_SIZE,
            color: PRIMARY_COLOR,
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
