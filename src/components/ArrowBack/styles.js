import { StyleSheet } from 'react-native';

import { SECONDARY_ASSET_PADDING } from '../../styles/paddings';
import { HEADER_FONT_SIZE } from '../../styles/fontSizes';
import { PRIMARY_COLOR } from '../../styles/colors';

const styles = StyleSheet.create({
  container: { flexDirection: 'row', alignItems: 'center' },
  text: {
    color: PRIMARY_COLOR,
    fontSize: HEADER_FONT_SIZE,
    fontWeight: 'bold',
    paddingRight: SECONDARY_ASSET_PADDING,
    paddingBottom: (SECONDARY_ASSET_PADDING / 2) * 3,
  },
  arrow: {
    color: PRIMARY_COLOR,
    fontSize: HEADER_FONT_SIZE,
    fontWeight: 'bold',
  },
});

export default styles;
