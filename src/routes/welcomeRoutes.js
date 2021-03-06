import Notification from '../components/WelcomeScreen/NotificationScreen';
import Onboarding from '../components/WelcomeScreen/OnboardingScreen3';
import Welcome from '../components/WelcomeScreen/WelcomeScreen';
import Welcome1 from '../components/WelcomeScreen/welcome1';
import Welcome2 from '../components/WelcomeScreen/welcome2';
import Login from '../components/Authentication/Login/Login'
import Register from '../components/Authentication/Registration/signup1';
import Signup2 from '../components/Authentication/Registration/signup2';
import Signup3 from '../components/Authentication/Registration/signUp3';
import Signup5 from '../components/Authentication/Registration/signUp5';
import Signup6 from '../components/Authentication/Registration/signup6';
import Signup7 from '../components/Authentication/Registration/signUp7';
import { createStackNavigator, createAppContainer } from "react-navigation";

const WelcomePages = createStackNavigator({
Welcome1:{screen:Welcome1},
Welcome2:{screen:Welcome2},
Onboarding: { screen: Onboarding },
Notification: { screen: Notification },
Welcome: { screen: Welcome },
Login:{screen:Login},
Register:{screen:Register},
Signup2:{screen:Signup2},
Signup3:{screen:Signup3},
Signup5:{screen:Signup5},
Signup6:{screen:Signup6},
Signup7: {screen:Signup7},
},
  {
    initialRouteName: "Welcome1"
  }
);

export default createAppContainer(WelcomePages);