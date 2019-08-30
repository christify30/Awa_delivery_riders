import {
    createSwitchNavigator,
    createAppContainer,
    createStackNavigator
  } from "react-navigation";
  import WelcomeScreen from "./welcomeRoutes";
  import mainScreen from './routes';

import Register from '../components/Authentication/Registration/signup1';
import Signup2 from '../components/Authentication/Registration/signup2';
import Signup3 from '../components/Authentication/Registration/signUp3';
import Signup4 from '../components/Authentication/Registration/signUp4';
import Signup5 from '../components/Authentication/Registration/signUp5';
import Signup6 from '../components/Authentication/Registration/signup6';
import Signup7 from '../components/Authentication/Registration/signUp7';
import Login from '../components/Authentication/Login/Login';

   const LOgin =createStackNavigator({Login:{screen:Login}});
  const REgister = createStackNavigator({Register:{screen:Register}});
  const SIgnup2 = createStackNavigator({Signup2:{screen:Signup2}});
  const SIgnup3 = createStackNavigator({Signup3:{screen:Signup3}});
  const SIgnup4 = createStackNavigator({Signup4:{screen:Signup4}});
  const SIgnup5 = createStackNavigator({Signup5:{screen:Signup5}});
  const SIgnup6 = createStackNavigator({Signup6:{screen:Signup6}});
  const SIgnup7 = createStackNavigator({Signup7:{screen:Signup7}});
/**
 * 
   Register:{screen:Register},
  Signup2:{screen:Signup2},
  Signup3:{screen:Signup3},
  Signup4:{screen:Signup4},
  Signup5:{screen:Signup5},
  Signup6:{screen:Signup6},
  Signup7: {screen:Signup7},
 */
 const awaDeliveryContainer = createSwitchNavigator({
  Login:{screen:LOgin},
  Register:{screen:REgister},
  Signup2:{screen:SIgnup2},
  Signup3:{screen:SIgnup3},
  Signup4:{screen:SIgnup4},
  Signup5:{screen:SIgnup5},
  Signup6:{screen:SIgnup6},
  Signup7: {screen:SIgnup7},
    Home: {
        screen: mainScreen
      },
      Welcome: WelcomeScreen
    }, {
        initialRouteName: "Welcome"
      });
  export default createAppContainer(awaDeliveryContainer);