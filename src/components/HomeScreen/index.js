import React, {Component} from "react";
import Header from '../../container/header/Header'
import {connect} from 'react-redux';
import PropTypes from 'prop-types'
import { Container,Text,Content,Card,CardItem,Grid,Thumbnail, Col, Item, Input} from "native-base";
import Footer  from '../../container/footer/Footer';
import {View,StyleSheet,Image} from 'react-native';
import {material,human} from 'react-native-typography';
//import {currentRoute} from '../../redux/actions/routesAction'
//import {getProfile} from '../../redux/actions/Authentication/auth'
import Star from 'react-native-star-view';
import {heightPercentageToDP,widthPercentageToDP} from '../../PixelRatio/pixelRatio'

class HomeScreenIndex extends Component {
   
  state={
    name:'loading...',
    goal:''
  }

   componentDidMount(){
   // this.props.getProfile();
   const {firstname,lastname}=this.props.data.profile.data;
   // const {firstname,lastname}=this.props.data.profile.data;
    this.setState((state)=>{
      return {name:`${firstname} ${lastname}`}
    })
    
   }

  componentWillReceiveProps(nextProps){
   console.log(nextProps);
    //this.props.currentRoute('Home');
  
  }

  render() {
    return (
      <Container style={{backgroundColor:'#F8F8F8'}}>
        <Header props={this.props} title={`Welcome ${this.state.name}`}/>
          <Content>
              <Card transparent>
                <CardItem style={{backgroundColor:'#F8F8F8',height:heightPercentageToDP('90%')}}>
                    <View style={{flex:1,flexDirection:'column'}}>
                      <View style={{flex:0.4,alignItems:'center'}}>
                        <Text style={{...human.title3,color:'rgba(0,0,0,0.5)'}}>Let's Make Some</Text>
                        <Text style={{...human.title3,color:'rgba(0,0,0,0.5)'}}>Extra Cash</Text>
                      </View>
                      <View style={{flex:0.6,justifyContent:'center',alignItems:'center'}}>
                        <Image style={{width:widthPercentageToDP('30%'),height:heightPercentageToDP('17%'),borderRadius:heightPercentageToDP('80%')}} source={{uri:'asset:/image/cycle1.PNG'}} />
                      </View>
                      <View style={{flex:0.6,justifyContent:'center',alignItems:'center'}}>
                        <Text style={{color:'rgba(0,0,0,0.6)'}}>Motorcycle</Text>
                        <Text style={material.caption}>This text field is the selected ride description</Text>
                        <Text style={{...material.caption,color:'#339966'}}>Max weight: 5kg | Max height: 21” X 14”</Text>
                      </View>
                      <View style={{flex:1}}>
                          <Card transparent>
                            <CardItem style={{backgroundColor:'transparent'}}>
                              <Grid style={{height:heightPercentageToDP('20%')}}>
                                <Col size={100} style={{backgroundColor:'#339966'}}>
                                   <View style={{flex:1, flexDirection:'column',alignItems:'center'}}>
                                     <Thumbnail style={{width:60, height:60,margin:5}} source={{uri:'https://s.gravatar.com/avatar/6ce574b021fa96559bf2b1a4ed3e5d3b?s=80'}}/>
                                     <Text style={material.captionWhite}>{this.state.name}</Text>
                                     <Star score={4.7} style={{height:20,width:80}} />
                                   </View>
                                </Col>
                                <Col size={150} style={{backgroundColor:'#ffffff',}} >
                                   <View style={{flex:0.5, flexDirection:'column',padding:10}}>
                                     <Text style={{color:'rgba(0,0,0,0.6)',margin:3,}}>Set a goal today</Text>
                                     <Text style={{...material.caption}}>Make sure you set realistic and attainable goals</Text>
                                     </View>
                                     <View style={{flex:1}}>
                                     <Item >
                                       <Input 
                                       onChangeText={(text)=>this.setState({})}
                                       placeholder='0.00'/>
                                     </Item>
                                   </View>
                                </Col>
                              </Grid>
                            </CardItem>
                          </Card>
                      </View>
                    </View>
                </CardItem>
              </Card>
          </Content>
        <Footer color='#339966' text='Go Online' onPress={()=>this.props.navigation.navigate('Home')}/>
      </Container>
    );
  }
}
const styles=StyleSheet.create({

});
HomeScreenIndex.propType={
  
}

const MapStateToProps=(state)=>({
  data:state.auth,
  
})
HomeScreenIndex.propTypes={
 // getProfile:PropTypes.func.isRequired,
  data:PropTypes.object.isRequired
 // currentRoute:PropTypes.func.isRequired
}
export default connect(MapStateToProps,{})(HomeScreenIndex)