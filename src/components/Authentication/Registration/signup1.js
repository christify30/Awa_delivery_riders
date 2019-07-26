import React from 'react';
import {Header,CardItem,Form,Item,Input,Body} from 'native-base';
import {View,Text,StyleSheet} from 'react-native'
import Wrapper from './Wrapper';
import RegisterTheme from './index';
//import { TouchableOpacity } from 'react-native-gesture-handler';
import {TransparentButton} from './commonButtons'
import {human,material} from 'react-native-typography';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
//import Spinner from 'react-native-spinkit';
import Spinner from './Spinner';
import {register} from '../../../redux/actions/Authentication/auth'

let error=false;
let registeringText = "Submiting your Data\nPlease Wait...";
 class signup1 extends React.Component {
    static navigationOptions = ({ navigation }) => ({
        header: (
            <Header style={{display:'none'}} androidStatusBarColor="#339966">
            </Header>
        )
      });

    state={
        email:'',
        phone:'',
        password:'',
        serverErrors:{status:false,message:''},
        loading:false,
            emailError:{
                status:false,
                message:''
            },
            phoneError:{
                status:false,
                message:''
            },
            passwordError:{
                status:false,
                message:''
            
        },
        error:false
      }
    
      componentWillReceiveProps(nextProps){
          console.log('I am the next props.. ',nextProps);
          const {error,user} = nextProps.data.auth;
          if(user){
            registeringText = "Registeration successfull !";
          setTimeout(()=>{
              this.props.navigation.navigate('Signup2');
            this.setState({loading:false,serverErrors:{status:false,message:''}})
          },4000)
        }else{
              this.setState({loading:false,serverErrors:{status:true,message:error}});
              registeringText = "Submiting your Data\nPlease Wait...";
        }
      }

       validateInput=()=>{
           const emailPattern= "[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
           const passwordPattern= ".{6,}"
           const phonePattern =".{9,}"
           error=false;
           if(!this.state.email.match(emailPattern)){
            
            error=true;   
            this.setState({
              emailError:{status:true,message:'Please Enter a valid Email',error:true}
           })
        }

        if(!this.state.phone.match(phonePattern)){ 
            error=true;   
            this.setState({
            phoneError:{status:true,message:'Please Enter a valid phone number',error:true}
         })
      }

      if(!this.state.password.match(passwordPattern)){
         
        error=true;     
        this.setState({
        passwordError:{status:true,message:'The password must be atLeast three characters',error:true}
     })
    }
   //console.log('working')
        // return error;
        
       }
      handleClick=()=>{
          this.validateInput();
          console.log(error);
          if(!error){
              const data={
                  email:this.state.email,
                  phone:this.state.phone,
                  password:this.state.password
              }
            this.setState({loading:true})
            this.props.register(data);
          }
          return
      }

   
     render(){
        const Empty=<Text style={{backgroundColor:'#339966',width:0,height:0,position:'absolute'}}></Text>

        const item={
            header: 'Earn more as a rider',
            subHead:'Let’s get you signed up, its easy',
            name: 'One',
            image:'asset:/image/welcome.PNG',
            buttonText:'Continue',
            progress:0,
            buttonColor:'#AAAAAA',
            nextForm:'Signup2',
        
          }
          const {emailError,passwordError,phoneError} =  this.state; 
        return (
            <Wrapper>
            <RegisterTheme handleClick={this.handleClick} parentProperty={this.props} nextPage={item}>
                <Wrapper>
                    <CardItem>
                        <Form style={{width:'100%'}}>
                            <Item error={emailError.status} >
                                <Input onChangeText={(text)=>this.setState({email:text})} style={human.subHead} placeholder='Email'
                                 onFocus={()=>this.setState({emailError:{status:false,message:''}})}
                                />

                            </Item>
                            {emailError.status ? <Text  style={styles.errorText}>{emailError.message}</Text>:<Text></Text>}

                            <Item error={phoneError.status} style={{marginTop:30}}>
                                <Input onChangeText={(text)=>this.setState({phone:text})} style={human.subHead} 
                                keyboardType={'numeric'}
                                placeholder='Phone Number'
                                 onFocus={()=>this.setState({phoneError:{status:false,message:''}})}
                                />
                            </Item>
                            {phoneError.status ? <Text  style={styles.errorText}>{phoneError.message}</Text>:<Text></Text>}
                            <Item error={passwordError.status} style={{marginTop:30}}>
                                <Input
                                secureTextEntry={true}
                                onChangeText={(text)=>this.setState({password:text})} style={human.subHead} placeholder='password'
                                onFocus={()=>this.setState({passwordError:{status:false,message:''}})}
                                />    
                            </Item>
                            {passwordError.status ? <Text style={styles.errorText}>{passwordError.message}</Text>:Empty}
                        </Form>
                    </CardItem>
                    {this.state.serverErrors.status ?
                    <CardItem>
                        <Text style={{color:'red'}}>{this.state.serverErrors.message}
                        </Text>
                    </CardItem> 
                       :Empty}
                   {/*<View style={{flex:1,margin:20, flexDirection:'row',justifyContent:'center'}}>
                        <View style={{flex:1, flexDirection:'row', justifyContent:'flex-start',alignItems:'flex-start'}}>
                           <TransparentButton color='#000000' background='transparent' text='Personal'/> 
                        </View>
                        <View style={{flex:1,flexDirection:'row',justifyContent:'flex-end',alignItems:'flex-end'}}>
                          <TransparentButton color='#000000' background='transparent' text='Bussiness'/>     
                        </View> 
                  </View> */}   
                </Wrapper>
            </RegisterTheme>
              {this.state.loading?<Spinner text={registeringText}/>:Empty}
            </Wrapper>
            )
     }
    
}


const styles=StyleSheet.create({
errorText:{
    ...material.caption,
    color:'red',
    marginLeft:20,
    marginTop:10
},
loadingModal:{
    justifyContent:'center',
    alignItems:'center',
    position:"absolute",
    width:'100%',
    height:'100%',
    opacity:0.8,
    zIndex:200,
    backgroundColor:'#339966',
    
}
});

signup1.propTypes={
  register:PropTypes.func.isRequired,
  data:PropTypes.object.isRequired
}
const mapStateToProps = (state)=>({
   data:state
})
export default connect(mapStateToProps,{register})(signup1)