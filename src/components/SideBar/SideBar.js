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
  Body
} from "native-base";
import {Switch} from 'react-native-base-switch';
import Star from 'react-native-star-view';

const routes = ["Home", "Wallet", "Booking History" ,"Payments","Your Rating", 
"Referral Code", "Settings", "Share App","About AWA Delivery"];
 class SideBar extends React.Component {

setCurrentRoute=(nav)=>{
  this.props.currentRoute(nav);
 // console.log(nav);
}


  render() {
    const uri = "https://s.gravatar.com/avatar/6ce574b021fa96559bf2b1a4ed3e5d3b?s=80"
    return (
      <Container>
        <Content style={styles.content}>
          <View style={styles.headView}>
             <View style={{alignItems:'center'}}>
                <Thumbnail circle large source={{uri: uri}} />
                <Text>Usman Nnamdi</Text>
                <Star score={4.7} style={styles.starStyle} />
             </View>
             <View style={{flexDirection:'row',padding:15}}>
               <Left>
                 <Text style={{color:'#339966',textAlign:'center'}}>ONLINE</Text>
               </Left>
               <Body>
              
               </Body>
               <Right style={{textAlign:'center'}}>
                  <Switch onChangeState={()=>this.props.navigation.navigate('Login')}
                  activeBackgroundColor='#339966a6'
                  inactiveBackgroundColor='#33996648'
                  activeButtonColor='#339966'
                  inactiveButtonColor='#339966d5'
                  />
               </Right>
             </View>
          </View>
          <View style={styles.contentView}>
          <List
          contentContainerStyle={{ marginTop: 120 }}
          >
            
           {routes.map(data => {
              return (
                <ListItem
                  noIndent
                  button
                  onPress={() =>{ 
                    this.props.navigation.closeDrawer();
                    this.setCurrentRoute(data)
                    }
                  }
                  key={data+1}
                  style={{borderBottomColor:'transparent',fontFamily:'Roboto',
                  backgroundColor:this.props.route.route==data? '#339966' : '#F8F8F8',         height:50,
                  borderEndColor:this.props.route.route==data? '#FFCE00' : 'transparent',
                  borderRightWidth:this.props.route.route==data? 5 : 0,
                 
                }}
                >
                  <Text
                   style={{...styles.text ,color:this.props.route.route==data? '#fff' : 'rgba(0,0,0,0.7)'}}
                  >{data}</Text>
                </ListItem>
              );
            })
          }
          </List>
          </View>
          <View style={styles.footView}>
              <Text
              style={{fontWeight:'100', ...styles.text}}
              >AWA Delivery</Text>
          </View>
        </Content>
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
}
const mapStateToProps=(state)=>({
  route:state.route
})

export default connect(mapStateToProps,{currentRoute})(SideBar)