import React from 'react'
import {View,StyleSheet,Text} from 'react-native';
import Spinner from 'react-native-spinkit';
import {material} from 'react-native-typography';

 const spinner = (props) => 
<View style={{...styles.loadingModal}}>
   <Spinner isVisible={true} size={60} type='9CubeGrid' color='white'/>
    <Text style={{...material.captionWhite,textAlign:'center'}}>{props.text}</Text>
</View>
const styles=StyleSheet.create({
    loadingModal:{
        justifyContent:'center',
        alignItems:'center',
        position:"absolute",
        width:'100%',
        height:'100%',
        opacity:0.8,
        zIndex:200,
        backgroundColor:'#339966'
    }       
});

export default spinner;