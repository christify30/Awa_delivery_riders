import React from 'react';
import {View,StyleSheet,Text,Image} from 'react-native';
import {Button} from 'native-base';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {material} from 'react-native-typography';
import {heightPercentageToDP} from '../../PixelRatio/pixelRatio'

 const welcome12Container=(props)=>{

    return (
        <View style={{flex:1,flexDirection:'column'}}>
            <View style={{flex:5}}>
                 <Image
                     style={{width: '100%',height:heightPercentageToDP('53%')}}
                     source={{uri:props.image}}
                />
                <Button style={styles.yellowSkip} >
                <TouchableOpacity onPress={props.onPress}>
                <Text style={{color:'#339966',...styles.skip}}>skip</Text>
                </TouchableOpacity>
                </Button>
               
            </View>
            <View style={{flex:1.5,justifyContent:'flex-end',alignItems:'center',padding:50,marginTop:10,backgroundColor:'transparent'}}>
                <Text style={{...material.headline,color:'#339966'}}>{props.headline}</Text>
                <Text style={{...material.caption,textAlign:'center'}}>
                {props.story}
                </Text>
            </View>
            <View style={{flex:2.5, flexDirection:'row',alignItems:'flex-end'}}>
                     <View style={{flex:1}}>
                        <TouchableOpacity onPress={props.onPress} full style={styles.swiptButton}>
                         <Text style={{ transform: [{ rotate: '-90deg' }] }}>Swipe Up</Text>
                         <Image style={{width:30,height:30,marginTop:30}}  source={{uri:'asset:/image/swipe.PNG'}}/>
                       </TouchableOpacity>
                     </View>
            </View>
        </View>
    )
}
const styles=StyleSheet.create({
    yellowSkip:{
        borderBottomLeftRadius:100,
        position:'absolute',
        top:0,
        right:0,
        backgroundColor:'#FFCE00',
        width:80,
        height:80,
        justifyContent:'center',
        alignItems:'center'
    }, skip:{
        marginLeft:20,
        marginBottom:15,
        fontWeight:"bold"
    },
    swiptButton:{
      backgroundColor:'#F8F8F8',
      height:heightPercentageToDP('25%'),
      justifyContent:'center',
      alignItems:'center',
      borderTopStartRadius:450,
      borderTopEndRadius:450
    }
})
export default welcome12Container;