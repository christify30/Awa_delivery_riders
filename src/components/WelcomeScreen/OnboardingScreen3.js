import React ,{Component}from 'react';
import {Container,Header,Content,Icon,Left ,Text,FooterTab, Footer,Button,Row, Grid} from 'native-base';
import {StyleSheet,Image,TouchableOpacity,View,Dimensions} from 'react-native';
import {material} from 'react-native-typography';

const {height} =Dimensions.get('window');
//var img = require('../../assets/images/welcome.PNG')

 class onboardingScreen extends Component {
    static navigationOptions = ({ navigation }) => ({
        header: (
            <Header style={{display:'none'}} androidStatusBarColor="#F8F8F8">
            </Header>
        ),
        drawerLockMode:'locked-closed'
      });
      render(){
        return (
            <Container>
                   <Grid>
                      <Row size={2} style={{justifyContent:'center'}}>
                      <Image
                         style={{width: '100%'}}
                         source={{uri: 'asset:/image/welcome.PNG'}}
                         />
                      </Row>
                      <Row >
                          <Grid>
                         <Row size={0.2} style={{...material.subheading,justifyContent:'center',alignItems:'flex-end'}}><Text  style={styles.text1}>EARN MORE</Text></Row>
                         <Row style={{justifyContent:'center',alignItems:'flex-start'}}>
                               <Text 
                               style={{
                                   textAlign:'center',
                                   ...material.body1,
                                   }}>
                                    It is AWA collective responsiblity that you meet your financial goals. Join a community that allows you.
                                </Text>
                           </Row> 
                         </Grid>
                      </Row>
                   </Grid>
               
                <Footer style={styles.footer}>
                 <FooterTab>
                    <Button full style={styles.button} onPress={()=>this.props.navigation.navigate('Notification')} >
                        <Text style={{...material.subheadingWhite,textAlign:'center'}}>GET STARTED</Text>
                    </Button>
                    </FooterTab>  
                </Footer> 
               
            </Container>
        )
      }
       
    
}
const styles= StyleSheet.create({
    footer:{
        backgroundColor:'#339966',
        borderTopColor:'#FFCE00',
        borderTopWidth:3,
        justifyContent:'center',
        alignItems:'center'
    },
    Earnmoreview:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
text1:{
    ...material.title,
    color:'#339966',
    textAlign:'center',
    marginBottom:7
},

button:{

    backgroundColor:'#339966',
    
}
})
export default onboardingScreen;
/**
 * 
                      <View>
                         <Image
                         style={{width: '100%', height: height/2}}
                         source={{uri: 'asset:/image/welcome.PNG'}}
                         />
                     </View>
                        <View style={styles.Earnmoreview}>
                            <Text style={styles.text1}>EARN MORE</Text>
                            <Text
                            style={styles.text2}
                            >
                                It is AWA collective responsiblity that you meet your financial goals. Join a community that allows you.
                            </Text>
                        </View>
 * 
 * 
 * 
 
 */