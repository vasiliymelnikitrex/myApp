import { createStackNavigator } from 'react-navigation-stack';
import { TABS } from '../constants';
import { News } from '../screens';
import { withFetchData } from '../hocs';
import { connectErrorHandling } from '../hocs/errorHadnling';

const NewsNavigator = createStackNavigator({
  [TABS.News]: {
    screen: connectErrorHandling(withFetchData(News)),
    navigationOptions: {
      title: TABS.News,
      header: null,
      headerBackTitle: null,
    },
  },
});

export default NewsNavigator;
