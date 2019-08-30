import React, {Component} from "react";

import { Container,Text} from "native-base";
import Footer from '../../container/footer/Footer';
import Header from '../../container/header/Header';
import {connect} from 'react-redux';
import PropTypes from 'prop-types'
import {getName} from '../../redux/actions/homeAction';
import Mapcontainer from '../../Map/Map';
import {getCurrentPosition} from '../../redux/actions/homeAction';
import {Dimensions,AppRegistry} from 'react-native';
import axios from 'axios';
//import {currentRoute} from '../../redux/actions/routesAction';

const {width,height} = Dimensions.get("window");
const ASPECT_RATION = width / height;
const LATITUDE_DELTA =0.2922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATION;
class HomeScreen extends Component {

  hello=()=>{
    this.props.getName();
  }
     state={
      region:{
        latitude: 6.569278,
        longitude: 3.3821862,
         latitudeDelta: LATITUDE_DELTA,//previous 0.015,
         longitudeDelta: LONGITUDE_DELTA ,// previuos 0.0121
         positionRecieved:false,
         nowOnline:false
      }
   }
   componentDidMount(){
    //this.props.currentRoute('Home')
    this.props.getCurrentPosition();
    
   }
  componentWillReceiveProps(nextProps){
    try {
      const {coords}=nextProps.region.curentLocation;
     // const {inputData} = nextProps;
     if(!this.state.nowOnline){
      const data={
        longitude:coords.longitude,
        latitude:coords.latitude
      }
      axios.post("http://134.209.24.106/v1/rider/rider-status",data)
      .then(res=>{
          if(!res.data.hasError){
            this.setState({nowOnline:true})
            alert('you are now'+ res.data.data.status)
          }else{alert(res.data.errors.message)}
      })
      .catch(err=>{
         alert('you are not online becouse an error occured.')
      })
  
    }
      this.setState({
         region:{
            latitude: coords.latitude,
            longitude: coords.longitude,
            latitudeDelta: LATITUDE_DELTA,
            longitudeDelta:LONGITUDE_DELTA,
            positionRecieved:true
         }
      })
      console.log(coords);
    } catch (error) {
      console.log(error);
       //alert('An error Occured');
    }
   // console.log(nextProps);
  }
goOffline=()=>{
  if(this.state.positionRecieved && this.state.nowOnline){
    const data={
      longitude:this.state.longitude,
      latitude:this.state.latitude
    }
    axios.post("http://134.209.24.106/v1/rider/rider-status",data)
    .then(res=>{
        if(!res.data.hasError){
          alert('you are now'+ res.data.data.status)
          this.propss.navigation.navigate('HomeIndex')
          this.setState({nowOnline:false})
        }else{alert(res.data.errors.message)}
    })
    .catch(err=>{
       alert('an error occured.')
    })
  }
}
componentDidUpdate(previuos,current){

}

  render() {
   
    return (
      <Container>
        <Header props={this.props} title='Your are Online'/>

        <Mapcontainer
          region={this.state.region}
        />
      <Footer color='#C4C4C4' text='Go Offline' onPress={()=>this.goOffline()}/>
      </Container>
    );
  }
}
HomeScreen.propType={
  home:PropTypes.object.isRequired,
  region:PropTypes.object.isRequired,
  getCurrentPosition:PropTypes.func.isRequired,
  //currentRoute:PropTypes.func.isRequired
}

const MapStateToProps=(state)=>({
  name:state.home,
  region:state.home
})

export default connect(MapStateToProps,{getName,getCurrentPosition})(HomeScreen)