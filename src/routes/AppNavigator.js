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

const navigationOptions = ({
  navigation: {
    state: { routeName },
  },
}) => ({
  tabBarIcon: ({ focused, tintColor }) => {
    const commonProps = {
      name: TABBAR_ICONS[routeName],
      size: TABBAR_ICONS[routeName] === 'fish' ? 32.5 : 22.5,
      color: focused ? '#230338' : tintColor, // TODO: theme
    };
    const Res = routeName === 'FishInfo' ? IconFish : Icon;
    return <Res {...commonProps} />;
  },
});

const Navigator = createBottomTabNavigator(
  {
    [TABS.Home]: { screen: HomeNavigator, navigationOptions },
    [TABS.Calendar]: { screen: CalendarNavigator, navigationOptions },
    [TABS.News]: { screen: NewsNavigator, navigationOptions },
    [TABS.FishInfo]: { screen: FishInfoNavigator, navigationOptions },
    [TABS.Settings]: { screen: SettingsNavigator, navigationOptions },
  },
  {
    tabBarOptions: {
      activeTintColor: '#230338', // TODO: theme
      inactiveTintColor: '#fdecff', // TODO: theme
      showIcon: true,
      showLabel: true,
      style: {
        backgroundColor: '#6058A5', // TODO: theme
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

export default createAppContainer(Navigator);
