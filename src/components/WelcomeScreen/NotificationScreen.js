import React from 'react';
import {Container,Header,Content ,Body, Footer,Button, Grid,Col, Row, FooterTab} from 'native-base';
import {StyleSheet,Image,TouchableOpacity,View,Text} from 'react-native';
import {material} from 'react-native-typography';

class  NotificationScreen3 extends React.Component{
    static navigationOptions = ({ navigation }) => ({
        header: (
            <Header style={{display:'none'}} androidStatusBarColor="#339966">
            </Header>
        )
      }
      );
 render(){
    return (
        <Container>
           <Grid style={styles.content}>
                <Row size={0.6} style={{alignItems:'center'}}>
                    <Text style={styles.text1}>WELCOME ON BOARD</Text>
                </Row>
                <Row>
                <Col>
                    <Button style={{...styles.buttons, backgroundColor:'#C4C4C4'}}>
                        <Text style={styles.text}>Allow Notifications</Text>
                    </Button>
                    <Button style={{...styles.buttons, backgroundColor:'#339966'}}>
                        <Text style={styles.text}>Allow Location</Text>
                </Button>
                </Col>
                </Row>
             </Grid>
            <Footer style={styles.footer}>
                <FooterTab>
                <Button full onPress={()=>this.props.navigation.navigate('Welcome')} style={styles.button}>
                  <Text style={{...material.subheading, color:'#fff',textAlign:'center'}}>CONTINUE</Text>
                 </Button>
                 </FooterTab>
            </Footer> 
        </Container>
    )

 }
       
}

const styles= StyleSheet.create({
    footer:{
        backgroundColor:'#339966',
        borderTopColor:'#FFCE00',
        borderTopWidth:3,
        justifyContent:'center',
        alignItems:'center'
    },
    content:{
      justifyContent:'center',
      alignItems:'center',
    },
    text:{
     ...material.subheading,
     color:'#ffffff'
    },
    text1:{
        ... material.headline,
        color:'#339966',
        textAlign:'center',
        fontWeight:'bold',
        marginBottom:7,
    },
    buttons:{
        width:'95%',
        height:50,
        marginBottom:20,
        alignItems:'center',
        justifyContent:'center',
        alignSelf:'center'
    },
    
button:{

    backgroundColor:'#339966',
   
}
})
export default NotificationScreen3