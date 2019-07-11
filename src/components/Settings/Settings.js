import React, { Component } from 'react';
import {StyleSheet,Text,View,Image} from 'react-native';
import {Container,Content, Card,CardItem,Item ,Input,Footer,Form, FooterTab, Button,Grid,Col,Label, Row} from 'native-base';
import Header from '../../container/header/Header';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {currentRoute} from '../../redux/actions/routesAction';
import {material} from 'react-native-typography';
import {heightPercentageToDP,widthPercentageToDP} from '../../PixelRatio/pixelRatio';
import {SettingsCard} from '../commonComponents/CommonCards';


class Settings extends Component {
    static navigationOptions = ({ navigation }) => ({
        drawerLockMode :'unlocked'
      });
    
      componentDidMount() {
          this.props.currentRoute('Settings')
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
                                          <Input value='Ifeanyi'/>
                                          </Item>
                                        </Col>
                                        <Col>
                                        <Item floatingLabel>
                                          <Label style={material.caption}>Last Name</Label>
                                          <Input value='Njoku'/>
                                          </Item>
                                        </Col>
                                    </Grid>
                                 <Grid style={{width:widthPercentageToDP('95%')}}>
                                  <Row >
                                    <Item floatingLabel style={{width:widthPercentageToDP('95%'),marginTop:heightPercentageToDP('2%')}}>
                                          <Label style={material.caption}>Email Address</Label>
                                          <Input value='ifeanyi@solabTechnologies.com'/>
                                     </Item>
                                  </Row>
                                  <Row>
                                    <Item floatingLabel style={{width:widthPercentageToDP('95%'),marginTop:heightPercentageToDP('2%')}}>
                                     <Label style={material.caption}>Phone number</Label>
                                        <Input value='07035478515'/>
                                    </Item>
                                 </Row>
                            </Grid>
                         </Card>
                         <Card transparent style={{width:widthPercentageToDP('100%'),marginLeft:0,marginTop:heightPercentageToDP('1.5%')}}>
                             <CardItem style={{height:heightPercentageToDP('7%'),marginBottom:heightPercentageToDP('1%'),backgroundColor:'#ffffff'}}></CardItem>
                             <SettingsCard marginBottom={heightPercentageToDP('1%')} title='Turn on Notification'/>
                             <SettingsCard marginBottom={heightPercentageToDP('1%')} title='Turn on Location'/>
                             <CardItem>
                                 <Text style={{...material.body1,color:'#E84C3D'}}>Sign Out</Text>
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

});
Settings.propTypes={
    currentRoute:PropTypes.func.isRequired
}
export default connect(mapStateToProps,{currentRoute})(Settings)
