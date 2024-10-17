/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import TodoAgain from './src/component/TodoAgain';
import Oct14 from './src/component/Oct14';
import { PaperProvider } from 'react-native-paper';
import AvoidView from './src/component/AvoidView';

export default function Main() {
    return (
      <PaperProvider>
        <App />
      </PaperProvider>
    );
  }
  

AppRegistry.registerComponent(appName, () => Main);
