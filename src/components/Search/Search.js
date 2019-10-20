import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { TextInput } from 'react-native';

import { MAIN_THEME } from '../../styles/colors';
import styles from './styles';

const Search = ({ onChange }) => {
  const [value, onChangeText] = useState(null);

  const handleChange = text => {
    onChangeText(text);
    onChange(text)
  };

  return (
    <TextInput
      style={styles.container}
      placeholderTextColor={MAIN_THEME.PRIMARY_COLOR}
      fontWeight="bold"
      onChangeText={handleChange}
      value={value}
      placeholder="Search..."
    />
  );
}

Search.propTypes = {
  onChange: PropTypes.func,
};

Search.defaultProps = {
  onChange: null,
};

export default Search;
