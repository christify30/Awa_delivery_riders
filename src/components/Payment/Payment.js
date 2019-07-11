import React, { Component } from 'react';
import {StyleSheet,Text} from 'react-native';
import {Container,Content,List,ListItem, Card, Body, Right, Footer, FooterTab, Button, CardItem, Item, Input, Grid, Row, View} from 'native-base';
import Header from '../../container/header/Header';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {currentRoute} from '../../redux/actions/routesAction';
import {PaymentCard} from '../commonComponents/CommonCards';
import {material} from 'react-native-typography';
import {widthPercentageToDP, heightPercentageToDP} from '../../PixelRatio/pixelRatio';
import { TouchableOpacity } from 'react-native-gesture-handler';

class Payment extends Component {
    static navigationOptions = ({ navigation }) => ({
        drawerLockMode :'unlocked'
      });
    
      componentDidMount() {
          this.props.currentRoute('Payments')
      }
    render() {
        return (
            <Container>
                <Header props={this.props} title='Payment'/>
                <Content>
                      <Card transparent style={{marginLeft:0}}>
                          <CardItem> 
                              <Text>Payment Method</Text>
                          </CardItem>
                         <TouchableOpacity>
                          <PaymentCard text='ADD CARD' button={false}/>
                        </TouchableOpacity>      
                          <PaymentCard text='002897961496' button={true}/>
                          <PaymentCard text='090827592805' button={true}/>
                      </Card>
                     
                </Content>
                <View style={{marginBottom:heightPercentageToDP('3%')}}>
                <Card transparent style={{alignItems:'center',justifyContent:'center'}}>
                        <CardItem style={{borderWidth:0.7,borderColor:'rgba(0,0,0,0.5)',width:widthPercentageToDP('70%')}}>
                            <View>
                                <View>
                                    <Text style={material.subheading}>Set a Goal Today</Text>
                                    <Text style={material.caption}>Make sure you set realistic and attainable goals </Text>
                                </View>
                                <View>
                                    <Item>
                                    <Input placeholder='15,000'/>
                                    </Item>
                                </View>
                            </View>
                        </CardItem>
                      </Card>
                </View>
            </Container>
        )
    }
}
const styles=StyleSheet.create({

});
const mapStateToProps=(state)=>({

});
Payment.propTypes={
    currentRoute:PropTypes.func.isRequired
}
export default connect(mapStateToProps,{currentRoute})(Payment)
