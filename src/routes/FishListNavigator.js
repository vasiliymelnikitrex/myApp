import { createStackNavigator } from 'react-navigation-stack';

import navigationConfig from './navigationConfig';
import { TABS } from '../constants';
import { FishList, Details, MapInfo, FoodInfo } from '../screens';
import { withFetchData } from '../hocs';

const FishListNavigator = createStackNavigator({
  [TABS.FishList]: {
    screen: withFetchData(FishList),
    navigationOptions: {
      title: TABS.FishList,
      header: null,
      headerBackTitle: null,
    },
  },
  [TABS.Details]: {
    screen: Details,
    navigationOptions: {
      title: TABS.Details,
      header: null,
      headerBackTitle: null,
    },
  },
  [TABS.MapInfo]: {
    screen: MapInfo,
    navigationOptions: {
      title: TABS.MapInfo,
      header: null,
      headerBackTitle: null,
    },
  },
  [TABS.FoodInfo]: {
    screen: FoodInfo,
    navigationOptions: {
      title: TABS.FoodInfo,
      header: null,
      headerBackTitle: null,
    },
  },
}, navigationConfig);

export default FishListNavigator;
