import { StyleSheet } from 'react-native';
import { ITEM_MARGIN } from '../../styles/margins';
import { SECONDARY_TEXT_PADDING } from '../../styles/paddings';
import { PRIMARY_COLOR } from '../../styles/colors';
import { SUB_TEXT_FONT_SIZE } from '../../styles/fontSizes';

const styles = StyleSheet.create({
  mainViewImage: {
    width: '100%',
    height: 200,
    position: 'relative',
    marginBottom: ITEM_MARGIN,
    justifyContent: 'flex-end',
  },
  textContainer: {
    padding: SECONDARY_TEXT_PADDING,
    backgroundColor: 'rgba(0, 0, 0, .35)',
  },
  text: {
    color: PRIMARY_COLOR,
    fontSize: SUB_TEXT_FONT_SIZE,
  },
  headText: {
    fontWeight: 'bold',
    marginBottom: ITEM_MARGIN / 2,
  }
});

export default styles;
