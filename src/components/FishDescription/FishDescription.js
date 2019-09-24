import React, { useEffect } from 'react';
import { useDispatch, /*useSelector*/ } from 'react-redux';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';

// import { getFishInfoSelector } from '../../redux/selectors';
import { getFishInfo } from '../../redux/actions';

const FishDescription = ({ path }) => {
  const dispatch = useDispatch();
  // const fishInfo = useSelector(getFishInfoSelector) TODO:

  useEffect(() => {
    dispatch(getFishInfo('REQUEST', path));
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <Text
        style={{
          justifyContent: 'flex-end',
          color: '#fff',
          fontSize: 50,
          fontWeight: 'bold',
          paddingRight: 50,
        }}
      >
        123
      </Text>
    </View>
  );
};

FishDescription.propTypes = {
  path: PropTypes.string.isRequired,
};

export default FishDescription;
