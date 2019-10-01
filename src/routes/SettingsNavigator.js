import { createStackNavigator } from 'react-navigation-stack';
import { TABS } from '../constants';
import { Settings } from '../screens';

const SettingsNavigator = createStackNavigator({
  [TABS.News]: {
    screen: Settings,
    navigationOptions: {
      title: TABS.News,
      header: null,
      headerBackTitle: null,
    },
  },
});

export default SettingsNavigator;
