import React, { Component } from 'react';
import {StyleSheet,Text,View,Image} from 'react-native';
import {Container,Content, Left, Body, Right, CardItem, Card, Button} from 'native-base';
import Header from '../../container/header/Header';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
//import {currentRoute} from '../../redux/actions/routesAction';
import {heightPercentageToDP,widthPercentageToDP} from '../../PixelRatio/pixelRatio';
import {material} from 'react-native-typography';

class ShareApp extends Component {

    
      componentDidMount() {
         // this.props.currentRoute('Share App')
      }
    render() {
        return (
            <Container>
                <Header props={this.props} title='Share'/>
                <Content style={{margin:20}}>
                  <View>
                    <View style={{marginTop:heightPercentageToDP('2%'),
                        marginBottom:heightPercentageToDP('5%')
                      }}>
                       <Image style={{width:widthPercentageToDP('7%'),height:heightPercentageToDP('5%')}} source={{uri:'asset:/image/share.png'}}/>
                    </View>
                    <View style={{marginBottom:heightPercentageToDP('5%')}}>
                        <Text style={material.headline}>Enjoying AWA delivery!</Text>
                    </View>
                    <View style={{marginBottom:heightPercentageToDP('5%')}}>
                        <Text style={{...material.body1,paddingRight:widthPercentageToDP('25%'),
                         color:'rgba(0,0,0,0.6)'
                     }}>Help reach out to more of your friends to attain our goal of making delivery easy and secure.</Text>
                    </View>
                    <View>
                        <Button full style={{backgroundColor:'#339966'}}>
                            <Text style={material.body1White}>Share</Text>
                        </Button>
                    </View>
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
ShareApp.propTypes={
    //currentRoute:PropTypes.func.isRequired
}
export default connect(mapStateToProps,{})(ShareApp)
