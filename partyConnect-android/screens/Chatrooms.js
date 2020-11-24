import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Container, Header, Tab, Tabs, TabHeading } from 'native-base';
import Icon from '../components/Icon';
//galio
import { Block, Text, theme } from 'galio-framework';

import { articles, nowTheme } from '../constants/';
import { Card } from '../components/';

import StillBusyScreen from './StillBusyScreen';
// Styles
import mainStyles from '../app-styles/mainStyles';

class Chatrooms extends React.Component {

  

  render() {
    return (


   <Container>
    {/* <Header hasTabs style={mainStyles.mainBlueBg}>

      </Header> */}
    <Tabs>


      <Tab 
        heading={ 
          <TabHeading>
            <Icon family="AntDesign" size={18} name="wechat" color="white" />
            <Text style={[mainStyles.whiteText,{marginLeft:10, fontWeight:'bold', fontSize:16}]}>Public Topics</Text>
          </TabHeading>
      }>
        <View style={{padding:15}}>
          <Text>world</Text>
        </View>
        
      </Tab>

      <Tab 
        heading={ 
          <TabHeading>
            <Icon family="AntDesign" size={18} name="message1" color="white" />
            <Text style={[mainStyles.whiteText,{marginLeft:10, fontWeight:'bold', fontSize:16}]}>DMs</Text>
          </TabHeading>
      }>
        <View style={{padding:15}}>
          <Text>Here we are!</Text>
        </View>
      </Tab>
    </Tabs>
  </Container>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: theme.SIZES.BASE
  },
  title: {
    fontFamily: 'montserrat-bold',
    paddingBottom: theme.SIZES.BASE,
    marginTop: 44,
    color: nowTheme.COLORS.HEADER
  }
});

export default Chatrooms;
