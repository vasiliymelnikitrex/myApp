import { createStackNavigator } from 'react-navigation-stack';
import { TABS } from '../constants';
import { Home } from '../screens';

const HomeNavigator = createStackNavigator({
  [TABS.Home]: {
    screen: Home,
    navigationOptions: {
      title: TABS.Home,
      header: null,
      headerBackTitle: null,
    },
  },
});

export default HomeNavigator;
