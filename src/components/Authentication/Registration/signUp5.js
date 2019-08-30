import React from 'react';
import {Header,CardItem,Form,Item,Input} from 'native-base';
import {View,StyleSheet,Text} from 'react-native'
import Wrapper from './Wrapper';
import RegisterTheme from './index';
//import { TouchableOpacity } from 'react-native-gesture-handler';
import {TransparentButton} from './commonButtons'
import { human,material } from 'react-native-typography';
import Spinner from '../../Spinner';
import Empty from '../../Empty';
import {registerPaymentDetails} from '../../../redux/actions/Authentication/auth';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

let  error=false;
let registeringText = "Taking you to\nthe next Step...";
 class signup5 extends React.Component {
    static navigationOptions = ({ navigation }) => ({
        header: (
            <Header style={{display:'none'}} androidStatusBarColor="#339966">
            </Header>
        )
      });

    state={
        loading:false,
        address:'',
        bank_name:'',
        account_name:'',
        account_number:'',
        address_Error:{status:false, message:''},
        bank_name_error:{status:false,message:''},
        account_name_error:{status:false,message:''},
        account_number_error:{status:false,message:''},
        serverErrors:{status:false,message:''}
    }

     componentWillReceiveProps(nextProps){
          console.log('I am the next props.. ',nextProps);
            const {error,pay_success} = nextProps.data.auth.pay;
            if(pay_success){
              registeringText = "Your payment details\n has been registered\n successfully!...";
            setTimeout(()=>{
                this.props.navigation.navigate('Signup6');
              this.setState({loading:false,serverErrors:{status:false,message:''}})
            },4000)
          }else{
                this.setState({loading:false,serverErrors:{status:true,message:error}});
                registeringText = "Submiting your Data\nPlease Wait...";
          }
     }
     
     validateInput=()=> {
        const TextPattern= ".{4,}"
        const addressPattern=".{6,}"
        const accountNumberPattern = ".{9,}"
        error=false;
        
        if(!this.state.address.match(addressPattern)){
          error=true;
          this.setState({address_Error:{status:true,message:'please enter a valid address'}})
        }
      
        if(!this.state.bank_name.match(TextPattern)){
            error=true;
            this.setState({bank_name_error:{status:true,message:'please enter a correct bank name'}})
        }

        if(!this.state.account_name.match(TextPattern)){
            error=true;
            this.setState({account_name_error:{status:true,message:'please enter a correct acount name'}})
        }

        if(!this.state.account_number.match(accountNumberPattern)){
            error=true;
            this.setState({account_number_error:{status:true,message:'please enter the correct account number'}})
        }
      
    } // ends validation


     handleClick=()=>{
         this.validateInput();
         if(!error){
             const data={
               address:this.state.address,
               account_name:this.state.account_name,
               account_no:this.state.account_number,
               bank_name:this.state.bank_name
             }
            this.setState({loading:true});
            this.props.registerPaymentDetails(data);
         }//ends if statement
     }
     render(){
        const item={
            header: 'Payment Details',
            subHead:'We need this information to pay you',
            name: 'One',
            image:'asset:/image/welcome.PNG',
            buttonText:'Next',
            progress:4,
            buttonColor:'#AAAAAA',
            nextForm:'Signup6'
          }
         const {address_Error,account_name_error,serverErrors,account_number_error,bank_name_error,loading} = this.state;
        return (
            <Wrapper>
            <RegisterTheme handleClick={this.handleClick} parentProperty={this.props} nextPage={item}>
                <Wrapper>
                <View style={{flex:1,margin:20, flexDirection:'row',justifyContent:'center'}}>
                        <View style={{flex:1, flexDirection:'row',justifyContent:'center', alignItems:'flex-start'}}>
                           <TransparentButton color='#ffffff' background='#339966' text='Personal'/> 
                        </View>
                        <View style={{flex:1,flexDirection:'row',justifyContent:'center', alignItems:'flex-end'}}>
                          <TransparentButton color='#000000' background='transparent' text='Bussiness'/>     
                        </View>     
                   </View>
                    <CardItem>
                        <Form style={{width:'100%'}}>
                            <Item error={address_Error.status}>
                                <Input 
                                 onChangeText={(text)=>this.setState({address:text})}
                                 onFocus={()=>this.setState({address_Error:{status:false,message:''}})}
                                 style={human.subhead} placeholder='Address'/>
                            </Item>
                            {address_Error.status ?<Text style={styles.errorText}>{address_Error.message}</Text>:<Empty/>}

                            <Item error={bank_name_error.status}>
                                <Input
                                 onChangeText={(text)=>this.setState({bank_name:text})}
                                 onFocus={()=>this.setState({bank_name_error:{status:false,message:''}})}
                                 style={human.subhead} placeholder='Bank Name'/>
                            </Item>
                             {bank_name_error.status ?<Text  style={styles.errorText}>{bank_name_error.message}</Text>:<Empty/>}

                            <Item error={account_name_error.status}>
                                <Input 
                                 onChangeText={(text)=>this.setState({account_name:text})}
                                 onFocus={()=>this.setState({account_name_error:{status:false,message:''}})}
                                style={human.subhead} placeholder='Account name'/>
                            </Item>
                             {account_name_error.status ?<Text  style={styles.errorText}>{account_name_error.message}</Text>:<Empty/>}
                             
                            <Item error={account_number_error.status}>
                                <Input
                                 keyboardType={'numeric'}
                                 onChangeText={(text)=>this.setState({account_number:text})}
                                 onFocus={()=>this.setState({account_number_error:{status:false,message:''}})}
                                 style={human.subhead} placeholder='Account number'/>
                            </Item>
                             {account_number_error.status ?<Text  style={styles.errorText}>{account_number_error.message}</Text>:<Empty/>}

                            <Item>
                                <Input style={human.subhead} placeholder='Bank verification Number'/>
                            </Item>
                            {serverErrors.status ? <Text>{serverErrors.message}</Text>:<Empty/>}
                        </Form>
                    </CardItem>
                </Wrapper>
            </RegisterTheme>
             {loading ? <Spinner text={registeringText}/>:<Empty/>}
            </Wrapper>
            )
     }
    
}
const styles = StyleSheet.create({
    errorText:{
    ...material.caption,
    color:'red',
    marginLeft:20,
    marginTop:10
},
})

signup5.propTypes = {
    data:PropTypes.object.isRequired,
    registerPaymentDetails:PropTypes.func.isRequired
}

const mapStateToProps = (state) =>({
    data:state
})

export default connect(mapStateToProps,{registerPaymentDetails})(signup5);