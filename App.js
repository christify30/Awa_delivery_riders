import React, {Component} from 'react';
import {Platform} from 'react-native';
import store from './src/redux/store';
import { Provider } from 'react-redux';
import Router from './src/routes/routes'
import SplashScreen from 'react-native-splash-screen';
//import setAuthToken from './src/axios/setAuthToken';
import AsyncStorage from '@react-native-community/async-storage';
import jwt_decode from 'jwt-decode';


/*const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});*/
 /*getData = async () => {
  try {
    const authToken = await AsyncStorage.getItem('@storage_Key')
    if(authToken !== null) {
      // value previously stored
      return authToken
    }
  } catch(e) {
    // error reading value
    return false
  }
 }*/
AsyncStorage.getItem('@storage_Key')
.then(data=>
  console.log(data)
).catch(e=>
  console.log(e)
);
 //const token=getData();
// console.log(getData());
/*if(token){
  setAuthToken(token);
  // Decode token and get user infor and exp
  const decoded = jwt_decode(token);

  //Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));


  //check for expired token
 /* const currentTime = Date.now()/1000;
if(decoded.exp < currentTime){
    store.dispatch(logoutUser());
    //TODO: clear currnt Profile 

    store.dispatch(clearCurrentProfile(decoded));
    //Redirect to  login
  
    window.location.href= '/login';
 }
}*/

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