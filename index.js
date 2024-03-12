/**
 * @format
 */

import {AppRegistry} from 'react-native';
import 'react-native-gesture-handler';

import {name as appName} from './app.json';
import {GliphyMarketplace} from './src';

AppRegistry.registerComponent(appName, () => GliphyMarketplace);
