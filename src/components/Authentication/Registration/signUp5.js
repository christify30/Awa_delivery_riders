import React from 'react';
import {Header,CardItem,Form,Item,Input} from 'native-base';
import {View,} from 'react-native'
import Wrapper from './Wrapper';
import RegisterTheme from './index';
//import { TouchableOpacity } from 'react-native-gesture-handler';
import {TransparentButton} from './commonButtons'
import { human } from 'react-native-typography';


 class signup5 extends React.Component {
    static navigationOptions = ({ navigation }) => ({
        header: (
            <Header style={{display:'none'}} androidStatusBarColor="#339966">
            </Header>
        )
      });
     render(){
        const item={
            header: 'Personal Detail',
            subHead:'We’ll only display your name and Driver photo',
            name: 'One',
            image:'asset:/image/welcome.PNG',
            buttonText:'Next',
            progress:0.7,
            buttonColor:'#AAAAAA',
            nextForm:'Signup6'
          }
        return (
            <RegisterTheme parentProperty={this.props} nextPage={item}>
                <Wrapper>
                <View style={{flex:1,margin:20, flexDirection:'row',justifyContent:'center'}}>
                        <View style={{flex:1, flexDirection:'row',justifyContent:'center', alignItems:'flex-start'}}>
                           <TransparentButton color='#ffffff' background='#339966' text='Personal'/> 
                        </View>
                        <View style={{flex:1,flexDirection:'row',justifyContent:'center', alignItems:'flex-end'}}>
                          <TransparentButton color='#000000' background='transparent' text='Bussiness'/>     
                        </View>     
                   </View>
                    <CardItem>
                        <Form style={{width:'100%'}}>
                            <Item>
                                <Input style={human.subhead} placeholder='Address'/>
                            </Item>
                            <Item >
                                <Input style={human.subhead} placeholder='Bank Name'/>
                            </Item>
                            <Item >
                                <Input style={human.subhead} placeholder='Account name'/>
                            </Item>
                            <Item>
                                <Input style={human.subhead} placeholder='Account number'/>
                            </Item>
                            <Item>
                                <Input style={human.subhead} placeholder='Bank verification Number'/>
                            </Item>
                        </Form>
                    </CardItem>
                </Wrapper>
            </RegisterTheme>
            )
     }
    
}
export default signup5