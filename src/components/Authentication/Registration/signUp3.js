import React from 'react';
import {Header,CardItem,Form,Item,Input,Icon} from 'native-base';
import Wrapper from './Wrapper';
import RegisterTheme from './index';
import {human,material } from 'react-native-typography';


 class signup3 extends React.Component {
    static navigationOptions = ({ navigation }) => ({
        header: (
            <Header style={{display:'none'}} androidStatusBarColor="#339966">
            </Header>
        )
      });
     render(){
        const item={
            header: 'Business Information',
            subHead:'We’ll only display your name',
            name: 'One',
            image:'asset:/image/welcome.PNG',
            buttonText:'Next',
            progress:2,
            buttonColor:'#AAAAAA',
            nextForm:'Signup4'
          }
        return (
            <RegisterTheme parentProperty={this.props} nextPage={item}>
                <Wrapper>
                    <CardItem>
                        <Form style={{width:'100%'}}>
                            <Item>
                                 <Icon style={material.body1} active name='person' />
                                <Input  style={human.subhead} placeholder='First Name'/>
                            </Item>
                            <Item >
                                 <Icon style={material.body1} active name='person' />
                                <Input  style={human.subhead} placeholder='Last Name'/>
                            </Item>
                            <Item >
                                <Icon style={material.body1} active name='person' />
                                <Input style={human.subhead} placeholder='Language'/>
                            </Item>
                            <Item>
                                 <Icon style={material.body1} active name='person' />
                                <Input style={human.subhead} placeholder='Business name'/>
                            </Item>
                            <Item>
                                <Icon style={material.body1} active name='person' />
                                <Input style={human.subhead} placeholder='Registration number'/>
                            </Item>
                        </Form>
                    </CardItem>
                </Wrapper>
            </RegisterTheme>
            )
     }
    
}
export default signup3