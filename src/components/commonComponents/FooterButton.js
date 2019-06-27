import React from 'react';
import {Button,Text} from 'native-base';
import {StyleSheet} from 'react-native'

const FooterButton=()=>
<Button
style={styles.Button}
onPress={props.onPress}
>
   {props.children}
</Button>
const styles=StyleSheet.create({
    Button:{
    backgroundColor:'#339966',
    width:'100%',
    color:'#fff'
    }
});
export default FooterButton;