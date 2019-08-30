import React, { Component } from 'react';
import {StyleSheet,Text,View,Image,TouchableOpacity} from 'react-native';
import {Container,Content, Card,CardItem,Item ,Input,Footer,Form, FooterTab, Button,Grid,Col,Label, Row} from 'native-base';
import Header from '../../container/header/Header';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {currentRoute} from '../../redux/actions/routesAction';
import {material} from 'react-native-typography';
import {heightPercentageToDP,widthPercentageToDP} from '../../PixelRatio/pixelRatio';
import {SettingsCard} from '../commonComponents/CommonCards';
import AsyncStorage from '@react-native-community/async-storage';


class Settings extends Component {

    state={
        firstname:'',
        lastname:'',
        email:'',
        phone:''
    }


    componentWillReceiveProps(nextProps){
/*        console.log(nextProps);
         //this.props.currentRoute('Home');
         const {firstname,lastname,email,phone}=nextProps.data.profile.data;
        // const {firstname,lastname}=this.props.data.profile.data;
        this.setState((state)=>{
            return{
                firstname:firstname,
                lastname:lastname,
                email:email,
                phone:phone
            }
        })*/
       }
    componentDidMount(){
        const {firstname,lastname,email,phone}=this.props.data.profile.data;
        this.setState((state)=>{
            return{
                firstname:firstname,
                lastname:lastname,
                email:email,
                phone:phone
            }
        })
     }
     reset=()=>{
    AsyncStorage.setItem('@LoginToken','empty')
    .then(__=>{
        AsyncStorage.setItem('@newUser','true').then(__=>{
            this.props.navigation.navigate('Welcome1')
        }).catch(err=>{alert('an error occured')});
     
    }).catch(err=>{
      alert('an error occured')
    })
  }
  signOut=()=>{
    AsyncStorage.setItem('@LoginToken','empty')
    .then(__=>{
      this.props.navigation.navigate('Login')
    }).catch(err=>{
      alert('an error occured')
    })  
  }
    render() {
        return (
            <Container>
                <Header props={this.props} title='Settings'/>
                <Content style={{height:heightPercentageToDP('100%'),backgroundColor:'#F8F8F8'}}>
                      <View style={{flex:1}}>
                         <Card style={{width:widthPercentageToDP('100%'),marginLeft:0,padding:10,borderBottomWidth:0, borderBottomColor:'transparent'}}>
                             <CardItem style={{justifyContent:'center',paddingLeft:0}}>
                                 <Image 
                                 style={{width:widthPercentageToDP('18%'),height:heightPercentageToDP('10%'),borderRadius:50}}
                                 source={{uri: 'asset:/image/Avatar.png'}}/>
                             </CardItem>
                                    <Grid style={{width:widthPercentageToDP('97%'),marginTop:heightPercentageToDP('2%')}}>
                                        <Col>
                                        <Item floatingLabel>
                                          <Label style={material.caption}>First Name</Label>
                                          <Input
                                          onChangeText={(text)=>this.setState({firstname:text})}
                                          value={this.state.firstname}/>
                                          </Item>
                                        </Col>
                                        <Col>
                                        <Item floatingLabel>
                                          <Label style={material.caption}>Last Name</Label>
                                          <Input  onChangeText={(text)=>this.setState({lastname:text})}
                                          value={this.state.lastname}/>
                                          </Item>
                                        </Col>
                                    </Grid>
                                 <Grid style={{width:widthPercentageToDP('95%')}}>
                                  <Row >
                                    <Item floatingLabel style={{width:widthPercentageToDP('95%'),marginTop:heightPercentageToDP('2%')}}>
                                          <Label style={material.caption}>Email Address</Label>
                                          <Input  onChangeText={(text)=>this.setState({email:text})}
                                          keyboardType={'numeric'}
                                          value={this.state.email}/>
                                     </Item>
                                  </Row>
                                  <Row>
                                    <Item floatingLabel style={{width:widthPercentageToDP('95%'),marginTop:heightPercentageToDP('2%')}}>
                                     <Label style={material.caption}>Phone number</Label>
                                        <Input  onChangeText={(text)=>this.setState({phone:text})}
                                          value={this.state.phone}/>
                                    </Item>
                                 </Row>
                            </Grid>
                         </Card>
                         <Card transparent style={{width:widthPercentageToDP('100%'),marginLeft:0,marginTop:heightPercentageToDP('1.5%')}}>
                             <CardItem style={{height:heightPercentageToDP('7%'),marginBottom:heightPercentageToDP('1%'),backgroundColor:'#ffffff'}}></CardItem>
                             <SettingsCard marginBottom={heightPercentageToDP('1%')} title='Turn on Notification'/>
                             <SettingsCard marginBottom={heightPercentageToDP('1%')} title='Turn on Location'/>
                             <CardItem style={{marginBottom:heightPercentageToDP('1%')}}>
                                 <TouchableOpacity onPress={this.signOut}>
                                 <Text style={{...material.body1,color:'#E84C3D'}}>Sign Out</Text>
                                 </TouchableOpacity>
                             </CardItem>
                             <CardItem>
                             <TouchableOpacity onPress={this.reset}>
                                 <Text style={{...material.body1,color:'#E84C3D'}}>Reset</Text>
                              </TouchableOpacity>
                             </CardItem>
                         </Card>
                      </View>
                </Content>
                <Footer>
                    <FooterTab>
                        <Button full style={{backgroundColor:'#ffffff'}}>
                        <Text style={{...material.body1,color:'#339966'}}>Privacy policy</Text>
                        </Button>
                    </FooterTab>
                </Footer>
            </Container>
        )
    }
}
const styles=StyleSheet.create({

});
const mapStateToProps=(state)=>({
 data:state.auth
});
Settings.propTypes={
    currentRoute:PropTypes.func.isRequired,
    data:PropTypes.object.isRequired
}
export default connect(mapStateToProps,{currentRoute})(Settings)
