import { createStackNavigator } from 'react-navigation-stack';
import { TABS } from '../constants';
import { Settings } from '../screens';
import { connectErrorHandling } from '../hocs/errorHadnling';

const SettingsNavigator = createStackNavigator({
  [TABS.News]: {
    screen: connectErrorHandling(Settings),
    navigationOptions: {
      title: TABS.News,
      header: null,
      headerBackTitle: null,
    },
  },
});

export default SettingsNavigator;
