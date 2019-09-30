import React, { lazy, Suspense } from 'react';
import PropTypes from 'prop-types';
import { View, Text, TouchableOpacity } from 'react-native';

const Details = ({ navigation }) => {
  const goBack = () => navigation.goBack();
  const { renderComponent, data } = navigation.state.params;
  const { navigate } = navigation;

  const getRenderComponent = () => {
    switch (renderComponent) {
      case 'FishDescription': return lazy(() => import('../components/FishDescription'));
      default: null;
    }
  };

  const RenderComponent = getRenderComponent();

  return (
    <View style={{ flex: 1 }}>
      <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }} onPress={goBack}>
        <Text
          style={{
            color: '#fff',
            fontSize: 36,
            fontWeight: 'bold',
            paddingRight: 7,
            paddingBottom: 10.5,
          }}
        >
          &larr;
        </Text>
        <Text style={{ color: '#fff', fontSize: 36, fontWeight: 'bold' }}>
          Details
        </Text>
      </TouchableOpacity>
      <Suspense fallback={null}>
        <RenderComponent {...data} navigate={navigate} />
      </Suspense>
    </View>
  );
};

Details.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default Details;
