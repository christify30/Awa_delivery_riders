import React from 'react';
import {Header,CardItem,Form,Item,Input,Picker,Icon,Label} from 'native-base';
import {View,Text} from 'react-native'
import Wrapper from './Wrapper';
import RegisterTheme from './index';
///import { TouchableOpacity } from 'react-native-gesture-handler';
import {TransparentButtonWithICom as IconButton} from './commonButtons';
import {human, material } from 'react-native-typography';
import {heightPercentageToDP,widthPercentageToDP} from '../../../PixelRatio/pixelRatio';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import Empty from '../../Empty';
import {registerDispatch} from '../../../redux/actions/Authentication/auth';
import Spinner from '../../Spinner';
import ImagePicker from 'react-native-image-picker';

let  error=false;
let registeringText = "Taking you to\nthe next Step...";

const options = {
  title: 'Select image',
  customButtons: [{ name: 'fb', title: 'Choose Photo from Facebook' }],
  storageOptions: {
    skipBackup: true,
    path: 'images',
  },
};

 class signup4 extends React.Component {
    static navigationOptions = ({ navigation }) => ({
        header: (
            <Header style={{display:'none'}} androidStatusBarColor="#339966">
            </Header>
        )
      });

            state = {
                loading:false,
                dispatch_type:null,
                plate_numberABJ:'',
                dispatch_type_error:{status:false,message:''},
                plate_numberABJ_error:{status:false,message:''},
                avatar_rwc:null,
                avatar_coo:null,
                avatar_indoc:null,
                avatar_rwc_Selected:'',
                avatar_coo_Selected:'',
                avatar_indoc_Selected:'',
                serverErrors:{status:false,message:''}
            }
     componentWillReceiveProps(nextProps){
          console.log('I am the next props.. ',nextProps);
            const {error,di_success} = nextProps.data.auth.disp;
            if(di_success){
              registeringText = "Your dispatch details\n has been registered\n successfully!...";
            setTimeout(()=>{
                this.props.navigation.navigate('Signup5');
              this.setState({loading:false,serverErrors:{status:false,message:''}})
            },4000)
          }else{
                this.setState({loading:false,serverErrors:{status:true,message:error}});
                registeringText = "Submiting your Data\nPlease Wait...";
          }
     }
     validateInput=()=> {
        const TextPattern= ".{1,}"
        error=false;
        this.setState({serverErrors:{status:false,message:''}});

         if(!this.state.dispatch_type.match(TextPattern)){
                error=true;   
                this.setState({
                dispatch_type_error:{status:true,message:'Please Enter the Dispatch type'}
                })
        }

            if(!this.state.plate_numberABJ.match(TextPattern)){
            error=true;  

            this.setState({
            plate_numberABJ_error:{status:true,message:'Please Enter your plate number'}
            })
        }

        if(this.state.avatar_rwc==null){
            error=true;  

            this.setState({
            avatar_rwc_Selected:'Required!'
            })
        }
        if(this.state.avatar_coo==null){
        error=true;
        this.setState({
            avatar_coo_Selected:'Required!'
        })
        }
        if(this.state.avatar_indoc==null){
        error=true;
        this.setState({
            avatar_indoc_Selected:'Required!'
        })
        }
    }//ends validation

    handleClick=()=>{
        // console.log("i am ----->",this.state)
           //this.props.registerPersonalInformation(data);
           this.validateInput();
            console.log(error);

            if(!error){
             const data = new FormData();
             data.append('dispatch_type',this.state.dispatch_type);
             data.append('plate_number',this.state.plate_numberABJ);
             data.append('avatar_rwc', {
               uri : this.state.avatar_rwc.uri,
               type: this.state.avatar_rwc.type,
               name: this.state.avatar_rwc.fileName
              });
             data.append('avatar_coo',
              {
                   uri : this.state.avatar_coo.uri,
                   type: this.state.avatar_coo.type,
                   name: this.state.avatar_coo.fileName}
              );
              data.append('avatar_indoc',
              {
                   uri : this.state.avatar_indoc.uri,
                   type: this.state.avatar_indoc.type,
                   name: this.state.avatar_indoc.fileName}
              );
                 console.log('state.../........',data);
                this.setState({loading:true})
                this.props.registerDispatch(data);
           }
           return
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
        if(image=="rwc"){
            this.setState((state)=>{return {avatar_rwc_Selected:"Uploaded",avatar_rwc:response}});
        }
        if(image=="coo"){
             this.setState((state)=>{return {avatar_coo_Selected:"Uploaded",avatar_coo:response}});
        }
        if(image=="indoc"){
            this.setState((state)=>{return {avatar_indoc_Selected:"Uploaded",avatar_indoc:response}});
         }

        }//ends else

        });
     }

     render(){
        const item={
            header: 'Dispatch details',
            subHead:'We’ll only display your plate number',
            name: 'One',
            image:'asset:/image/welcome.PNG',
            buttonText:'Next',
            progress:3,
            buttonColor:'#AAAAAA',
            nextForm:'Signup5'
          }
        return (
            <Wrapper>
            <RegisterTheme handleClick={this.handleClick} parentProperty={this.props} nextPage={item}>
                <Wrapper>
                    <View style={{borderWidth:1,borderColor:'#339966',borderRadius:10,margin:10,
                    marginBottom:heightPercentageToDP('1.5%'),
                    paddingLeft:widthPercentageToDP('4%'),paddingRight:widthPercentageToDP('4%')}}>
                        <Text
                          style={{position:'absolute',left:widthPercentageToDP('5%'),top:heightPercentageToDP('-1.2%'),
                        backgroundColor:'#ffffff',
                        color:'#339966'
                        }}
                        >Dispatch type</Text>
                    <Picker
                        mode="dropdown"
                        iosIcon={<Icon name="arrow-down" />}
                        style={{ width: undefined }}
                        placeholder="DIspatch type"
                        placeholderStyle={{ color: "#bfc6ea" }}
                        placeholderIconColor="#007aff"
                        selectedValue={this.state.dispatch_type}
                         onValueChange={(value)=>this.setState({serverErrors:{status:false,message:''},serverErrors:{status:false,message:''},dispatch_type:value})}
                        >
                        <Picker.Item label="Bus" value="1"/>
                        <Picker.Item label="Motorcycle" value="2"/>
                        <Picker.Item label="Skater" value="3"/>
                        <Picker.Item label="Aeroplane" value="4"/>
                        <Picker.Item label="Bicycle" value="5"/>
                    </Picker>
                    </View>
                    <View  style={{paddingLeft:15}}>
                        <Text
                        style={material.caption}
                        >Your bus can carry between 12kg, 5X20inches to 20kg, 5X20inches worth of load.</Text>
                    </View>
                    <CardItem style={{height:heightPercentageToDP('8%')}}>
                        <Item error={this.state.plate_numberABJ_error.status}>
                            <Input
                            onChangeText={(text)=>this.setState({plate_numberABJ:text})}
                            onFocus={()=>this.setState({serverErrors:{status:false,message:''},plate_numberABJ_error:{status:false,message:''}})}
                            style={{color:'rgba(0,0,0,0.5)',...material.body1}} placeholder='Plate Number'/>
                             
                        </Item> 
                    </CardItem>
                    {this.state.plate_numberABJ_error.status?<Text style={{color:'red',marginLeft:15}}>Please enter your plate number</Text>:<Empty/>}

                    <View style={{flex:1,margin:20, flexDirection:'row',justifyContent:'center'}}>
                        <View style={{flex:1,
                             flexDirection:'row', 
                             justifyContent:'flex-start',
                             alignItems:'flex-start'}}>
                           <IconButton
                           click={()=>this.SelectImage('rwc')}
                           width='97%'
                           height={heightPercentageToDP('17%')}
                           Icon='paper' text='Upload Roadworthiness Certificate'/> 
                           <Text style={{...material.caption,color:'#339966',position:'absolute',left:0,top:-11}}>{this.state.avatar_rwc_Selected}</Text>
                        </View>
                        <View style={{flex:1, 
                            flexDirection:'row', 
                            justifyContent:'flex-end',
                            alignItems:'flex-end'}}>
                          <IconButton 
                          click={()=>this.SelectImage('coo')}
                          width='97%'
                          height={heightPercentageToDP('17%')}
                          Icon='paper' text='Upload Certificate of ownership'/>  
                          <Text style={{...material.caption,color:'#339966',position:'absolute',left:0,top:-11}}>{this.state.avatar_coo_Selected}</Text>   
                        </View>  
                        <View style={{flex:1, 
                            flexDirection:'row', 
                            justifyContent:'flex-end',
                            alignItems:'flex-end'}}>
                          <IconButton
                          click={()=>this.SelectImage('indoc')}
                          width='97%'
                          height={heightPercentageToDP('17%')}
                          Icon='paper' text='Upload Insurance Document'/> 
                          <Text style={{...material.caption,color:'#339966',position:'absolute',left:0,top:-11}}>{this.state.avatar_indoc_Selected}</Text>    
                        </View>     
                  </View>
                </Wrapper>
            </RegisterTheme>
             {this.state.loading?<Spinner text={registeringText}/>:<Empty/>}
             {this.state.serverErrors.status ?
                   
                   alert(this.state.serverErrors.message)
               
                  :Empty}
           </Wrapper>
            )
     }
    
}
signup4.propTypes={
 data:PropTypes.object.isRequired,
 registerDispatch:PropTypes.func.isRequired
}

const mapStateToProps=(state)=>({
    data:state
})
export default connect(mapStateToProps,{registerDispatch})(signup4)