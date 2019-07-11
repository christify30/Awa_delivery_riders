import React from 'react';
import {Header,Form,Item,Input} from 'native-base';
import Wrapper from './Wrapper';
import {View,Text} from 'react-native'
import RegisterTheme from './index';
import { heightPercentageToDP } from '../../../PixelRatio/pixelRatio';



 class signup7 extends React.Component {
    static navigationOptions = ({ navigation }) => ({
        header: (
            <Header style={{display:'none'}} androidStatusBarColor="#339966">
            </Header>
        )
      });
     render(){
        const item={
            header: 'Referral code',
            subHead:'If you’ve been refered by a driver, enter his promo code.',
            name: 'One',
            image:'asset:/image/welcome.PNG',
            buttonText:'Finish',
            progress:6,
            buttonColor:'#339966',
            nextForm:'HomeIndex'
          }
        return (
            <RegisterTheme parentProperty={this.props} nextPage={item}>
                <Wrapper>
                  <View style={{flex:1,height:heightPercentageToDP('40%'),alignItems:'center' ,justifyContent:'center'}}>
                    <View >
                       <Text>Promo code</Text>
                    </View>
                    <View>
                        <Form  style={{width:'90%'}}>
                            <Item style={{width:'100%'}}>
                                <Input />
                            </Item>
                       </Form>
                    </View>
                    </View>
                </Wrapper>
            </RegisterTheme>
            )
     }
    
}
export default signup7