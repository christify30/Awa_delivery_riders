import React from 'react';
import {View,StyleSheet,Text,Image} from 'react-native';
import {Button} from 'native-base';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {material} from 'react-native-typography'

 const welcome12Container=(props)=>{

    return (
        <View style={{flex:1,flexDirection:'column'}}>
            <View style={{flex:6}}>
                 <Image
                     style={{width: '100%',height:'100%'}}
                     source={{uri:props.image}}
                />
                <Button style={styles.yellowSkip} >
                <TouchableOpacity onPress={props.onPress}>
                <Text style={{color:'#339966'}}>skip</Text>
                </TouchableOpacity>
                </Button>
               
            </View>
            <View style={{flex:1,justifyContent:'center',alignItems:'center',padding:50}}>
                <Text style={{...material.headline,color:'#339966'}}>{props.headline}</Text>
                <Text style={{...material.caption,textAlign:'center'}}>
                {props.story}
                </Text>
            </View>
            <View style={{flex:3, flexDirection:'row',alignItems:'flex-end'}}>
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
        borderBottomLeftRadius:80,
        position:'absolute',
        top:0,
        right:0,
        backgroundColor:'#FFCE00',
        width:80,
        height:80,
        justifyContent:'center',
        alignItems:'center'
    },
    swiptButton:{
      backgroundColor:'#F8F8F8',
      height:160,
      justifyContent:'center',
      alignItems:'center',
      borderTopStartRadius:250,
      borderTopEndRadius:250
    },
    te:{
      
        
    }
})
export default welcome12Container;