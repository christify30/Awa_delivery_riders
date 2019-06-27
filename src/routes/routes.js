import React from "react";
import HomeScreen from "../components/HomeScreen/HomeScreen";
import SideBar from "../components/SideBar/SideBar";
import WelcomeScreen from "./welcomeRoutes"
import HomeIndex from '../components/HomeScreen/index';
import { createAppContainer ,createDrawerNavigator} from "react-navigation";


const AppNavigator = createDrawerNavigator({
    WelcomeScreen:{screen:WelcomeScreen},
    HomeIndex:{screen:HomeIndex},
    Home:HomeScreen,
  },
  {
   contentComponent: props => <SideBar {...props} />,
   drawerLockMode :'locked-closed'
   }
);


export default createAppContainer(AppNavigator);