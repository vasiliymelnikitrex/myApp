import { StyleSheet } from 'react-native';

import { MAIN_THEME } from '../../styles/colors';
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
    left: 30,
    top: 30,
  },
  mainViewLabel: {
    position: 'absolute',
    left: 10,
    bottom: 5,
  },
  mainViewText: {
    justifyContent: 'flex-end',
    color: MAIN_THEME.PRIMARY_COLOR,
    fontWeight: 'bold',
  },
});

export default styles;
