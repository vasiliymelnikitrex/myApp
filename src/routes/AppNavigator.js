import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createAppContainer } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';

import { TABS, TABBAR_ICONS } from '../constants';
import Home from '../screens/Home';
import FishInfo from '../screens/FishInfo';
import News from '../screens/News';
import Settings from '../screens/Settings';
import Calendar from '../screens/Calendar';
import withGradient from '../hocs/withGradient';

const HomeTab = createStackNavigator({
  [TABS.Home]: {
    screen: withGradient(Home),
    navigationOptions: {
      title: TABS.Home,
      header: null,
      headerBackTitle: null,
    },
  },
});

const FishInfoTab = createStackNavigator({
  [TABS.FishInfo]: {
    screen: withGradient(FishInfo),
    navigationOptions: {
      title: TABS.FishInfo,
      header: null,
      headerBackTitle: null,
    },
  },
});

const NewsTab = createStackNavigator({
  [TABS.News]: {
    screen: withGradient(News),
    navigationOptions: {
      title: TABS.News,
      header: null,
      headerBackTitle: null,
    },
  },
});

const CalendarTab = createStackNavigator({
  [TABS.Calendar]: {
    screen: withGradient(Calendar),
    navigationOptions: {
      title: TABS.Calendar,
      header: null,
      headerBackTitle: null,
    },
  },
});

const SettingsTab = createStackNavigator({
  [TABS.Settings]: {
    screen: withGradient(Settings),
    navigationOptions: {
      title: TABS.Settings,
      header: null,
      headerBackTitle: null,
    },
  },
});

const navigationOptions = ({
  navigation: {
    state: { routeName },
  },
}) => ({
  tabBarIcon: ({ focused, tintColor }) => (
    <Icon
      name={TABBAR_ICONS[routeName]}
      size={22.5} // TODO: theme
      color={focused ? 'black' : tintColor} // TODO: theme
    />
  ),
});

const Navigator = createBottomTabNavigator(
  {
    [TABS.Home]: { screen: HomeTab, navigationOptions },
    [TABS.Calendar]: { screen: CalendarTab, navigationOptions },
    [TABS.News]: { screen: NewsTab, navigationOptions },
    [TABS.FishInfo]: { screen: FishInfoTab, navigationOptions },
    [TABS.Settings]: { screen: SettingsTab, navigationOptions },
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
