import React, { Component } from 'react';
import {Container,Header,Content ,View,Text,Button ,Grid,Row} from 'native-base';
import {StyleSheet,Image,TouchableOpacity} from 'react-native';
//import {Actions} from 'react-native-router-flux';

 class WelcomeScreen extends Component {
    static navigationOptions = ({ navigation }) => ({
        header: (
            <Header style={{display:'none'}} androidStatusBarColor="#339966">
            </Header>
        )
      });
    render(){
        return (
            <Container>
                <Grid>
                    <Row size={2.1}>
                        <Image
                            style={{width: '100%'}}
                            source={{uri: 'asset:/image/welcome2.PNG'}}
                        />
                    </Row>
                    <Row size={0.5} style={{justifyContent:'center',  alignItems:'flex-start'}}
                    >
                        <Text style={styles.text1}>WELCOME</Text></Row>
                    <Row size={0.5} style={{
                    justifyContent:'center',

                    }}>
                        <Button onPress={()=>this.props.navigation.navigate('Login')} style={{...styles.buttons, backgroundColor:'#339966'}}>
                        <Text>LOGIN</Text>
                        </Button>
                    </Row>
                    <Row style={{justifyContent:'center'}}>
                        
                        <Button 
                            style={{...styles.buttons,
                            borderBottomWidth:1,
                            borderBottomColor:'#AAAAAA',
                            backgroundColor:'transparent'}}
                            onPress={()=>this.props.navigation.navigate('Register')}
                        >
                        <Text style={{color:'#000'}}>NEW RIDER SIGN UP</Text>
                        </Button>
                    </Row>
                </Grid>
            </Container>
        )
    }    
}
    const styles= StyleSheet.create({


        buttons:{
            width:'80%',
            height:60,
            alignItems:'center',
            justifyContent:'center'
        },
    text1:{
        color:'#AAAAAA',
        fontSize:22,
        fontWeight:'bold',
        textAlign:'center',
    },
    content:{
      justifyContent:'center'
     
    },
    })
   

export default WelcomeScreen;

/**
 * 
 * 
 */