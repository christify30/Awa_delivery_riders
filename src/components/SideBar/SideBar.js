import React from "react";
import {StyleSheet} from "react-native";
import {currentRoute} from '../../redux/actions/routesAction';
import PropTypes from 'prop-types'
import {connect} from 'react-redux';
import {
  Text,
  View,
  Container,
  List,
  ListItem,
  Content,
  Thumbnail,
  Left,
  Right,
  Body,
  FooterTab,
  Footer,
  Button,
  Switch
} from "native-base";
//import {Switch} from 'react-native-base-switch';
import Star from 'react-native-star-view';
import { material } from "react-native-typography";
import AsyncStorage from '@react-native-community/async-storage';
//import {getProfile} from '../../redux/actions/Authentication/auth'

const routes = [{data:"Home",nav:"Home"},
              {data:"Wallet",nav:'Wallet'},
              {data:"Booking History",nav:'BookingHistory'},
              {data:"Payments",nav:'Payment'},
              {data:"Your Rating",nav:'YourRating'}, 
              {data:"Referral Code",nav:'ReferralCode'},
              {data:"Settings",nav:'Settings'}, 
              {data:"Share App",nav:'ShareApp'},
              {data:"About AWA Delivery",nav:'About'}];

 class SideBar extends React.Component {

state={
  name:'Loading...',
  switchpos:true,
  route:'Home'
}

setCurrentRoute=(nav)=>{
  this.props.currentRoute(nav);
 // console.log(nav);
}
componentWillReceiveProps(nextProps){
  console.log(nextProps);

 }
componentWillMount(){
  const {firstname,lastname}=this.props.data.profile.data;
  // const {firstname,lastname}=this.props.data.profile.data;
   this.setState((state)=>{
     return {name:`${firstname} ${lastname}`}
   })
  //this.props.getProfile();
 // console.log('home--------->',this.props);
 /* const {firstname,lastname}=this.props.data.profile.data;
  this.setState((state)=>{sss
    return {name:`${firstname} ${lastname}`}
  })*/
}

switchChange=()=>{
    this.setState({route:'Home',switchpos:false})
    AsyncStorage.setItem('@LoginToken','empty')
    .then(__=>{
      this.props.navigation.navigate('Login')
    }).catch(err=>{
      alert('an error occured')
    })
    
               
}

  render() {
    let {route} = this.state;
    const uri = "https://s.gravatar.com/avatar/6ce574b021fa96559bf2b1a4ed3e5d3b?s=80"
    return (
      <Container>
        <Content style={styles.content}>
          <View style={styles.headView}>
             <View style={{alignItems:'center'}}>
                <Thumbnail circle large source={{uri: uri}} />
                <Text>{this.state.name}</Text>
                <Star score={4.7} style={styles.starStyle} />
             </View>
             <View style={{flexDirection:'row',padding:15}}>
               <Left>
                 <Text style={{color:'#339966',textAlign:'center'}}>ONLINE</Text>
               </Left>
               <Body>
              
               </Body>
               <Right style={{textAlign:'center'}}>
                  <Switch value={this.state.switchpos} onValueChange={this.switchChange}/>
               </Right>
             </View>
          </View>
          <View style={styles.contentView}>
          <List
          contentContainerStyle={{ marginTop: 120 }}
          >
           {/* <ListItem
             noIndent
             button
             key={0}
             onPress={() =>{ 
              // this.props.navigation.closeDrawer();
               this.props.navigation.navigate("Home");
               this.setState({route:'Home'})
              // this.setCurrentRoute("Home")
               }}

               style={{borderBottomColor:'transparent',fontFamily:'Roboto',
               backgroundColor:route=="Home"? '#339966' : '#F8F8F8', height:50,
               borderEndColor:route=="Home"? '#FFCE00' : 'transparent',
               borderRightWidth:route=="Home"? 5 : 0,
              
             }}
            >
                 <Text
                   style={{...styles.text ,color:route=="Home"? '#fff' : 'rgba(0,0,0,0.7)'}}
                  >Home</Text>   
            </ListItem>

            <ListItem
              key={1}
             noIndent
             button
             onPress={() =>{ 
              // this.props.navigation.closeDrawer();
               this.props.navigation.navigate("Wallet");
               this.setState({route:'Wallet'})
              // this.setCurrentRoute("Wallet")
               }}

               style={{borderBottomColor:'transparent',fontFamily:'Roboto',
               backgroundColor:route=="Wallet"? '#339966' : '#F8F8F8',         height:50,
               borderEndColor:route=="Wallet"? '#FFCE00' : 'transparent',
               borderRightWidth:route=="Wallet"? 5 : 0,
              
             }}
            >
                 <Text
                   style={{...styles.text ,color:route=="Wallet"? '#fff' : 'rgba(0,0,0,0.7)'}}
                  >Wallet</Text>   
            </ListItem>*/}
           {routes.map(data => {
              return (
                <ListItem
                  noIndent
                  button
                  onPress={() =>{ 
                   // this.props.navigation.closeDrawer();
                    this.props.navigation.navigate(data.nav);
                    this.setState({route:data.data})
                    }
                  }
                  key={data.data+1}
                  style={{borderBottomColor:'transparent',fontFamily:'Roboto',
                  backgroundColor:route==data.data? '#339966' : '#F8F8F8',         height:50,
                  borderEndColor:route==data.data? '#FFCE00' : 'transparent',
                  borderRightWidth:route==data.data? 5 : 0,
                 //this.props.route.route
                }}
                >
                  <Text
                   style={{...styles.text ,color:route==data.data? '#fff' : 'rgba(0,0,0,0.7)'}}
                  >{data.data}</Text>
                </ListItem>
              );
            })  
          }

          </List>
          </View>
          
        </Content>
        <Footer style={{backgroundColor:'#ffffff'}}>
          <FooterTab style={{backgroundColor:'#ffffff'}}>
             <Button full transparent>
             <Text
              style={material.body1}
              >AWA Delivery</Text>
             </Button>
          </FooterTab>   
          </Footer>
      </Container>
    );
  }
}
const styles=StyleSheet.create({
  content:{
    flex:1,
    backgroundColor:'#F8F8F8'
  },
  headView:{
     flex:2,
     justifyContent:'center',
     alignItems:'center'
  },
  contentView:{
    flex:7,
  
  },
  footView:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    paddingTop:30
  },
  starStyle : {
    width: 100,
    height: 20,
    marginBottom: 2,
  },
  text:{
    fontFamily:'Roboto',
    color:'rgba(0,0,0,0.7)'
  }
})
SideBar.propTypes={
  currentRoute:PropTypes.func.isRequired,
  data:PropTypes.object.isRequired
}
const mapStateToProps=(state)=>({
  route:state.route,
  data:state.auth
})

export default connect(mapStateToProps,{currentRoute})(SideBar)