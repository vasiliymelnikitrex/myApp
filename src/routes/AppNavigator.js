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

const HomeTab = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      title: 'Home',
      header: null,
      headerBackTitle: null,
    },
  },
});

const FishInfoTab = createStackNavigator({
  FishInfo: {
    screen: FishInfo,
    navigationOptions: {
      title: 'FishInfo',
      header: null,
      headerBackTitle: null,
    },
  },
});

const NewsTab = createStackNavigator({
  News: {
    screen: News,
    navigationOptions: {
      title: 'News',
      header: null,
      headerBackTitle: null,
    },
  },
});

const CalendarTab = createStackNavigator({
  Calendar: {
    screen: Calendar,
    navigationOptions: {
      title: 'Calendar',
      header: null,
      headerBackTitle: null,
    },
  },
});

const SettingsTab = createStackNavigator({
  Settings: {
    screen: Settings,
    navigationOptions: {
      title: 'Settings',
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
      color={focused ? '#fff' : tintColor} // TODO: theme
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
      activeTintColor: '#fff',
      inactiveTintColor: 'black', // TODO: theme
      showIcon: true,
      showLabel: true,
      style: {
        backgroundColor: 'limegreen', // TODO: theme
        paddingTop: 7.5, // TODO: theme
        paddingBottom: 5, // TODO: theme
        height: 60, // TODO: theme
      },
      tabStyle: {},
      labelStyle: {
        fontSize: 14,
      },
    },
  },
);

export default createAppContainer(Navigator);
