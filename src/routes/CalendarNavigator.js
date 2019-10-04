import { createStackNavigator } from 'react-navigation-stack';
import { TABS } from '../constants';
import { Calendar } from '../screens';
import { connectErrorHandling } from '../hocs/errorHadnling';

const CalendarNavigator = createStackNavigator({
  [TABS.News]: {
    screen: connectErrorHandling(Calendar),
    navigationOptions: {
      title: TABS.News,
      header: null,
      headerBackTitle: null,
    },
  },
});

export default CalendarNavigator;
