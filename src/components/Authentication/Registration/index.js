import React, { Component } from 'react';
import {Container,Text,Content,Body,Left,Thumbnail,Row,Grid,Header,DeckSwiper,Footer,Card,CardItem,Icon,View, Button, Input,} from 'native-base';
import {StyleSheet} from 'react-native';
import StepIndicator from 'react-native-step-indicator';
import {material} from 'react-native-typography';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {heightPercentageToDP} from '../../../PixelRatio/pixelRatio';
//import Signup1 from './signup1';
//import Wrapper from './Wrapper';

//const labels = ["","","","","","",""];
 const Register =(props)=> {
        this.props=props;
         const item=props.nextPage
        return (
            <Container style={styles.Container}>
                <View>
                    <TouchableOpacity onPress={()=>props.parentProperty.navigation.goBack()}><Text style={styles.navigator}>{'<'}</Text></TouchableOpacity>
                </View>
                <View style={{paddingLeft:20,paddingRight:20,marginBottom:0, marginTop:heightPercentageToDP('0%')}}>
                   {/* <ProgressBarAndroid
                    color='#FFCE00'
                    styleAttr="Horizontal"
                    indeterminate={false}
                    progress={props.nextPage.progress}
                    />*/}
                        <StepIndicator
                            customStyles={{stepStrokeCurrentColor: '#FFCE00',labelSize:10
                            ,stepIndicatorLabelFontSize:8,
                            currentStepIndicatorLabelFontSize:9,
                            stepStrokeWidth: 1,
                            stepIndicatorSize: 15,
                            currentStepIndicatorSize:17,
                            
                        }}
                        currentPosition={props.nextPage.progress}
                        //labels={labels}
                        stepCount={7}
                        />
                </View>
                <Content>
                <View style={{justifyContent:'center',paddingLeft:20, paddingTop:heightPercentageToDP('1%'), paddingRight:20,marginTop:0}}>
                    <Card style={{borderRadius:10}}>
                    <CardItem style={{justifyContent:'center',borderTopLeftRadius:10,borderTopRightRadius:10}}>
                    <Grid>
                        <Row style={{justifyContent:'center'}}>
                        <Text style={{...material.title,textAlign:'center',marginBottom:5,color:'#339966'}}>{item.header}</Text>
                        </Row>
                        <Row style={{justifyContent:'center'}}>
                           <Text style={{...material.caption}}>{item.subHead} </Text>
                        </Row>
                    </Grid>
                    </CardItem>
                   
                        {this.props.children}
                   
                    <CardItem style={{justifyContent:'center',borderBottomLeftRadius:10,borderBottomRightRadius:10}}>
                    <Button style={{...styles.regButton,backgroundColor:item.buttonColor}}
                    //onPress={()=>props.parentProperty.navigation.navigate(item.nextForm)}
                    onPress={props.handleClick}
                     >
                            <Text>{item.buttonText}</Text>
                           </Button>
                    </CardItem> 
                </Card>
                </View>
                <View style={styles.footer}>
                 <TouchableOpacity onPress={()=>props.parentProperty.navigation.navigate('Login')}>
                     <Text style={styles.text}>Already have an account? Login</Text>
                </TouchableOpacity>
                </View>
              </Content>
            </Container>
        )
    }

const styles=StyleSheet.create({
    footer:{
        backgroundColor:'#339966',
        justifyContent:'center',
        alignItems:'center'
    },
    Container:{
        backgroundColor:'#339966',
    },
    text:{
        color:'#ffffff'
    },
    navigator:{...material.headline,padding:10,color:'#ffffff'},
    regButton:{
        width:'95%',
        justifyContent:'center',
       
        
    }
})
export default Register