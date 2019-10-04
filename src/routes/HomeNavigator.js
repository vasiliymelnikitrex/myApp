import { createStackNavigator } from 'react-navigation-stack';
import { TABS } from '../constants';
import { Home } from '../screens';
import { connectErrorHandling } from '../hocs/errorHadnling';

const HomeNavigator = createStackNavigator({
  [TABS.Home]: {
    screen: connectErrorHandling(Home),
    navigationOptions: {
      title: TABS.Home,
      header: null,
      headerBackTitle: null,
    },
  },
});

export default HomeNavigator;
