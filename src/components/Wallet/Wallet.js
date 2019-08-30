import React, { Component } from 'react';
import {StyleSheet,Text,TouchableOpacity,View,Image} from 'react-native';
import {Container,Content, Card,CardItem, Left, Body,Tab,Tabs,Grid, Row,Col, Right, Footer,Thumbnail, FooterTab, Button} from 'native-base';
import Header from '../../container/header/Header';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
//import {currentRoute} from '../../redux/actions/routesAction';
import {material,human} from 'react-native-typography';
import Star from 'react-native-star-view';
import {WalletCard} from '../commonComponents/CommonCards';
import {heightPercentageToDP,widthPercentageToDP} from '../../PixelRatio/pixelRatio'

let i=0;
let totalMoney=0;
const walletData=[
    {title:'Booking by Card',date:'August 2', time:'80:30',amount:1000},
    {title:'Booking by cash',date:'August 3', time:'10:30',amount:-100},
    {title:'Booking by cash',date:'August 3', time:'10:30',amount:-100},
    {title:'Booking by cash',date:'August 3', time:'10:30',amount:500},
    {title:'Booking by cash',date:'August 3', time:'10:30',amount:-100},
    {title:'Booking by cash',date:'August 3', time:'10:30',amount:700},
    {title:'Booking by cash',date:'August 3', time:'10:30',amount:3100},
    {title:'Booking by cash',date:'August 3', time:'10:30',amount:3100},
]
walletData.map(data=>{
    totalMoney=parseFloat(data.amount)+parseFloat(totalMoney)
})
class Wallet extends Component {

      state={
          name:''
      }
    componentDidMount(){
      const {firstname,lastname}=this.props.data.profile.data;
      this.setState((state)=>{
          return{
              name:`${firstname} ${lastname}`}
              })
            }
            
    render() {
        const uri = "https://s.gravatar.com/avatar/6ce574b021fa96559bf2b1a4ed3e5d3b?s=80";
        const uri2="asset:/image/Card.png";
        return (
            <Container style={styles.Container}>
                <Header  props={this.props} title='Wallet'/>
                <View  style={{flex:0.5,flexDirection:'row',}}>
                    <View style={{flex:2,flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
                        
                        <Image style={{width:110,height:90}} source={{uri: 'asset:/image/motorcycle.PNG'}}/>
                    </View>
                    <View style={{flex:1,flexDirection:'column',justifyContent:'center',alignItems:'flex-end',paddingRight:20}}>
                    <Thumbnail circle style={{width:50,height:50,borderRadius:50}} source={{uri: uri}} />
                        <Text>{this.state.name}</Text>
                        <Star score={4.7} style={styles.starStyle} />
                    </View>
                </View>
                
                  <View style={{flex:0.4,
                    backgroundColor:'#F8F8F8',
                    borderTopEndRadius:60,
                    borderTopStartRadius:60,
                    paddingLeft:widthPercentageToDP('9%'),
                    paddingTop:heightPercentageToDP('1%'),
                    paddingRight:widthPercentageToDP('10%'),
                    flexDirection:'row'
                    }}>
                        <View style={{flex:2,flexDirection:'column'}}>
                           <Text style={{...material.headline,color:'#339966'}}>{totalMoney.toFixed(2)}</Text>
                           <Text style={material.caption}>Your balance</Text>
                           <Text style={{marginTop:heightPercentageToDP('2%')}}><Thumbnail style={{width:25,height:20}} source={{uri:uri2}}/>* **** **** **** 2345 </Text>
                        </View>
                        <View style={{flex:1,flexDirection:'column',alignItems:'flex-end'}}>
                           <Text style={{...material.caption,marginTop:heightPercentageToDP('6%')}}>Goal</Text>
                           <Text style={material.subheading}>15,000</Text>
                        </View>
                   </View>
            
                  <View hasTabs style={{flex:1.2}} >
                      <Tabs >
                        <Tab 
                        style={{backgroundColor:'#F8F8F8'}}
                        tabStyle={{backgroundColor:'#ffffff'}} 
                        activeTextStyle={{color:'#339966'}} 
                        activeTabStyle={{backgroundColor:'#ffffff'}}
                        textStyle={{color:'rgba(0,0,0,0.7)'}}
                        heading="All">
                        <Content>
                            <Card style={{backgroundColor:'#F8F8F8',width:'100%',marginLeft:0,marginTop:1}}>
                            {walletData.map(data=>
                                      < WalletCard key={++i} 
                                       title={data.title}  
                                       amount={data.amount}
                                       time={data.time}
                                       date={data.date}
                                      />
                                )}
                            </Card>
                         </Content>
                        </Tab>
                        <Tab 
                        tabStyle={{backgroundColor:'#ffffff'}} 
                        activeTextStyle={{color:'#339966'}} 
                        activeTabStyle={{backgroundColor:'#ffffff'}}
                        textStyle={{color:'rgba(0,0,0,0.7)'}}
                        heading="Debit">
                        
                        <Content>
                            <Card style={{backgroundColor:'#F8F8F8',width:'100%',marginLeft:0,marginTop:1}}>
                            {walletData.map(data=>
                                     data.amount<0? < WalletCard key={++i} 
                                       title={data.title}  
                                       amount={data.amount}
                                       time={data.time}
                                       date={data.date}
                                      />:<Text key={++i} style={{display:'none'}}></Text>
                                )}
                            </Card>
                         </Content>

                        </Tab>
                        <Tab 
                        tabStyle={{backgroundColor:'#ffffff'}} 
                        activeTextStyle={{color:'#339966'}} 
                        activeTabStyle={{backgroundColor:'#ffffff'}}
                        textStyle={{color:'rgba(0,0,0,0.7)'}}
                        heading="Credit">
                         <Content>
                            <Card style={{backgroundColor:'#F8F8F8',width:'100%',marginLeft:0,marginTop:1}}>
                            {walletData.map(data=>
                                     data.amount>0? < WalletCard key={++i} 
                                       title={data.title}  
                                       amount={data.amount}
                                       time={data.time}
                                       date={data.date}
                                      />:<Text key={++i} style={{display:'none'}}></Text>
                                )}
                            </Card>
                         </Content>

                        </Tab>
                   </Tabs>
                   </View>
                <Footer >  
                <FooterTab  style={{backgroundColor:'#339966'}}>
                        <Left>
                        </Left>
                        <Body>
                            <TouchableOpacity>
                               <Text style={{...material.subheadingWhite,fontSize:20,}}>Withdraw</Text>
                             </TouchableOpacity>
                        </Body>
                    <Right style={{marginRight:10}}>
                    <TouchableOpacity >
                            <Text style={{...material.display1White}}>>></Text>
                        </TouchableOpacity>
                    </Right>
                    </FooterTab>
                </Footer>
            </Container>
        )
    }
}
const styles=StyleSheet.create({
  Container:{
      backgroundColor:'#339966'
  },
  starStyle : {
    width: 100,
    height: 20,
    marginBottom: 2,
  },
});
const mapStateToProps=(state)=>({
data:state.auth
});
Wallet.propTypes={
    //currentRoute:PropTypes.func.isRequired,
    data:PropTypes.object.isRequired
}
export default connect(mapStateToProps,{})(Wallet)
