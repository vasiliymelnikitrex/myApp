import React from 'react';

import { Container } from '../components/Container';
import ArrowBack from '../components/ArrowBack';

export default ({ navigation }) => {
  const { routeName } = navigation.state;
  const goBack = () => navigation.goBack();
  return (
    <Container>
      <ArrowBack title={routeName} goBack={goBack} />
    </Container>
  );
};
