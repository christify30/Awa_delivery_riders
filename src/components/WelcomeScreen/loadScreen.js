import React, { Component } from 'react'
import setAuthToken from '../../axios/setAuthToken';
import Spinner from '../Spinner';
import {Header} from 'native-base';
import {Text,View,StatusBar} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import {getProfile} from '../../redux/actions/Authentication/auth';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

class LoadScreen extends Component{
    static navigationOptions = ({ navigation }) => ({
        header: (
            <Header style={{display:'none'}} androidStatusBarColor="#339966">
            </Header>
        )
      });
    state={
        spin:true,
        nav:false
    }

    componentWillReceiveProps(nextProps){
             if(this.state.nav){
                 if(!nextProps.data.profile.hasError){
                    this.props.navigation.navigate('HomeIndex');//HomeIndex
                 }else{
                    this.props.navigation.navigate('Login');
                 }
             }
    }

    componentDidMount() {
       
            AsyncStorage.getItem('@LoginToken')
            .then(value=>{
               console.log('i am the login token...>',value);
               if(value!=='empty'){
               setAuthToken(value);
               this.props.getProfile();
               this.setState({nav:true})
               //this.props.navigation.navigate('HomeIndex');//HomeIndex
               }else{
                AsyncStorage.getItem('@newUser')
                .then(reply=>{
                    if(reply=='no'){
                        console.log('i am the reply..>',reply);
                        this.props.navigation.navigate('Login')
                    }else{
                        AsyncStorage.setItem('@newUser', 'no')
                        .then(__=>{console.log('now an old user')}).catch(err=>{console.log(err)})
                        console.log('i am the reply..>',reply);
                        this.props.navigation.navigate('Welcome1')
                     }
                })
                  
               }
            })
            .catch(err=>{
               console.log(err);
            })
       
    }

    render(){
        return(
        <View style={{flex:1}}>
            <StatusBar backgroundColor="#339966"  androidStatusBarColor="#339966" />
            {this.state.spin ? <Spinner text={'Loading... \nPlease wait '}/> : <Text></Text>}
        </View>)
    }
}
const mapStateToProps=(state)=>({
    data:state.auth
})

LoadScreen.propTypes={
    getProfile:PropTypes.func.isRequired
}
export default  connect(mapStateToProps,{getProfile})(LoadScreen)