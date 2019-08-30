import React, { Component } from 'react';
import {StyleSheet,Text,View} from 'react-native';
import {Container,Content,Card,CardItem} from 'native-base';
import Header from '../../container/header/Header';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
//import {currentRoute} from '../../redux/actions/routesAction';
import Star from 'react-native-star-view';
import {heightPercentageToDP,widthPercentageToDP}from '../../PixelRatio/pixelRatio';
import {material} from 'react-native-typography';
import {RatinBlock,RatingCard} from '../commonComponents/CommonCards';

let i=0;
const ratingData=[
    {name:'Ann Idibia',image:'asset:/image/Avatar.png',score:4.5,details:'What an amazing rider, goods were delivered in perfect condition. I love his style.'},

    {name:'Stanley',image:'asset:/image/Avatar.png',score:4.0,details:'What an amazing rider, goods were delivered in perfect condition. I love his style.'},

    {name:'Chijoke',image:'asset:/image/Avatar.png',score:4.5,details:'What an amazing rider, goods were delivered in perfect condition. I love his style.'},

    {name:'Emeka',image:'asset:/image/Avatar.png',score:4.5,details:'What an amazing rider, goods were delivered in perfect condition. I love his style.'},
    {name:'Ann Idibia',image:'asset:/image/Avatar.png',score:4.5,details:'What an amazing rider, goods were delivered in perfect condition. I love his style.'},

    {name:'Stanley',image:'asset:/image/Avatar.png',score:4.0,details:'What an amazing rider, goods were delivered in perfect condition. I love his style.'},

    {name:'Chijoke',image:'asset:/image/Avatar.png',score:4.5,details:'What an amazing rider, goods were delivered in perfect condition. I love his style.'},

    {name:'Emeka',image:'asset:/image/Avatar.png',score:4.5,details:'What an amazing rider, goods were delivered in perfect condition. I love his style.'}
]

class YourRating extends Component {
 
      componentDidMount() {
         // this.props.currentRoute('Your Rating')
      }
    render() {
        return (
            <Container>
                <Header props={this.props} title='Your Rating'/>
                <Content>
                     <View style={{flex:1}}>
                       <View style={{alignItems:'center'}}>
                       <Star score={4.7} style={styles.starStyle} />
                       <Text style={{ marginBottom:heightPercentageToDP('3%'),...material.caption}}>Your Average Rating is 4.7</Text>
                       </View>
                       <View style={{flex:1,flexDirection:'row',justifyContent:'center',alignItems:'center', marginBottom:heightPercentageToDP('3%')}}>
                           <RatinBlock title='requests accepted' percent='70%'/>
                           <RatinBlock title='Deliveries cancelled ' percent='1%'/>
                       </View>
                       <View style={{flex:1,flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
                           <View style={{flex:2,alignItems:'center',justifyContent:'center',paddingLeft:widthPercentageToDP('7%')}}>
                           <Text style={{...material.headline,color:'#339966',fontSize:18,fontWeight:'bold'}}>What Your customers Say About You</Text>
                           </View>
                         <View style={{flex:1}}>
                         </View>
                       </View>
                     </View>
                     <Card style={{backgroundColor:'#F8F8F8',marginLeft:0,width:widthPercentageToDP('100%')}}>
                    { ratingData.map(data=>
                    <RatingCard key={i++} name={data.name} image={data.image} score={data.score} details={data.details}/>
                    )} 
                    </Card>
                </Content>

            </Container>
        )
    }
}
const styles=StyleSheet.create({
    starStyle : {
        width: widthPercentageToDP('55%'),
        height: heightPercentageToDP('6%'),
        marginBottom: 2,
        marginTop:heightPercentageToDP('3%'),
       
      }
});
const mapStateToProps=(state)=>({

});
YourRating.propTypes={
    //currentRoute:PropTypes.func.isRequired
}
export default connect(mapStateToProps,{})(YourRating)
