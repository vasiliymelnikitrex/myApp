import { createStackNavigator } from 'react-navigation-stack';
import { TABS } from '../constants';
import { Calendar } from '../screens';
import { withGradient } from '../hocs';

const CalendarNavigator = createStackNavigator({
  [TABS.News]: {
    screen: withGradient(Calendar),
    navigationOptions: {
      title: TABS.News,
      header: null,
      headerBackTitle: null,
    },
  },
});

export default CalendarNavigator;
