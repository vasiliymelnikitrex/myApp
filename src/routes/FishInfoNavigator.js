import { createStackNavigator } from 'react-navigation-stack';
import { TABS } from '../constants';
import { FishInfo, Details, MapInfo, FoodInfo } from '../screens';
import { withGradient, withFishList } from '../hocs';

const FishInfoNavigator = createStackNavigator({
  [TABS.FishInfo]: {
    screen: withFishList(withGradient(FishInfo)),
    navigationOptions: {
      title: TABS.FishInfo,
      header: null,
      headerBackTitle: null,
    },
  },
  [TABS.Details]: {
    screen: withGradient(Details),
    navigationOptions: {
      title: TABS.Details,
      header: null,
      headerBackTitle: null,
    },
  },
  [TABS.MapInfo]: {
    screen: withGradient(MapInfo),
    navigationOptions: {
      title: TABS.MapInfo,
      header: null,
      headerBackTitle: null,
    },
  },
  [TABS.FoodInfo]: {
    screen: withGradient(FoodInfo),
    navigationOptions: {
      title: TABS.FoodInfo,
      header: null,
      headerBackTitle: null,
    },
  },
});

export default FishInfoNavigator;
