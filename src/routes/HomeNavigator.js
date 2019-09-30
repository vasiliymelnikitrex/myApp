import { createStackNavigator } from 'react-navigation-stack';
import { TABS } from '../constants';
import { Home } from '../screens';
import { withGradient } from '../hocs';

const HomeNavigator = createStackNavigator({
  [TABS.Home]: {
    screen: withGradient(Home),
    navigationOptions: {
      title: TABS.Home,
      header: null,
      headerBackTitle: null,
    },
  },
});

export default HomeNavigator;
