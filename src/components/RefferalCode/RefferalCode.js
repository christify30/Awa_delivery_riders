import React, { Component } from 'react';
import {StyleSheet,Text,View} from 'react-native';
import {Container,Content, Left, Body, Right, CardItem, Card, Button} from 'native-base';
import Header from '../../container/header/Header';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {currentRoute} from '../../redux/actions/routesAction';
import {heightPercentageToDP,widthPercentageToDP} from '../../PixelRatio/pixelRatio';
import {material} from 'react-native-typography';

class ReferralCode extends Component {
    static navigationOptions = ({ navigation }) => ({
        drawerLockMode :'unlocked'
      });
    
      componentDidMount() {
          this.props.currentRoute('Referral Code')
      }
    render() {
        return (
                <Container>
                 <Header props={this.props} title='Promotion'/>
                <Content style={{margin:15,marginTop:heightPercentageToDP('5%')}}>
                    <View style={{flex:1,flexDirection:'column',
                       borderTopWidth:1,borderLeftWidth:1,borderRightWidth:1,
                       borderColor:'rgba(0,0,0,0.1)'
                     }}>
                    <View style={{flex:1,justifyContent:'center', paddingTop:heightPercentageToDP('3%'),alignItems:'center',height:heightPercentageToDP('5%')}}>
                       <Text style={material.caption}>Share your promo code with a new driver </Text>
                       <Text  style={material.caption}>and earn extra N1000</Text>
                    </View>
                    <View  style={{flex:1,justifyContent:'center', alignItems:'center',height:heightPercentageToDP('15%')}}>
                       <Text style={{...material.headline,color:'#339966',fontFamily:'Axis'}}>AWAUSMAN1234</Text>
                    </View>
                    </View>
                    <View  style={{flex:1,justifyContent:'center', alignItems:'center'}}>
                        <Button full style={{backgroundColor:'#339966'}}>
                            <Text style={material.body2White}>Share code and earn N1000</Text>
                        </Button>
                    </View>
                </Content>
                </Container>
        )
    }
}
const styles=StyleSheet.create({

});
const mapStateToProps=(state)=>({

});
ReferralCode.propTypes={
    currentRoute:PropTypes.func.isRequired
}
export default connect(mapStateToProps,{currentRoute})(ReferralCode)
