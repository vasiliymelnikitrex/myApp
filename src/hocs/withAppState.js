import React, { useState, useEffect } from 'react';
import { AppState } from 'react-native';

import { APP_STATE } from '../regex';

export default CustomComponent => props => {
  const [appState, setAppState] = useState(AppState.currentState);

  const handleAppStateChange = nextAppState =>
    (appState.match(APP_STATE) && nextAppState === 'active') ||
    setAppState(nextAppState); // TODO

  useEffect(() => {
    AppState.addEventListener('change', handleAppStateChange);
    return () => {
      AppState.removeEventListener('change', handleAppStateChange);
    };
  }, []);

  return <CustomComponent {...props} />;
};
