/**
 * @format
 */

import { AppRegistry, YellowBox } from 'react-native';
import App from './src';
import { name as appName } from './app.json';

YellowBox.ignoreWarnings(['Remote debugger', 'Warning: ']);

AppRegistry.registerComponent(appName, () => App);
