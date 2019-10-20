import { StyleSheet } from 'react-native';

import { ITEM_MARGIN } from '../../styles/margins';
import { BORDER_RADIUS_COMMON } from '../../styles/borders';
import {
  ITEM_HORIZONTAL_PADDING,
  ITEM_VERTICAL_PADDING,
  SECONDARY_TEXT_PADDING,
} from '../../styles/paddings';
import {
  TEXT_FONT_SIZE,
  SUB_TEXT_FONT_SIZE,
} from '../../styles/fontSizes';
import { MAIN_THEME } from '../../styles/colors';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: ITEM_MARGIN,
    paddingHorizontal: ITEM_HORIZONTAL_PADDING * 1.375,
    paddingVertical: ITEM_VERTICAL_PADDING,
    backgroundColor: MAIN_THEME.TABBAR_BG_COLOR,
    borderRadius: BORDER_RADIUS_COMMON,
    borderColor: 'transparent',
    borderWidth: 1,
  },
  itemLabel: { flex: 2 },
  labelName: {
    justifyContent: 'flex-end',
    color: MAIN_THEME.PRIMARY_COLOR,
    fontSize: TEXT_FONT_SIZE,
    fontWeight: 'bold',
    paddingRight: ITEM_HORIZONTAL_PADDING,
  },
  labelLinkContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  labelLinkText: {
    paddingTop: SECONDARY_TEXT_PADDING,
    paddingRight: SECONDARY_TEXT_PADDING,
    color: MAIN_THEME.PRIMARY_COLOR,
    fontSize: SUB_TEXT_FONT_SIZE,
  },
  labelLinkArrow: {
    fontSize: TEXT_FONT_SIZE,
    color: MAIN_THEME.PRIMARY_COLOR,
  },
  itemImage: { height: 70, flex: 1, justifyContent: 'flex-end' },
});

export default styles;
