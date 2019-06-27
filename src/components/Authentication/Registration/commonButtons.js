import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {Text,Button,Input,Icon} from 'native-base';
import {material} from 'react-native-typography';

export const TransparentButton = (props)=>
 <Button style={{backgroundColor:props.background,width:'90%',justifyContent:'center'}}>
    <TouchableOpacity><Text style={{...material.caption,color:props.color}}>{props.text}</Text></TouchableOpacity>
</Button>;

export const TransparentButtonWithICom = (props)=>
    <Button style={{backgroundColor:'transaparent',width:'90%',height:70,alignItems:'center',justifyContent:'center', padding:2}}>
    <TouchableOpacity>
        <Icon style={{...material.display1,color:'#339966',alignSelf:'center'}} name={props.Icon}/>
        <Text style={{...material.caption,textAlign:'center'}}>{props.text}</Text>
    </TouchableOpacity>
    </Button>;