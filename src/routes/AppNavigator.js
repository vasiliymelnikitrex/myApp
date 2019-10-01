import React from 'react';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createAppContainer } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';
import IconFish from 'react-native-vector-icons/MaterialCommunityIcons';
import { TABS, TABBAR_ICONS } from '../constants';
import {
  HomeNavigator,
  NewsNavigator,
  FishInfoNavigator,
  SettingsNavigator,
  CalendarNavigator,
} from '.';
import { TABBAR_TOP_PADDING, TABBAR_BOTTOM_PADDING } from '../styles/paddings';
import { SUB_TEXT_FONT_SIZE } from '../styles/fontSizes';
import { PRIMARY_COLOR, TABBAR_BG_COLOR, ACTIVE_TINT_COLOR } from '../styles/colors';
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
      color: focused ? ACTIVE_TINT_COLOR : tintColor,
    };
    const Res = routeName === 'FishInfo' ? IconFish : Icon;
    return <Res {...commonProps} />;
  },
});

const BottomNavigation = createBottomTabNavigator(
  {
    [TABS.Home]: { screen: HomeNavigator, navigationOptions },
    [TABS.Calendar]: { screen: CalendarNavigator, navigationOptions },
    [TABS.News]: { screen: NewsNavigator, navigationOptions },
    [TABS.FishInfo]: { screen: FishInfoNavigator, navigationOptions },
    [TABS.Settings]: { screen: SettingsNavigator, navigationOptions },
  },
  {
    tabBarOptions: {
      activeTintColor: ACTIVE_TINT_COLOR,
      inactiveTintColor: PRIMARY_COLOR,
      showIcon: true,
      showLabel: true,
      style: {
        backgroundColor: TABBAR_BG_COLOR,
        paddingTop: TABBAR_TOP_PADDING,
        paddingBottom: TABBAR_BOTTOM_PADDING,
        height: 60, // TODO: theme
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
