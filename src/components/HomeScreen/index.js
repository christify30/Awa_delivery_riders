import React, {Component} from "react";
import Header from '../../container/header/Header'
import {connect} from 'react-redux';
import PropTypes from 'prop-types'
import { Container,Text,Content,Card,CardItem,Grid,Row,Thumbnail,Button, Col, Item, Input} from "native-base";
import Footer  from '../../container/footer/Footer';
import {View,StyleSheet,TouchableOpacity,Dimensions} from 'react-native';
import {material,human} from 'react-native-typography'
import Star from 'react-native-star-view';

const {height}= Dimensions.get('window');
class HomeScreenIndex extends Component {
  static navigationOptions = ({ navigation }) => ({
    drawerLockMode :'unlocked'
  })
  constructor(){
    super();
  }

   componentDidMount(){
    //this.props.getCurrentPosition();
   }
  componentWillReceiveProps(nextProps){
    
  }
  render() {
    return (
      <Container style={{backgroundColor:'#F8F8F8'}}>
        <Header props={this.props} title='Welcome Josh Alim'/>
          <Content>
              <Card transparent>
                <CardItem style={{backgroundColor:'#F8F8F8',height:height-200}}>
                    <View style={{flex:1,flexDirection:'column'}}>
                      <View style={{flex:0.8,alignItems:'center'}}>
                        <Text style={{...human.title3,color:'rgba(0,0,0,0.5)'}}>Let's Make Some Extra Cash</Text>
                      </View>
                      <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                        <Thumbnail style={{width:120,height:120,borderRadius:60}} large source={{uri:'asset:/image/motorcycle.PNG'}} />
                      </View>
                      <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                        <Text style={{color:'rgba(0,0,0,0.6)'}}>Motorcycle</Text>
                        <Text style={material.caption}>This text field is the selected ride description</Text>
                        <Text style={{...material.caption,color:'#339966'}}>Max weight: 5kg | Max height: 21” X 14”</Text>
                      </View>
                      <View style={{flex:1}}>
                          <Card transparent>
                            <CardItem style={{backgroundColor:'transparent'}}>
                              <Grid style={{height:220}}>
                                <Col size={100} style={{backgroundColor:'#339966'}}>
                                   <View style={{flex:1, flexDirection:'column',alignItems:'center'}}>
                                     <Thumbnail style={{width:60, height:60,margin:5}} source={{uri:'https://s.gravatar.com/avatar/6ce574b021fa96559bf2b1a4ed3e5d3b?s=80'}}/>
                                     <Text style={material.captionWhite}>Usman Nnamdi</Text>
                                     <Star score={4.7} style={{height:20,width:80}} />
                                   </View>
                                </Col>
                                <Col size={150} style={{backgroundColor:'#ffffff',}} >
                                   <View style={{flex:1, flexDirection:'column',padding:10}}>
                                     <Text style={{color:'rgba(0,0,0,0.6)',margin:3,}}>Set a goal today</Text>
                                     <Text style={{...material.caption}}>Make sure you set realistic and attainable goals</Text>
                                     <Item>
                                       <Input/>
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
  
})

export default connect(MapStateToProps,{})(HomeScreenIndex)