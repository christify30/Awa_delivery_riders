import React from 'react';
import { CardItem,Grid,Row,Col, Card,Thumbnail, Button } from 'native-base';
import {material} from 'react-native-typography';
import {Text,View,StyleSheet,Image,Switch} from 'react-native';
import {heightPercentageToDP,widthPercentageToDP} from '../../PixelRatio/pixelRatio';
//import {Switch} from 'react-native-base-switch';
import Star from 'react-native-star-view';


export const WalletCard=(props)=>
<CardItem style={{backgroundColor:'#ffffff',marginBottom:4}}>
   <View style={{flex:1, flexDirection:'row'}}>
       <View style={{flex:1,flexDirection:'column'}}> 
          <Text style={material.subheading}>{props.title}</Text>
          <Text style={material.caption}>{props.date}{'  '}{props.time}</Text>
      </View>
       <View style={{flex:1,flexDirection:'column',alignItems:'flex-end',justifyContent:'center'}}>
             <Text style={{color:props.amount<0? '#E84C3D':'#339966'}}>{props.amount<0?'':'+'}{props.amount}</Text>
      </View>
   </View>
</CardItem>;

export const HistoryCard=(props)=>
   <CardItem style={{backgroundColor:'#ffffff',marginBottom:5}}>
       <Image style={{position:'absolute',top:heightPercentageToDP('1.7%'), left:4,width:widthPercentageToDP('3%'),height:heightPercentageToDP('9%')}}  source={{uri:'asset:/image/line.PNG'}}/>
      <View style={{flex:heightPercentageToDP('1%')}}>
           <View style={{...styles.commonViewRow,marginLeft:10,marginBottom:heightPercentageToDP('1.3%')}}>
              <View style={styles.commonViewCol}>
                  <Text style={material.caption}>From</Text>
                  <Text style={material.body1}>{props.from}</Text>
              </View>
              <View style={{...styles.commonViewCol,alignItems:'flex-end'}}>
                <Text>{props.timeFrom}</Text>
              </View>
           </View>
           <View style={{...styles.commonViewRow,marginLeft:10}}>
              <View style={{...styles.commonViewCol}}>
                  <Text style={material.caption}>To</Text>
                  <Text style={material.body1}>{props.to}</Text>
              </View>
              <View style={{...styles.commonViewCol,alignItems:'flex-end'}}>
                    <Text>{props.timeTo}</Text>
              </View>
           </View>
      </View>
   </CardItem>

  export const SettingsCard=(props)=>
   <CardItem style={{marginBottom:props.marginBottom}}>
      <View style={{flex:1,flexDirection:'row'}}>
         <View>
          <Text>{props.title}</Text>
          </View>
          <View style={{flex:1, alignItems:'flex-end'}}>
         {/* <Switch onChangeState={props.onChangeState}
                  activeBackgroundColor='#339966a6'
                  inactiveBackgroundColor='#33996648'
                  activeButtonColor='#339966'
                  inactiveButtonColor='#339966d5'
             />*/}
               <Switch value={true} onValueChange={props.onChangeState}/>
         </View>
      </View>
   </CardItem>
export const RatinBlock=(props)=>
 <Card style={{padding:28,borderRadius:10,marginLeft:widthPercentageToDP('2%'),marginRight:widthPercentageToDP('2%')}}>
   <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
       <Text style={material.body2}>{props.percent}</Text>
       <Text style={material.caption}>{props.title}</Text>
   </View>
</Card>

export const RatingCard=(props)=><CardItem style={{marginBottom:heightPercentageToDP('1%'),marginTop:heightPercentageToDP('1%')}}>
   <View style={{flex:1,flexDirection:'row'}}>
      <View style={{flex:2}}>
      <Image 
          style={{width:widthPercentageToDP('15%'),
          height:heightPercentageToDP('8%'),borderRadius:150}}
          source={{uri: props.image}}/>
      </View>
      <View style={{flex:8}}>
          <Text style={material.subheading}>{props.name}</Text>
           <Star score={props.score} style={{height:heightPercentageToDP('2.5%'),width:widthPercentageToDP('20%'),marginBottom:3}}/>
           <Text style={material.caption}>{props.details}</Text>
      </View>
   </View>
</CardItem>

export const PaymentCard=(props)=>
<CardItem style={{borderTopWidth:1, borderBottomWidth:1,marginLeft:0,marginBottom:heightPercentageToDP('2%'),borderColor:'rgba(0,0,0,0.2)'}}>
   <View style={{flex:1,flexDirection:'row'}}>
      <View style={{flex:7,flexDirection:'row',alignItems:'center'}}>
         <Image source={{uri:'asset:/image/newCard.png'}} style={{width:widthPercentageToDP('7%'),
      height:heightPercentageToDP('3%')
      }}/>
      <Text style={{...material.body1,marginLeft:5}}>{props.text}</Text>
      </View>
      <View style={{flex:3,flexDirection:'row'}}>
          {props.button? <Button full onPress={props.onPress} style={{backgroundColor:'#339966',width:widthPercentageToDP('23%')}}>
             <Text style={{...material.body1White}}>CHANGE</Text>
          </Button>: <Button transparent full onPress={props.onPress} style={{width:widthPercentageToDP('23%')}}>
             <Text style={{...material.body1White}}></Text>
          </Button>}
      </View>
   </View>
</CardItem>

const styles=StyleSheet.create({
   commonViewRow:{
      flex:heightPercentageToDP('1%'),
      flexDirection:'row',
      
   },
   commonViewCol:{
      flex:heightPercentageToDP('1%'),
      flexDirection:'column',
     
   }
})