import { StyleSheet } from 'react-native';

import { MAIN_THEME } from '../../styles/colors';
import { ITEM_VERTICAL_PADDING } from '../../styles/paddings';
import { TEXT_FONT_SIZE } from '../../styles/fontSizes';

const styles = StyleSheet.create({
  container: {
    paddingVertical: ITEM_VERTICAL_PADDING,
    color: MAIN_THEME.PRIMARY_COLOR,
    fontSize: TEXT_FONT_SIZE,
  },
});

export default styles;
