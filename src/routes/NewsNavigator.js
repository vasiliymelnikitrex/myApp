import { createStackNavigator } from 'react-navigation-stack';
import { TABS } from '../constants';
import { News } from '../screens';

const NewsNavigator = createStackNavigator({
  [TABS.News]: {
    screen: News,
    navigationOptions: {
      title: TABS.News,
      header: null,
      headerBackTitle: null,
    },
  },
});

export default NewsNavigator;
