import { createStackNavigator } from 'react-navigation-stack';
import { TABS } from '../constants';
import { News } from '../screens';
import { withNewsList } from '../hocs';

const NewsNavigator = createStackNavigator({
  [TABS.News]: {
    screen: withNewsList(News),
    navigationOptions: {
      title: TABS.News,
      header: null,
      headerBackTitle: null,
    },
  },
});

export default NewsNavigator;
