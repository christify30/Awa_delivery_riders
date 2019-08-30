import React from 'react';
import {Header,CardItem,Form,Item,Input,Picker,Icon} from 'native-base';
import {View,StyleSheet,Text,Image} from 'react-native'
import Wrapper from './Wrapper';
import RegisterTheme from './index';
///import { TouchableOpacity } from 'react-native-gesture-handler';
import {TransparentButtonWithICom as IconButton} from './commonButtons'
import {human,material } from 'react-native-typography';
import {registerPersonalInformation} from '../../../redux/actions/Authentication/auth';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import Empty from '../../Empty';
import Spinner from '../../Spinner';
import ImagePicker from 'react-native-image-picker';

let error = false;
let registeringText = "Taking you to\nthe next Step...";
const options = {
  title: 'Select Avatar',
  customButtons: [{ name: 'fb', title: 'Choose Photo from Facebook' }],
  storageOptions: {
    skipBackup: true,
    path: 'images',
  },
};

 class signup2 extends React.Component {
    static navigationOptions = ({ navigation }) => ({
        header: (
            <Header style={{display:'none'}} androidStatusBarColor="#339966">
            </Header>
        )
      });
      state={
          serverErrors:{status:false,message:''},
          loading:false,
          firstname:'',
          lastname:'',
          language:'',
          sex:'',
          avatarDriver:null,
          avatarDriverSelected:'',
          avatarLiecense:null,
           avatarLiecenseSelected:'',
          firstnameError:{
                status:false,
                message:''
            },
            lastnameError:{
                status:false,
                message:''
            },
           languageError:{
                status:false,
                message:''
            },
           sexError:{
                status:false,
                message:''
            },
            avatarDriverError:{
                status:false,
                message:''
            },
            avatarLiecenseError:{
                status:false,
                message:''
            }
        
      }

      SelectImage=(image)=>{
          console.log('select image.....')
          ImagePicker.showImagePicker(options, (response) => {
  console.log('Response = ', response);

  if (response.didCancel) {
    console.log('User cancelled image picker');
  } else if (response.error) {
    console.log('ImagePicker Error: ', response.error);
  } else if (response.customButton) {
    console.log('User tapped custom button: ', response.customButton);
  } else {
    const source = { uri: response.uri };
     //console.log(" i am the respose....",response);
    // You can also display the image using data:
    // const source = { uri: 'data:image/jpeg;base64,' + response.data };
console.log("co--==-=-",source)
 if(image=="dp"){
   this.setState((state)=>{return {avatarDriverSelected:"Drivers photo\nUploaded",avatarDriver:response}});
    }
  if(image=="dl"){
    this.setState((state)=>{return {avatarLiecenseSelected:"Drivers licence\nUploaded",avatarLiecense:response}});
    }
 
  }//ends else

});
      }

      componentWillReceiveProps(nextProps){
            console.log('I am the next props.. ',nextProps);
            const {error,pi_success} = nextProps.data.auth.infor;
            if(pi_success){
              registeringText = "Your personal information\n has been registered\n successfully!...";
            setTimeout(()=>{
                this.props.navigation.navigate('Signup4');
              this.setState({loading:false,serverErrors:{status:false,message:''}})
            },4000)
          }else{
                this.setState({loading:false,serverErrors:{status:true,message:error}});
                registeringText = "Submiting your Data\nPlease Wait...";
          }
      }

     validateInput=()=> {
           const TextPattern= ".{1,}"
           this.setState({serverErrors:{status:false,message:''}});
           error=false;
           if(!this.state.firstname.match(TextPattern)){
            
            error=true;   
            this.setState({
              firstnameError:{status:true,message:'Please Enter Your First Name',error:true}
           })
        }

           if(!this.state.lastname.match(TextPattern)){
            
            error=true;   
            this.setState({
              lastnameError:{status:true,message:'Please Enter Your Last Name',error:true}
           })
        }

           if(!this.state.language.match(TextPattern)){
            
            error=true;   
            this.setState({
              languageError:{status:true,message:'Please Enter Your Language(s)',error:true}
           })
        }
        if(this.state.avatarDriver==null){
          error=true;
          this.setState({
            avatarDriverSelected:'please upload your photo'
         })
        }
        if(this.state.avatarLiecense==null){
          error=true;
          this.setState({
            avatarLiecenseSelected:'please upload your drivers Liscence'
         })
        }

        console.log('working')
        // return error;
        
       }
      handleClick=()=>{
       // console.log("i am ----->",this.state)
          //this.props.registerPersonalInformation(data);
          this.validateInput();
           console.log(error);
           if(!error){
            const data = new FormData();
            data.append('lastname',this.state.lastname);
            data.append(' firstname',this.state.firstname);
            data.append('language',this.state.language);
            data.append('sex',this.state.sex);
            data.append('avatarDriver', {
              uri : this.state.avatarDriver.uri,
              type: this.state.avatarDriver.type,
              name: this.state.avatarDriver.fileName
             });
             data.append('avatarLiecense',
             {
                  uri : this.state.avatarLiecense.uri,
                  type: this.state.avatarLiecense.type,
                  name: this.state.avatarLiecense.fileName}
             );
             //const jsonData=JSON.stringify(data)
           
          /*    const data={
                  lastname:this.state.lastname,
                  firstname:this.state.firstname,
                  language:this.state.language,
                  sex:this.state.sex,

                  avatarDriver:this.state.avatarDriver.data,

                  avatarLiecense:this.state.data
                }*/
                console.log('state.../........',data);
               this.setState({loading:true})
               this.props.registerPersonalInformation(data);
          }
          return
      }

     render(){
         const {languageError,lastnameError,firstnameError,sexError}= this.state;

        const item={
            header: 'Personal Information',
            subHead:'We’ll only display your name and Driver photo',
            name: 'One',
            image:'asset:/image/welcome.PNG',
            buttonText:'Next',
            progress:1,
            buttonColor:'#AAAAAA',
            nextForm:'Signup4'
          }
        return (
            <Wrapper>
            <RegisterTheme handleClick={this.handleClick} parentProperty={this.props} nextPage={item}>
                <Wrapper>
                    <CardItem>
                        <Form style={{width:'100%'}}>

                            <Item error={firstnameError.status} >
                                <Input onChangeText={(text)=>this.setState({firstname:text})} style={human.subHead} placeholder='First Name'
                                 onFocus={()=>this.setState({serverErrors:{status:false,message:''},firstnameError:{status:false,message:''}})}
                                />
                            </Item>
                              {firstnameError.status ? <Text  style={styles.errorText}>{firstnameError.message}</Text>:<Empty/>}

                            <Item error={lastnameError.status} >
                                <Input onChangeText={(text)=>this.setState({lastname:text})} style={human.subHead} placeholder='Last Name'
                                 onFocus={()=>this.setState({serverErrors:{status:false,message:''},lastnameError:{status:false,message:''}})}
                                />
                            </Item>
                              {lastnameError.status ? <Text  style={styles.errorText}>{lastnameError.message}</Text>:<Empty/>}

                            <Item error={languageError.status} >
                                <Input onChangeText={(text)=>this.setState({language:text})} style={human.subHead} placeholder='Language'
                                 onFocus={()=>this.setState({languageError:{serverErrors:{status:false,message:''},status:false,message:''}})}
                                />
                            </Item>
                              {languageError.status ? <Text  style={styles.errorText}>{languageError.message}</Text>:<Empty/>}

                              <Item error={sexError.status} style={{marginLeft:10}} picker>
                                <Picker
                                mode="dropdown"
                                iosIcon={<Icon name="arrow-down" />}
                                style={{ width: undefined }}
                                placeholder="Select your SIM"
                                placeholderStyle={{ color: "#bfc6ea" }}
                                placeholderIconColor="#007aff"
                                selectedValue={this.state.sex}
                                onValueChange={(value)=>this.setState({serverErrors:{status:false,message:''},sex:value})}
                                 >
                                <Picker.Item label="Select your sex" value="__" />
                                <Picker.Item label="Male" value="male" />
                                <Picker.Item label="Female" value="female" />
                              </Picker>
                              </Item>
                               {sexError.status ? <Text style={styles.errorText}>{sexError.message}</Text>:<Empty/>}
                        </Form>
                        
                        <Image/>
                    </CardItem>
                    <View style={{flex:1,margin:20, flexDirection:'row',justifyContent:'center'}}>
                        <View style={{flex:1,
                             flexDirection:'row', 
                             justifyContent:'flex-start',
                             alignItems:'flex-start'}}>
                           <IconButton text={this.state.avatarDriverSelected} click={()=>this.SelectImage('dp')} Icon='paper' text='Upload your driver photo'/> 
                           <Text style={{...material.caption,color:'#339966',position:'absolute',left:0,top:-30}}>{this.state.avatarDriverSelected}</Text>
                         
                        </View>
                        <View style={{flex:1, 
                            flexDirection:'row', 
                            justifyContent:'flex-end',
                            alignItems:'flex-end'}}>
                          <IconButton text={this.state.avatarLiecenseSelected} click={()=>this.SelectImage('dl')} Icon='paper' text='Upload your drivers liscence'/>  
                          <Text style={{...material.caption,color:'#339966',position:'absolute',left:10,top:-30}}>{this.state.avatarLiecenseSelected}</Text>   
                        </View>     
                  </View>
                  {this.state.serverErrors.status ?
                   
                   alert(this.state.serverErrors.message)
               
                  :Empty}
                </Wrapper>
            </RegisterTheme>
             {this.state.loading?<Spinner text={registeringText}/>:<Empty/>}
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
 

signup2.propTypes={
registerPersonalInformation:PropTypes.func.isRequired
}

const mapStateToProps = (state) =>({
   data:state
})

export default connect(mapStateToProps,{registerPersonalInformation})(signup2)