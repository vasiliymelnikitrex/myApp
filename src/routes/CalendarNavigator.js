import { createStackNavigator } from 'react-navigation-stack';
import { TABS } from '../constants';
import { Calendar } from '../screens';

const CalendarNavigator = createStackNavigator({
  [TABS.News]: {
    screen: Calendar,
    navigationOptions: {
      title: TABS.News,
      header: null,
      headerBackTitle: null,
    },
  },
});

export default CalendarNavigator;
