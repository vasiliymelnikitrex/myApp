import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import { StatusBar, Platform } from 'react-native';
import Home from '../screens/Home';
import List from '../screens/List';
import Options from '../screens/Options';
import Feedback from '../screens/Feedback';

const stackNavigator = createStackNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        header: () => null,
      },
    },
    List: {
      screen: List,
      navigationOptions: {
        title: 'List',
      },
    },
    Options: {
      screen: Options,
      navigationOptions: {
        title: 'Options',
      },
    },
    Feedback: {
      screen: Feedback,
      navigationOptions: {
        title: 'Feedback',
      },
    },
  },
  {
    headerLayoutPreset: 'center',
    mode: 'modal',
    cardStyle: {
      ...(Platform.OS === 'ios' && { paddingTop: StatusBar.currentHeight }),
    },
    headerMode: 'screen',
  },
);

export default createAppContainer(stackNavigator);
