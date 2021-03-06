import React, { Component } from 'react'
import { Container ,Text,Header} from 'native-base';
import WelcomeContainer from './welcome12Container';

const attribute={
    image:'asset:/image/welcomei.PNG',
    headline:'AWA RIDER',
    story:'Welcome, with AWA delivery make easy and quick deiveries any day any time.'
}
export default class welcome1 extends Component {
    static navigationOptions = ({ navigation }) => ({
        header: (
            <Header style={{display:'none'}} androidStatusBarColor="#F8F8F8">
            </Header>
        ),
        drawerLockMode:'locked-closed'
      });
    render() {
        return (
            <Container>
               <WelcomeContainer {...attribute} onPress={()=>this.props.navigation.navigate('Welcome2')} />
            </Container>
        )
    }
}
