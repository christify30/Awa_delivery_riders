import React, { Component } from 'react';
import {Text,Container,Content,Right, Header,Button,Input, Form,Icon,Item,Grid,Body, Row, Left} from 'native-base';
import {View,TouchableOpacity,StyleSheet, Dimensions} from 'react-native';
import {test} from '../../../redux/actions/homeAction';
import {connect} from 'react-redux';
import {material} from 'react-native-typography'

const {height} = Dimensions.get('window');

 class Login extends Component {

  static navigationOptions = ({ navigation }) => ({
        header: (
            <Header style={{display:'none'}} androidStatusBarColor="#F8F8F8">
            </Header>
        )
      });

     componentWillMount(){
         this.props.test;
     }
    render() {
        return (
            <Container>
                <View style={{flex:0.1,justifyContent:'center'}}>
                    <TouchableOpacity onPress={() =>this.props.navigation.goBack()} style={styles.backButton}>
                        <Text style={styles.backuttonText}>{'<'}</Text>
                    </TouchableOpacity>

                </View>
                <View style={{flex:0.7}}>
                    <Grid>
                      <Row  style={{justifyContent:'center',alignItems:'center'}}>
                         <Text 
                         style={{...styles.Welcomtext}}
                         >
                             Welcome Back,
                         </Text>
                       </Row>
                    </Grid>
                </View>
                <View style={{flex:1.3}}>
                <Grid>  
                  <Row style={{justifyContent:'center',alignItems:'center'}}>
                       <Form style={{...styles.formView}}>
                            <Item
                               style={{marginBottom:30}}
                            >
                                <Icon style={material.body1} active name='person' />
                                <Input style={material.body1} placeholder='Email'/>
                            </Item>
                            <Item  style={{marginBottom:30}}>
                                <Icon style={material.body1} active name='lock' />
                                <Input style={material.body1} placeholder='Password'/>
                            </Item>
                             <Button 
                                    onPress={()=>this.props.navigation.navigate('HomeIndex')}style={{...styles.buttons,backgroundColor:'#339966'}}>
                                        <Text>LOGIN</Text>
                             </Button>
                             <TouchableOpacity onPress={()=>this.props.navigation.navigate('Register')} style={{marginTop:10}}> 
                                 <Text style={{...material.body1,
                                    alignSelf:'center'}}>
                                 Dont have an account?<Text style={{color:'#339966'}}> Sign Up</Text>
                                </Text>
                            </TouchableOpacity>
                           
                       </Form>
                     </Row>
                  </Grid>
                </View>
            </Container>
        )
    }
 }
const styles=StyleSheet.create({
    backButton:{
        marginLeft:10     
    },
    backuttonText:{
        fontSize:30,
        color:'#000',
        alignSelf:'flex-start'
    },
     formView:{
     width:'95%',
     
     },
     Welcomtext:{
        color:'#339966',
        fontSize:22,
        fontWeight:'bold',
        textAlign:'center',
        
    },
    buttons:{
        width:'80%',
        height:60,
        alignSelf:'center',
        justifyContent:'center'
    }
});
const mapStateToProps=(state)=>({

})
export default connect(mapStateToProps,{test})(Login)