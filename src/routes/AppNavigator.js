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

const navigationOptions = ({
  navigation: {
    state: { routeName },
  },
}) => ({
  tabBarIcon: ({ focused, tintColor }) => {
    const commonProps = {
      name: TABBAR_ICONS[routeName],
      size: TABBAR_ICONS[routeName] === 'fish' ? 32.5 : 22.5,
      color: focused ? 'black' : tintColor, // TODO: theme
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
      activeTintColor: 'black', // TODO: theme
      inactiveTintColor: '#fff', // TODO: theme
      showIcon: true,
      showLabel: true,
      style: {
        backgroundColor: '#6058A5', // TODO: theme
        paddingTop: 7.5, // TODO: theme
        paddingBottom: 5, // TODO: theme
        height: 60, // TODO: theme
        borderTopWidth: 0,
      },
      tabStyle: { border: 'none' },
      labelStyle: {
        fontSize: 14,
      },
    },
  },
);

export default createAppContainer(Navigator);
