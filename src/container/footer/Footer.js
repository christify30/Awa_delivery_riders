import React from 'react'
import {Footer,FooterTab,Button} from 'native-base';
import {material} from 'react-native-typography';
import {Text} from 'react-native';

const foot=(props)=>   
 <Footer>
    <FooterTab>
        <Button onPress={props.onPress} full style={{backgroundColor:props.color}}>
         <Text style={{...material.subheadingWhite,textAlign:'center'}}>{props.text}</Text>
        </Button>
    </FooterTab>
</Footer>

export default foot;