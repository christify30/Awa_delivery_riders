import React, { Component } from 'react'
import { Container ,Text,Header} from 'native-base';
import WelcomeContainer from './welcome12Container';

const attribute={
    image:'asset:/image/welcomeii.PNG',
    headline:'MORE CUSTOMERS',
    story:'Dispatch riders are problem solvers, put a smile on more customers faces as you meet their daily needs.'
}
export default class welcome2 extends Component {
    static navigationOptions = ({ navigation }) => ({
        header: (
            <Header style={{display:'none'}} androidStatusBarColor="#339966">
            </Header>
        ),
        drawerLockMode:'locked-closed'
      });
    render() {
        return (
            <Container>
               <WelcomeContainer {...attribute} onPress={()=>this.props.navigation.navigate('Onboarding')} />
            </Container>
        )
    }
}
