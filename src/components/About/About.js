import React, { Component } from 'react';
import {StyleSheet,Text} from 'react-native';
import {Container,Content, Left, Body, Right, Footer, FooterTab, Button} from 'native-base';
import Header from '../../container/header/Header';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
//import {currentRoute} from '../../redux/actions/routesAction';
import {material} from 'react-native-typography';

class About extends Component {
   
    
      componentDidMount() {
          //this.props.currentRoute('About AWA Delivery')
      }
    render() {
        return (
            <Container>
                <Header props={this.props} title='About'/>
                <Content>
                      <Text style={material.headline}>NO CONTENT AVAILABLE YET PLEASE CALL 911</Text>
                </Content>
                <Footer>
                    <FooterTab>
                        <Button full style={{backgroundColor:'#339966'}}>
                            <Text style={{...material.body1White}}>AWA Riders</Text>
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
About.propTypes={
    //currentRoute:PropTypes.func.isRequired
}
export default connect(mapStateToProps)(About)
