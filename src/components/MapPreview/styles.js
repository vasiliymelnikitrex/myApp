import { StyleSheet } from 'react-native';

import { LOCATIONS } from './config';
import { BORDER_RADIUS_COMMON } from '../../styles/borders';

const styles = StyleSheet.create({
  mainViewContainer: {
    width: '100%',
    height: 300,
    position: 'relative',
    borderRadius: BORDER_RADIUS_COMMON,
    overflow: 'hidden'
  },
  mainViewImage: {
    width: '100%',
    height: 300,
    position: 'relative',
  },
  mainViewIcon: {
    position: 'absolute',
  },
  mainViewLabel: {
    position: 'absolute',
    left: 10,
    bottom: 5,
  },
  ...LOCATIONS,
});

export default styles;
