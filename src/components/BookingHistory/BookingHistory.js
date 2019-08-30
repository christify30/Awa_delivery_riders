import React, { Component } from 'react';
import {StyleSheet,Text,View} from 'react-native';
import {Container,Content, Card,Tab,Tabs} from 'native-base';
import Header from '../../container/header/Header';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {HistoryCard} from '../commonComponents/CommonCards'
//import {currentRoute} from '../../redux/actions/routesAction';
import {material,human} from 'react-native-typography';
import {walletData} from './walletdata'
let i=0;
let totalMoney=0;

walletData.map(data=>{
    totalMoney=parseFloat(data.amount)+parseFloat(totalMoney)
})
class BookingHistory extends Component {
   
    
      componentDidMount() {
         // this.props.currentRoute('Booking History')
      }
    render() {
        return (
            <Container>
                <Header props={this.props} title='Booking History'/>
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
                                      < HistoryCard key={++i} 
                                       from={data.from}  
                                       to={data.to}
                                       timeFrom={data.timeFrom}
                                       timeTo={data.timeTo}
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
                        heading="Successfull">
                        
                        <Content>
                            <Card style={{backgroundColor:'#F8F8F8',width:'100%',marginLeft:0,marginTop:1}}>
                            {walletData.map(data=>
                                     data.Success ? < HistoryCard key={++i} 
                                     from={data.from}  
                                     to={data.to}
                                     timeFrom={data.timeFrom}
                                     timeTo={data.timeTo}
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
                        heading="Cancelled">
                         <Content>
                            <Card style={{backgroundColor:'#F8F8F8',width:'100%',marginLeft:0,marginTop:1}}>
                            {walletData.map(data=>
                                     ! data.Success ? <HistoryCard key={++i} 
                                     from={data.from}  
                                     to={data.to}
                                     timeFrom={data.timeFrom}
                                     timeTo={data.timeTo}
                                      />:<Text key={++i} style={{display:'none'}}></Text>
                                )}
                            </Card>
                         </Content>
                        </Tab>
                   </Tabs>
                   </View>
            </Container>
        )
    }
}
const styles=StyleSheet.create({

});
const mapStateToProps=(state)=>({

});
BookingHistory.propTypes={
   // currentRoute:PropTypes.func.isRequired
}
export default connect(mapStateToProps,{})(BookingHistory)
