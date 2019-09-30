import { createStackNavigator } from 'react-navigation-stack';
import { TABS } from '../constants';
import { Settings } from '../screens';
import { withGradient } from '../hocs';

const SettingsNavigator = createStackNavigator({
  [TABS.News]: {
    screen: withGradient(Settings),
    navigationOptions: {
      title: TABS.News,
      header: null,
      headerBackTitle: null,
    },
  },
});

export default SettingsNavigator;
