import React from 'react';
import {Header,CardItem,Form,Item,Input,Picker,Icon,Label} from 'native-base';
import {View,Text} from 'react-native'
import Wrapper from './Wrapper';
import RegisterTheme from './index';
///import { TouchableOpacity } from 'react-native-gesture-handler';
import {TransparentButtonWithICom as IconButton} from './commonButtons'
import {human, material } from 'react-native-typography';
import {heightPercentageToDP,widthPercentageToDP} from '../../../PixelRatio/pixelRatio'


 class signup4 extends React.Component {
    static navigationOptions = ({ navigation }) => ({
        header: (
            <Header style={{display:'none'}} androidStatusBarColor="#339966">
            </Header>
        )
      });
     render(){
        const item={
            header: 'Dispatch details',
            subHead:'We’ll only display your plate number',
            name: 'One',
            image:'asset:/image/welcome.PNG',
            buttonText:'Next',
            progress:3,
            buttonColor:'#AAAAAA',
            nextForm:'Signup5'
          }
        return (
            <RegisterTheme parentProperty={this.props} nextPage={item}>
                <Wrapper>
                    <View style={{borderWidth:1,borderColor:'#339966',borderRadius:10,margin:10,
                    marginBottom:heightPercentageToDP('1.5%'),
                    paddingLeft:widthPercentageToDP('4%'),paddingRight:widthPercentageToDP('4%')}}>
                        <Text
                          style={{position:'absolute',left:widthPercentageToDP('5%'),top:heightPercentageToDP('-1.2%'),
                        backgroundColor:'#ffffff',
                        color:'#339966'
                        }}
                        >Dispatch type</Text>
                    <Picker
                        mode="dropdown"
                        iosIcon={<Icon name="arrow-down" />}
                        style={{ width: undefined }}
                        placeholder="Select your SIM"
                        placeholderStyle={{ color: "#bfc6ea" }}
                        placeholderIconColor="#007aff"
                        //selectedValue={this.state.selected2}
                        //onValueChange={this.onValueChange2.bind(this)}
                    >
                        <Picker.Item label="Bus" value="key0" />
                        <Picker.Item label="ATM Card" value="key1" />
                        <Picker.Item label="Debit Card" value="key2" />
                    </Picker>
                    </View>
                    <View  style={{paddingLeft:15}}>
                        <Text
                        style={material.caption}
                        >Your bus can carry between 12kg, 5X20inches to 20kg, 5X20inches worth of load.</Text>
                    </View>
                    <CardItem style={{height:heightPercentageToDP('8%')}}>
                        <Item>
                            <Input style={{color:'rgba(0,0,0,0.5)',...material.body1}} placeholder='Plate Number'/>
                        </Item>
                    </CardItem>
                    <View style={{flex:1,margin:20, flexDirection:'row',justifyContent:'center'}}>
                        <View style={{flex:1,
                             flexDirection:'row', 
                             justifyContent:'flex-start',
                             alignItems:'flex-start'}}>
                           <IconButton
                           width='97%'
                           height={heightPercentageToDP('17%')}
                           Icon='paper' text='Upload Roadworthiness Certificate'/> 
                        </View>
                        <View style={{flex:1, 
                            flexDirection:'row', 
                            justifyContent:'flex-end',
                            alignItems:'flex-end'}}>
                          <IconButton 
                          width='97%'
                          height={heightPercentageToDP('17%')}
                          Icon='paper' text='Upload Certificate of ownership'/>     
                        </View>  
                        <View style={{flex:1, 
                            flexDirection:'row', 
                            justifyContent:'flex-end',
                            alignItems:'flex-end'}}>
                          <IconButton
                          width='97%'
                          height={heightPercentageToDP('17%')}
                          Icon='paper' text='Upload Insurance Document'/>     
                        </View>     
                  </View>
                </Wrapper>
            </RegisterTheme>
            )
     }
    
}
export default signup4