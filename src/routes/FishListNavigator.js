import { createStackNavigator } from 'react-navigation-stack';

import navigationConfig from './navigationConfig';
import { TABS } from '../constants';
import { FishList, Details, MapInfo, FoodInfo } from '../screens';
import { withFetchData } from '../hocs';
import { connectErrorHandling } from '../hocs/errorHadnling';

const FishListNavigator = createStackNavigator({
  [TABS.FishList]: {
    screen: connectErrorHandling(withFetchData(FishList)),
    navigationOptions: {
      title: TABS.FishList,
      header: null,
      headerBackTitle: null,
    },
  },
  [TABS.Details]: {
    screen: connectErrorHandling(Details),
    navigationOptions: {
      title: TABS.Details,
      header: null,
      headerBackTitle: null,
    },
  },
  [TABS.MapInfo]: {
    screen: connectErrorHandling(MapInfo),
    navigationOptions: {
      title: TABS.MapInfo,
      header: null,
      headerBackTitle: null,
    },
  },
  [TABS.FoodInfo]: {
    screen: connectErrorHandling(FoodInfo),
    navigationOptions: {
      title: TABS.FoodInfo,
      header: null,
      headerBackTitle: null,
    },
  },
}, navigationConfig);

export default FishListNavigator;
