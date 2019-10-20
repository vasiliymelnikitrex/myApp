import React from 'react';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createAppContainer } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';
import IconFish from 'react-native-vector-icons/MaterialCommunityIcons';
import { TABS, TABBAR_ICONS } from '../constants';
import {
  HomeNavigator,
  NewsNavigator,
  FishListNavigator,
  SettingsNavigator,
  CalendarNavigator,
} from '.';
import { TABBAR_TOP_PADDING, TABBAR_BOTTOM_PADDING } from '../styles/paddings';
import { SUB_TEXT_FONT_SIZE } from '../styles/fontSizes';
import { MAIN_THEME } from '../styles/colors';
import { withAppState } from '../hocs';

const navigationOptions = ({
  navigation: {
    state: { routeName },
  },
}) => ({
  tabBarIcon: ({ focused, tintColor }) => {
    const commonProps = {
      name: TABBAR_ICONS[routeName],
      size: TABBAR_ICONS[routeName] === 'fish' ? 32.5 : 22.5,
      color: focused ? MAIN_THEME.ACTIVE_TINT_COLOR : tintColor,
    };
    const Res = routeName === TABS.FishList ? IconFish : Icon;
    return <Res {...commonProps} />;
  },
});

const BottomNavigation = createBottomTabNavigator(
  {
    [TABS.Home]: { screen: HomeNavigator, navigationOptions },
    [TABS.Calendar]: { screen: CalendarNavigator, navigationOptions },
    [TABS.News]: { screen: NewsNavigator, navigationOptions },
    [TABS.FishList]: { screen: FishListNavigator, navigationOptions },
    [TABS.Settings]: { screen: SettingsNavigator, navigationOptions },
  },
  {
    tabBarOptions: {
      activeTintColor: MAIN_THEME.ACTIVE_TINT_COLOR,
      inactiveTintColor: MAIN_THEME.PRIMARY_COLOR,
      showIcon: true,
      showLabel: true,
      style: {
        backgroundColor: MAIN_THEME.TABBAR_BG_COLOR,
        paddingTop: TABBAR_TOP_PADDING,
        paddingBottom: TABBAR_BOTTOM_PADDING,
        height: 60,
        borderTopWidth: 0,
      },
      tabStyle: { border: 'none' },
      labelStyle: {
        fontSize: SUB_TEXT_FONT_SIZE,
      },
    },
  },
);

const Navigator = createAppContainer(BottomNavigation);

export default withAppState(Navigator);
