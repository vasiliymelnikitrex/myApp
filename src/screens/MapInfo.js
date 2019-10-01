import React from 'react';

import { Container, ArrowBack } from '../components';

export default ({ navigation }) => {
  const { routeName } = navigation.state;
  const goBack = () => navigation.goBack();
  return (
    <Container>
      <ArrowBack title={routeName} goBack={goBack} />
    </Container>
  );
};
