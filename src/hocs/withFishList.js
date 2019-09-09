import React from 'react';

export default CustomComponent => props => {
  const fishes = ['fishes'];

  return <CustomComponent fishes={fishes} {...props} />;
};
