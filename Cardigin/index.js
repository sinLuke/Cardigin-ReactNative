/** @format */

import { AppRegistry } from 'react-native';
import App from './App';
import loginViewComponents from './Login/loginViewComponent';
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => loginViewComponents);
