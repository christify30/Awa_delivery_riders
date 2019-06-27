import React from 'react';
import {Header,Button, Icon, Left,Body,Right,Title} from 'native-base';
import {TouchableOpacity} from 'react-native';
import {material} from 'react-native-typography';

import {StyleSheet,Text} from 'react-native'
//import Icon from 'react-native-vector-icons/FontAwesome';

const header=({props,title})=> {
    return (
        <Header
        style={{backgroundColor:'#F8F8F8'}}  androidStatusBarColor="#339966">
            <Left>
                <TouchableOpacity
                  onPress={() =>props.navigation.openDrawer()}
                >
                   <Icon style={styles.icon} name="menu" />
                </TouchableOpacity>
            </Left>
             <Body style={{marginLeft:50}}>
                <Title style={styles.headerText}>{title}</Title>
            </Body>
            <Right>
               
            </Right>
        </Header>    
    )
}
const styles=StyleSheet.create({
    icon:{
        color:'#fff',
        borderRadius:100,
        backgroundColor:'#339966',
        paddingLeft:10,
        paddingRight:10,
        paddingTop:5,
        paddingBottom:5
    }
    ,headerText:{
        ...material.subheadingWhite,
          color:'#339966',
        alignSelf:'center'
    }
})
export default header;