import React from 'react';
import {Header,CardItem,Form,Item,Input,Body} from 'native-base';
import {View,} from 'react-native'
import Wrapper from './Wrapper';
import RegisterTheme from './index';
//import { TouchableOpacity } from 'react-native-gesture-handler';
import {TransparentButton} from './commonButtons'
import {human,material} from 'react-native-typography'

 class signup1 extends React.Component {
    static navigationOptions = ({ navigation }) => ({
        header: (
            <Header style={{display:'none'}} androidStatusBarColor="#339966">
            </Header>
        )
      });
     render(){
        const item={
            header: 'Earn more as a rider',
            subHead:'Let’s get you signed up, its easy',
            name: 'One',
            image:'asset:/image/welcome.PNG',
            buttonText:'Continue',
            progress:0.2,
            buttonColor:'#AAAAAA',
            nextForm:'Signup2'
          }
        return (
            <RegisterTheme parentProperty={this.props} nextPage={item}>
                <Wrapper>
                    <CardItem>
                        <Form style={{width:'100%'}}>
                            <Item  style={{marginBottom:30}}>
                                <Input style={human.subHead} placeholder='Email'/>
                            </Item>
                            <Item >
                                <Input style={human.subHead} placeholder='Phone Number'/>
                            </Item>
                        </Form>
                    </CardItem>
                    <View style={{flex:1,margin:20, flexDirection:'row',justifyContent:'center'}}>
                        <View style={{flex:1, flexDirection:'row', justifyContent:'flex-start',alignItems:'flex-start'}}>
                           <TransparentButton color='#000000' background='transparent' text='Personal'/> 
                        </View>
                        <View style={{flex:1,flexDirection:'row',justifyContent:'flex-end',alignItems:'flex-end'}}>
                          <TransparentButton color='#000000' background='transparent' text='Bussiness'/>     
                        </View>     
                  </View>
                </Wrapper>
            </RegisterTheme>
            )
     }
    
}
export default signup1