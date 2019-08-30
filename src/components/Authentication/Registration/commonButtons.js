import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {Text,Button,Input,Icon} from 'native-base';
import {material} from 'react-native-typography';
import Wrapper from './Wrapper';


export const TransparentButton = (props)=>
 <Button style={{backgroundColor:props.background,width:'90%',justifyContent:'center'}}>
    <TouchableOpacity><Text style={{...material.caption,color:props.color}}>{props.text}</Text></TouchableOpacity>
</Button>;

export const TransparentButtonWithICom = (props)=>

    <Button 
    onPress={props.click}
    style={{backgroundColor:'transaparent',width:props.width? props.width :'90%',
    height: props.height ? props.height : 70,alignItems:'center',justifyContent:'center', padding:0}}>
    <TouchableOpacity>
        <Icon style={{...material.display1,color:'#339966',alignSelf:'center'}} name={props.Icon}/>
        <Text style={{...material.caption,textAlign:'center',margin:0}}>{props.text}</Text>
    </TouchableOpacity>
   
    </Button>
    
