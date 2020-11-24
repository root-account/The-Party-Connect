import React from "react";
import { Image, StyleSheet, Dimensions, ScrollView } from "react-native";
import { Badge, Container, Header, Content, Card, CardItem, Thumbnail, Button, Left, Body, Right, View, ListItem, Fab } from 'native-base';
import { Block, theme, Text } from "galio-framework";

import { Icon} from "../components";
import nowTheme from '../constants/Theme';
import RBSheet from "react-native-raw-bottom-sheet";

import articles from "../constants/articles";
import { TouchableOpacity } from "react-native-gesture-handler";
const { width } = Dimensions.get("screen");

// Styles
import mainStyles from '../app-styles/mainStyles';

class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false
    };
  }

  // renderArticles = () => {
  //   return (
  //     <ScrollView
  //       showsVerticalScrollIndicator={false}
  //       contentContainerStyle={styles.articles}
  //     >
  //       <Block flex>
  //       <Card item={articles[0]} horizontal />
  //         <Block flex row>
  //           <Card
  //             item={articles[1]}
  //             style={{ marginRight: theme.SIZES.BASE }}
  //           />
  //           <Card item={articles[2]} />
  //         </Block>
  //         <Card item={articles[3]} horizontal />
  //         <Card item={articles[4]} full />
  //       </Block>
  //     </ScrollView>
  //   );
  // };


  serviceBottomDrawer = () =>{
    return(
    <RBSheet
            ref={ref => {
              this.RBSheet = ref;
            }}
            onClose={this.closeServiceSteps}
            onOpen={this.startServiceSteps}
            closeOnDragDown={true}
            closeOnPressMask={true}
            openDuration={200}
            dragFromTopOnly={false}
            height={600}
            customStyles={{
              wrapper: {
                backgroundColor: "rgba(0,0,0,0.7)"
              },
              draggableIcon: {
                backgroundColor: "#E5E5E5",
              },
              container: {
                borderTopLeftRadius:20,
                borderTopRightRadius:20,
                // backgroundColor:'#f7f7f7'
              }
            }}
          >
    
            <View style={{padding:30}}>
              <Text>we are here now</Text>
            </View>
    
          </RBSheet>
    )
  }



  featuredCard = () =>{
    return(
      <View style={[mainStyles.lightGreyBg,{borderRadius:15, width:160, height:200, padding:5, margin:5}]}>
          <Image source={{uri: 'https://images.squarespace-cdn.com/content/v1/57f0719c725e25e914a27b76/1476469701090-IYP1U1RNY0D3M72C5H3A/ke17ZwdGBToddI8pDm48kCIq0XyLJJk2FAWEONnCmDZZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpzlBBQXEp281-O-7PPigqE00Dc4AsyuOsfxkxOwUQ9vmPojz-kpU2wdTDZ9661s8ZQ/events-heavenly-header.jpg?format=1500w'}} style={{height: 200, width: null, flex: 1,  borderRadius:15}}/>
          {/* <Text>Hello</Text> */}
        </View>
    );  

  }


  partyCard = () =>{
    return(
      <Card style={{marginBottom:5,borderWidth:0, boxShadow:'none', elevation:0}}>
      <CardItem>
        <Left>
          <Thumbnail source={{uri: 'https://mpng.subpng.com/20180627/wio/kisspng-computer-icons-user-profile-avatar-jain-icon-5b332c5add9336.0201786915300803469076.jpg'}} />
          <Body>
            <Text style={[{fontWeight:'bold',},mainStyles.mainBlueText]}>Pharrage Events</Text>
            <Text style={[{marginBottom:2,marginLeft:1, fontSize:12,}]}>- Presents!</Text>
            <Text note style={[{fontWeight:'bold', fontSize:15}]}>2020 Lockdown Level 2 Welcome party.</Text>
          
          </Body>
        </Left>      
      </CardItem>


      <CardItem>
          <Body>

            <View style={{flexDirection:'row',flex:1,padding:5, marginTop:0, backgroundColor:'#f7f7f7'}}> 
              <View style={{width:'33%', flexDirection:'row'}}>
                <Icon
                  family="AntDesign"
                  size={15}
                  name="calendar"
                  color="black"
                  style={[mainStyles.mainGreyText, {marginRight:5,}]}
                />
                <Text style={{fontSize:12,}}>23 July 2020</Text>
              </View>
              <View style={{width:'33%', flexDirection:'row'}}> 
                <Icon active name="navigate" style={{marginRight:5,fontSize: 15,}} />
                <Icon
                  family="AntDesign"
                  size={15}
                  name="enviromento"
                  color="black"
                  style={[mainStyles.mainGreyText, {marginRight:5,}]}
                />
                <Text style={{fontSize:12,}}>Centurion</Text>
              </View>

              <View style={{width:'33%', flexDirection:'row'}}> 
                <Icon active name="navigate" style={{marginRight:5,fontSize: 15,}} />
                <Icon
                  family="AntDesign"
                  size={15}
                  name="enviromento"
                  color="black"
                  style={[mainStyles.mainGreyText, {marginRight:5,}]}
                />
                <Text style={{fontSize:12,}}>Centurion</Text>
              </View>
            </View>
          
          </Body>    
      </CardItem>


      <TouchableOpacity  onPress={() => {this.RBSheet.open()}}>
      <CardItem cardBody style={{padding:5}}>
        
          <Image source={{uri: 'https://images.squarespace-cdn.com/content/v1/57f0719c725e25e914a27b76/1476469701090-IYP1U1RNY0D3M72C5H3A/ke17ZwdGBToddI8pDm48kCIq0XyLJJk2FAWEONnCmDZZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpzlBBQXEp281-O-7PPigqE00Dc4AsyuOsfxkxOwUQ9vmPojz-kpU2wdTDZ9661s8ZQ/events-heavenly-header.jpg?format=1500w'}} style={{height: 200, width: null, flex: 1, borderRadius:10}}/>
      </CardItem>
      </TouchableOpacity>
      <CardItem style={{backgroundColor:'#ffffff', borderRadius:0,}}>
      <View>
          <Button onPress={() => {this.RBSheet.open()}} small bordered light style={{borderRightWidth:1,paddingRight:10,  borderRadius:20, marginRight:10,}}>
            <Icon
              family="Entypo"
              size={20}
              name="chat"
              style={[mainStyles.mainGreyText, {marginRight:10, marginLeft:8,}]}
            />
            <Text style={[mainStyles.mainGreyText]}>23</Text>
          </Button>
        </View>
        <View>
          <Button onPress={() => {this.RBSheet.open()}} small bordered light style={{borderRightWidth:1,paddingRight:10,  borderRadius:20, marginRight:10, paddingLeft:5,}}>
            <Icon
              family="AntDesign"
              size={20}
              name="checkcircle"
              color="black"
              style={[mainStyles.mainGreyText, {marginRight:10, marginLeft:8,}]}
            />
            <Text style={[mainStyles.mainGreyText]}>149 going</Text>
          </Button>
        </View>
        <View>
          <Button onPress={() => {this.RBSheet.open()}} small bordered light style={{paddingRight:10, borderRadius:20,}}>
            <Icon
              family="AntDesign"
              size={20}
              name="questioncircle"
              color="black"
              style={[mainStyles.mainGreyText, {marginRight:10, marginLeft:8,}]}
            />
              <Text style={[mainStyles.mainGreyText]}>543 Interested</Text>
            </Button>
        </View>

      </CardItem>
    </Card>
    )
  }



  featuredHeadings = () =>{
  return(
    <View style={[mainStyles.whiteBg, {paddingLeft:20, paddingBottom:0, paddingTop:20, flexDirection:'row', flex:1}]}>
        <Button small iconLeft rounded bordered style={[mainStyles.mainBlueText, {paddingLeft:15, paddingRight:15,}]}>
        <Icon
            family="AntDesign"
            size={18}
            name="staro"
            style={[mainStyles.mainBlueText, {marginRight:10,}]}
          />
          <Text style={[mainStyles.mainBlueText, {fontWeight:'bold', fontSize:14}]}>FEATURED</Text>
        </Button>

        <Button small iconLeft transparent style={{paddingLeft:15, paddingRight:15}}>
          <Text style={[mainStyles.mainBlueText, {fontWeight:'bold', fontSize:14}]}>RECOMMENDED</Text>
        </Button>

        <Button small iconLeft transparent style={{paddingLeft:15, paddingRight:15}}>
          <Text style={[mainStyles.mainBlueText, {fontWeight:'bold', fontSize:14}]}>THIS WEEK</Text>
        </Button>
      </View>
  )

  }


  featuredSingleHeading = () =>{
    return(
      <View style={[mainStyles.whiteBg, {paddingLeft:20, paddingBottom:0, paddingTop:20, flexDirection:'row', flex:1}]}>
          <Button small iconLeft rounded style={[mainStyles.whiteText, mainStyles.mainBlueBg, {paddingLeft:15, paddingRight:15,}]}>
          <Icon
              family="AntDesign"
              size={18}
              name="staro"
              style={[mainStyles.whiteText, {marginRight:10,}]}
            />
            <Text style={[mainStyles.whiteText, {fontWeight:'bold', fontSize:14}]}>FEATURED</Text>
          </Button>
        </View>
    )
  
    }

  render() {
    return (

    <View>

      <ScrollView style={{ marginBottom:0, backgroundColor:'#f4f4f4'}}>

      {this.featuredHeadings()}
      
      <ScrollView horizontal={true} style={[mainStyles.whiteBg, { marginBottom:10, paddingTop:15, paddingBottom:15}]}>
        {this.featuredCard()}
        {this.featuredCard()}
        {this.featuredCard()}
        {this.featuredCard()}
        {this.featuredCard()}
        {this.featuredCard()}
      </ScrollView>

      <View style={{padding:5, paddingTop:0}}>

        <View style={{padding:10,}}>
          <Text style={[mainStyles.mainBlueText, {fontWeight:'bold', textTransform:'uppercase'}]}>All Events</Text>
        </View>

        

          {this.partyCard()}
          {this.partyCard()}
          {this.partyCard()}
          {this.partyCard()}
          {this.partyCard()}


        <View style={{marginTop:15, marginBottom:15}}>
          {this.featuredSingleHeading()}
          <ScrollView horizontal={true} style={[mainStyles.whiteBg, { marginBottom:10, paddingTop:15, paddingBottom:15}]}>
            {this.featuredCard()}
            {this.featuredCard()}
            {this.featuredCard()}
            {this.featuredCard()}
            {this.featuredCard()}
            {this.featuredCard()}
          </ScrollView>
        </View>  

        {this.partyCard()}
          {this.partyCard()}
          {this.partyCard()}
          {this.partyCard()}
          {this.partyCard()}

        </View>

        <View style={{paddingBottom:0,}}></View>


      </ScrollView>



{this.serviceBottomDrawer()}

    {/* <View 
      style={{
        flex:1, 
        flexDirection:'row', 
        width:'100%', 
        position:'absolute', 
        zIndex:999, 
        bottom:0, 
        backgroundColor:"#ffffff",
        justifyContent:'center',
        alignItems:'center',
        borderTopColor:'#cccccc',
        borderTopWidth:1,
      }}
    >

        <TouchableOpacity style={[mainStyles.bottomTabBtns,]} onPress={() => {this.RBSheet.open()}}>
        <Icon
            family="AntDesign"
            size={25}
            name="notification"
            style={[mainStyles.mainBlueText]}
          />
          <Text style={[{fontSize:12}, mainStyles.mainBlueText]}>Discover</Text>
        </TouchableOpacity>

        <TouchableOpacity style={mainStyles.bottomTabBtns} onPress={() => {this.RBSheet.open()}}>
        <Icon
            family="AntDesign"
            size={25}
            name="addusergroup"
            style={[mainStyles.mainBlueText]}
          />
          <Text style={[{fontSize:12}, mainStyles.mainBlueText]}>Meet People</Text>
        </TouchableOpacity>

        <TouchableOpacity style={mainStyles.bottomTabBtns}  onPress={() => {this.RBSheet.open()}}> 
        <Icon
            family="AntDesign"
            size={25}
            name="checkcircleo"
            style={[mainStyles.mainBlueText]}
          />
          <Text style={[{fontSize:12}, mainStyles.mainBlueText]}>RSVPs</Text>
        </TouchableOpacity>

        <TouchableOpacity style={mainStyles.bottomTabBtns} onPress={() => {this.RBSheet.open()}}>
        <Icon
            family="AntDesign"
            size={25}
            name="message1"
            style={[mainStyles.mainBlueText]}
          />
          <Text style={[{fontSize:12}, mainStyles.mainBlueText]}>Messages</Text>
        </TouchableOpacity>

        <TouchableOpacity style={mainStyles.bottomTabBtns} onPress={() => {this.RBSheet.open()}}>
        <Icon
            family="AntDesign"
            size={25}
            name="calendar"
            style={[mainStyles.mainBlueText]}
          />
          <Text style={[{fontSize:12}, mainStyles.mainBlueText]}>Your month</Text>
        </TouchableOpacity>
    </View> */}

<View style={{position:'relative', top:-10,}}>
    <Fab
          active={this.state.active}
          direction="up"
          containerStyle={{ }}
          style={[{Bottom:30 }, mainStyles.mainBlueBg]}
          position="bottomRight"
          // onPress={() => this.setState({ active: !this.state.active })}
          onPress={() => this.RBSheet.open()}
          >
          <Icon
            family="AntDesign"
            size={25}
            name="plus"
            color="white"
          />

          <Button style={{ backgroundColor: '#34A34F' }}>
            <Icon name="logo-whatsapp" />
          </Button>
          <Button style={{ backgroundColor: '#3B5998' }}>
            <Icon name="logo-facebook" />
          </Button>
          <Button disabled style={{ backgroundColor: '#DD5144' }}>
            <Icon name="mail" />
          </Button>
        </Fab>
        </View>

</View>


    );
  }
}


export default Home;
