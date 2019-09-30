import React, { lazy, Suspense } from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';

import ArrowBack from '../components/ArrowBack';

const Details = ({ navigation }) => {
  const goBack = () => navigation.goBack();
  const { params: { renderComponent, data }, routeName } = navigation.state;
  const { navigate } = navigation;

  const getRenderComponent = () => {
    switch (renderComponent) {
      case 'FishDescription':
        return lazy(() => import('../components/FishDescription'));
      default:
        null;
    }
  };

  const RenderComponent = getRenderComponent();

  return (
    <View style={{ flex: 1 }}>
      <ArrowBack title={routeName} goBack={goBack} />
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
