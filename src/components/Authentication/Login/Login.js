import React, { Component } from 'react';
import {Text,Container, Header,Button,Input, Form,Icon,Item,Grid, Row} from 'native-base';
import {View,TouchableOpacity,StyleSheet, Dimensions} from 'react-native';
//import {test} from '../../../redux/actions/homeAction';
import {connect} from 'react-redux';
import {material} from 'react-native-typography';
import {login} from '../../../redux/actions/Authentication/auth';
import Wrapper from '../../Wrapper';
import Spinner from '../../Spinner';
import Empty from '../../Empty';
import route from './routeTohit';

import PropTypes from 'prop-types';

const {height} = Dimensions.get('window');

let error = false;
let registeringText = 'Signing you in...'
 class Login extends Component {

  static navigationOptions = ({ navigation }) => ({
        header: (
            <Header style={{display:'none'}} androidStatusBarColor="#F8F8F8">
            </Header>
        )
      });

      state={
        email:'',
        password:'',
        serverErrors:{status:false,message:''},
        loading:false,
            emailError:{
                status:false,
                message:''
            },
            passwordError:{
                status:false,
                message:''
            
        },
        error:false
      }

     componentWillMount(){
         
     }

     componentWillReceiveProps(nextProps){
//this.props.navigation.navigate('HomeIndex')
           // console.log(nextProps);
            const {error,user,User} = nextProps.data.auth;
            console.log('i am user ', user, 'i am error', error)
            if(user){
           
            setTimeout(()=>{
               route(this.props.navigation,User)
                //this.props.navigation.navigate('HomeIndex');
            this.setState({loading:false,serverErrors:{status:false,message:''}})
            },4000)
            }else{
                this.setState({loading:false,serverErrors:{status:true,message:error}});
               
            }
         
     }

     validateInput=()=>{
        const emailPattern= "[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
        const passwordPattern= ".{1,}"
        error=false;

        if(!this.state.email.match(emailPattern)){
         error=true;   
         this.setState({
           emailError:{status:true,message:'Please Enter a valid Email',error:true}
        })
     }


   if(!this.state.password.match(passwordPattern)){
      
     error=true;     
     this.setState({
     passwordError:{status:true,message:'Please Enter Your Password',error:true}
  })
 }
}// ends validate Input


     handleClick=()=>{
        this.validateInput();
        console.log(error);
        if(!error){
            const data={
                email:this.state.email,
                password:this.state.password
            }
          this.setState({loading:true})
          this.props.login(data);
        }
        return
    }


    render() {
        const {emailError,passwordError} =  this.state; 
        return (
           <Wrapper>
            <Container>
                <View style={{flex:0.1,justifyContent:'center'}}>
                    <TouchableOpacity onPress={() =>this.props.navigation.goBack()} style={styles.backButton}>
                        <Text style={styles.backuttonText}>{'<'}</Text>
                    </TouchableOpacity>

                </View>
                <View style={{flex:0.7}}>
                    <Grid>
                      <Row  style={{justifyContent:'center',alignItems:'center'}}>
                         <Text 
                         style={{...styles.Welcomtext}}
                         >
                             Welcome Back,
                         </Text>
                       </Row>
                    </Grid>
                </View>
                <View style={{flex:1.3}}>
                <Grid>  
                  <Row style={{justifyContent:'center',alignItems:'center'}}>

                       <Form style={{...styles.formView}}>
                            <Item error={emailError.status}>
                                <Icon style={material.body1} active name='person' />
                                <Input
                                onFocus={()=>this.setState({emailError:{status:false,message:''}})}
                                onChangeText={(text)=>this.setState({email:text})} style={material.body1} placeholder='Email'/>
                            </Item>
                            {emailError.status ? <Text  style={styles.errorText}>{emailError.message}</Text>:<Text></Text>}
                            <Item error={passwordError.status} style={{marginTop:30}}>
                                <Icon style={material.body1} active name='lock' />
                                <Input 
                                onFocus={()=>this.setState({passwordError:{status:false,message:''}})}
                                 secureTextEntry={true}
                                 onChangeText={(text)=>this.setState({password:text})} style={material.body1} placeholder='Password'/>
                            </Item>
                            {passwordError.status ? <Text style={styles.errorText}>{passwordError.message}</Text>:<Empty/>}

                            {this.state.serverErrors.status ?
                                <Text style={{color:'red'}}>{this.state.serverErrors.message}</Text>
                                  :<Empty/>}
                             <Button 
                                    onPress={this.handleClick} 
                                    style={{...styles.buttons,backgroundColor:'#339966',marginTop:30}}>
                                        <Text>LOGIN</Text>
                             </Button>
                             <TouchableOpacity onPress={()=>this.props.navigation.navigate('Register')} style={{marginTop:10}}> 
                                 <Text style={{...material.body1,
                                    alignSelf:'center'}}>
                                 Dont have an account?<Text style={{color:'#339966'}}> Sign Up</Text>
                                </Text>
                            </TouchableOpacity>   
                       </Form>

                     </Row>
                  </Grid>
                </View>
            </Container>
            {this.state.loading?<Spinner text={registeringText}/>:<Empty/>}
         </Wrapper>
        )
    }
 }
const styles=StyleSheet.create({
    backButton:{
        marginLeft:10     
    },
    backuttonText:{
        fontSize:30,
        color:'#000',
        alignSelf:'flex-start'
    },
     formView:{
     width:'95%',
     
     },
     Welcomtext:{
        color:'#339966',
        fontSize:22,
        fontWeight:'bold',
        textAlign:'center',
        
    },
    buttons:{
        width:'80%',
        height:60,
        alignSelf:'center',
        justifyContent:'center'
    },
    errorText:{
        ...material.caption,
        color:'red',
        marginLeft:20,
        marginTop:10
    }
});

Login.propTypes={
login:PropTypes.func.isRequired,
data:PropTypes.object.isRequired,
}

const mapStateToProps=(state)=>({
data:state
})

export default connect(mapStateToProps,{login})(Login);