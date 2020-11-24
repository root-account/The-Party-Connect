import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
//galio
import { Block, Text, theme } from 'galio-framework';

import { articles, nowTheme } from '../constants';
import { Card } from '../components';

import StillBusyScreen from './StillBusyScreen';
// Styles
import mainStyles from '../app-styles/mainStyles';

class MyCalender extends React.Component {

  

  render() {
    return (


      <StillBusyScreen
        pageName={"My Calendar"}
      />

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

export default MyCalender;
