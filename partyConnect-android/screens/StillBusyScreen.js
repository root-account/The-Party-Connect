import React from 'react';
import { ScrollView, StyleSheet, View, Image} from 'react-native';
//galio
import { Block, Text, theme } from 'galio-framework';

import { articles, nowTheme } from '../constants/';
import { Card } from '../components/';

// Styles
import mainStyles from '../app-styles/mainStyles';

class StillBusyScreen extends React.Component {

    constructor(props) {
        super(props);
     
        this.state = {
          isShow: true,
        };
      }
  

  render() {
    return (


        <View style={{padding:20,}}>
            <Text style={[mainStyles.mainBlueText,{fontSize:30, fontWeight:'bold', marginBottom:40,}]}>{this.props.pageName}</Text>

            <Text style={{marginBottom:20}}>We are still busy here....</Text>


            <Image source={{uri: 'https://media0.giphy.com/media/XItRQJP0wai7m/giphy.gif'}} style={{height: 200, width: null, borderRadius:10}}/>
        </View>

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

export default StillBusyScreen;
