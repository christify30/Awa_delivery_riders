/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
//gradlew assembleRelease
import React, {Component} from 'react';
import {Platform} from 'react-native';
import store from './src/redux/store';
import { Provider } from 'react-redux';
import Router from './src/routes/routes'
import SplashScreen from 'react-native-splash-screen';

/*const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});*/

 class App extends Component{

   componentDidMount() {
    SplashScreen.hide();
   // console.log(store);
  }

  render() {
    return (
    <Provider store={store}>
      <Router/>
    </Provider>
     );
  }
}

export default App