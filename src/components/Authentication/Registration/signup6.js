import React from 'react';
import {Header,Text,Button} from 'native-base';
import Wrapper from './Wrapper';
import {View} from 'react-native'
import RegisterTheme from './index';
import {human, material } from 'react-native-typography';


 class signup6 extends React.Component {
    static navigationOptions = ({ navigation }) => ({
        header: (
            <Header style={{display:'none'}} androidStatusBarColor="#339966">
            </Header>
        )
      });
     render(){
        const item={
            header: 'Terms of use',
            subHead:'Continue by accepting our terms and conditions',
            name: 'One',
            image:'asset:/image/welcome.PNG',
            buttonText:'Accept',
            progress:0.9,
            buttonColor:'#339966',
            nextForm:'Signup7'
          }
        return (
            <RegisterTheme parentProperty={this.props} nextPage={item}>
                <Wrapper>
                  <View style={{flex:1,height:300,alignItems:'center' ,justifyContent:'center'}}>
                    <View style={{marginBottom:10}}>
                    <Button style={{backgroundColor:'#339966',width:200,justifyContent:'center'}}><Text style={{...material.button,color:'#ffffff'}}>Privacy policy </Text></Button>
                    </View>
                    <View style={{marginTop:10}}>
                    <Button style={{backgroundColor:'#339966',width:200,justifyContent:'center'}}><Text style={{...material.button,color:'#ffffff'}}>Insurance policy</Text></Button>
                    </View>
                    </View>
                </Wrapper>
            </RegisterTheme>
            )
     }
    
}
export default signup6