import React from 'react';
import {Header,CardItem,Form,Item,Input} from 'native-base';
import {View,} from 'react-native'
import Wrapper from './Wrapper';
import RegisterTheme from './index';
///import { TouchableOpacity } from 'react-native-gesture-handler';
import {TransparentButtonWithICom as IconButton} from './commonButtons'
import {human } from 'react-native-typography';


 class signup2 extends React.Component {
    static navigationOptions = ({ navigation }) => ({
        header: (
            <Header style={{display:'none'}} androidStatusBarColor="#339966">
            </Header>
        )
      });
     render(){
        const item={
            header: 'Personal Information',
            subHead:'We’ll only display your name and Driver photo',
            name: 'One',
            image:'asset:/image/welcome.PNG',
            buttonText:'Next',
            progress:0.4,
            buttonColor:'#AAAAAA',
            nextForm:'Signup3'
          }
        return (
            <RegisterTheme parentProperty={this.props} nextPage={item}>
                <Wrapper>
                    <CardItem>
                        <Form style={{width:'100%'}}>
                            <Item>
                                <Input  style={human.subhead} placeholder='First Name'/>
                            </Item>
                            <Item >
                                <Input  style={human.subhead} placeholder='Last Name'/>
                            </Item>
                            <Item >
                                <Input style={human.subhead} placeholder='Language'/>
                            </Item>
                            <Item>
                                <Input style={human.subhead} placeholder='Sex'/>
                            </Item>
                        </Form>
                    </CardItem>
                    <View style={{flex:1,margin:20, flexDirection:'row',justifyContent:'center'}}>
                        <View style={{flex:1,
                             flexDirection:'row', 
                             justifyContent:'flex-start',
                             alignItems:'flex-start'}}>
                           <IconButton Icon='paper' text='Upload your driver photo'/> 
                        </View>
                        <View style={{flex:1, 
                            flexDirection:'row', 
                            justifyContent:'flex-end',
                            alignItems:'flex-end'}}>
                          <IconButton Icon='paper' text='Upload your drivers liscence'/>     
                        </View>     
                  </View>
                </Wrapper>
            </RegisterTheme>
            )
     }
    
}
export default signup2