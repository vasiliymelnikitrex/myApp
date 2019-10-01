import React from 'react';
import PropTypes from 'prop-types';
import { Text, TouchableOpacity } from 'react-native';
import { SECONDARY_ASSET_PADDING } from '../../styles/paddings';
import { HEADER_FONT_SIZE } from '../../styles/fontSizes';
import { PRIMARY_COLOR } from '../../styles/colors';

const ArrowBack = ({ title, goBack }) => (
  <TouchableOpacity
    style={{ flexDirection: 'row', alignItems: 'center' }}
    onPress={goBack}
  >
    <Text
      style={{
        color: PRIMARY_COLOR,
        fontSize: HEADER_FONT_SIZE,
        fontWeight: 'bold',
        paddingRight: SECONDARY_ASSET_PADDING,
        paddingBottom: (SECONDARY_ASSET_PADDING / 2) * 3,
      }}
    >
      &larr;
    </Text>
    <Text style={{ color: PRIMARY_COLOR, fontSize: HEADER_FONT_SIZE, fontWeight: 'bold' }}>
      {title}
    </Text>
  </TouchableOpacity>
);

ArrowBack.propTypes = {
  title: PropTypes.string.isRequired,
  goBack: PropTypes.func.isRequired,
};

export default ArrowBack;
