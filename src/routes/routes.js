import React from "react";
import HomeScreen from "../components/HomeScreen/HomeScreen";
import SideBar from "../components/SideBar/SideBar";
import HomeIndex from '../components/HomeScreen/index';
import Payment from '../components/Payment/Payment';
import Wallet from '../components/Wallet/Wallet';
import ReferralCode from '../components/RefferalCode/RefferalCode';
import YourRating from '../components/YourRating/YourRating'
import Settings from '../components/Settings/Settings';
import ShareApp from '../components/ShareApp/ShareApp';
import About from '../components/About/About';
import BookingHistory from '../components/BookingHistory/BookingHistory';
import { createAppContainer ,createDrawerNavigator} from "react-navigation";


const AppNavigator = createDrawerNavigator({
  
    //WelcomeScreen:{screen:WelcomeScreen},
    HomeIndex:{screen:HomeIndex},
    Home:HomeScreen,
    Wallet:{screen:Wallet},
    BookingHistory:BookingHistory,
    Payment:{screen:Payment},
    YourRating:YourRating,
    ReferralCode:{screen:ReferralCode},
    Settings:Settings,
    ShareApp:ShareApp,
    About:About
  },
  {
   contentComponent: props => <SideBar {...props} />
   //drawerLockMode :'locked-closed'
   }
);


export default createAppContainer(AppNavigator);