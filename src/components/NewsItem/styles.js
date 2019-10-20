import { StyleSheet } from 'react-native';
import { ITEM_MARGIN } from '../../styles/margins';
import { SECONDARY_TEXT_PADDING } from '../../styles/paddings';
import { MAIN_THEME } from '../../styles/colors';
import { SUB_TEXT_FONT_SIZE } from '../../styles/fontSizes';
import { BORDER_RADIUS_COMMON } from '../../styles/borders';

const styles = StyleSheet.create({
  container: {
    borderColor: MAIN_THEME.PRIMARY_COLOR,
    minHeight: 200,
    borderWidth: 2,
    borderRadius: BORDER_RADIUS_COMMON / 2,
    marginBottom: ITEM_MARGIN,
    overflow: 'hidden',
  },
  mainViewImage: {
    width: '100%',
    minHeight: 200,
    position: 'relative',
    justifyContent: 'flex-end',
    borderRadius: BORDER_RADIUS_COMMON,
  },
  textContainer: {
    padding: SECONDARY_TEXT_PADDING,
    backgroundColor: 'rgba(0, 0, 0, .5)',
  },
  text: {
    color: MAIN_THEME.PRIMARY_COLOR,
    fontSize: SUB_TEXT_FONT_SIZE,
  },
  headText: {
    fontWeight: 'bold',
    marginBottom: ITEM_MARGIN / 2,
  }
});

export default styles;
