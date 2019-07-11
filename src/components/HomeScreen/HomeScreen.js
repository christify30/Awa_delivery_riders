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
import {currentRoute} from '../../redux/actions/routesAction';

const {width,height} = Dimensions.get("window");
const ASPECT_RATION = width / height;
const LATITUDE_DELTA =0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATION;
class HomeScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    drawerLockMode :'unlocked'
  })
  constructor(){
    super();
  }
  hello=()=>{
    this.props.getName();
  }
     state={
      region:{
         latitude: 37.78825,
         longitude: -122.4324,
         latitudeDelta: LATITUDE_DELTA,//previous 0.015,
         longitudeDelta: LONGITUDE_DELTA // previuos 0.0121
      }
   }
   componentDidMount(){
    this.props.currentRoute('Home')
    this.props.getCurrentPosition();
   }
  componentWillReceiveProps(nextProps){
    try {
      const {coords}=nextProps.region.curentLocation;
     // const {inputData} = nextProps;
      this.setState({
         region:{
            latitude: coords.latitude,
            longitude: coords.longitude,
            latitudeDelta: LATITUDE_DELTA,
            longitudeDelta:LONGITUDE_DELTA
         }
      })
      console.log(coords);
    } catch (error) {
      console.log(error);
       //alert('An error Occured');
    }
   // console.log(nextProps);
  }
  render() {
    return (
      <Container>
        <Header props={this.props} title='Your are Online'/>

        <Mapcontainer
          region={this.state.region}
        />
      <Footer color='#C4C4C4' text='Go Offline' onPress={()=>this.props.navigation.navigate('HomeIndex')}/>
      </Container>
    );
  }
}
HomeScreen.propType={
  home:PropTypes.object.isRequired,
  region:PropTypes.object.isRequired,
  getCurrentPosition:PropTypes.func.isRequired,
  currentRoute:PropTypes.func.isRequired
}

const MapStateToProps=(state)=>({
  name:state.home,
  region:state.home
})

export default connect(MapStateToProps,{getName,getCurrentPosition,currentRoute})(HomeScreen)