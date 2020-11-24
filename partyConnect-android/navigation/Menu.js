import React from "react";
import {
  ScrollView,
  StyleSheet,
  Dimensions,
  Image,
  View,
  TouchableOpacity,
  Linking
} from "react-native";
import { List, ListItem, Left, Body, Right, Badge, Thumbnail, Button} from 'native-base';
import { Block, Text, theme } from "galio-framework";
import { useSafeArea } from "react-native-safe-area-context";
import Images from "../constants/Images";
import { DrawerItem as DrawerCustomItem, Icon } from "../components";

import nowTheme from "../constants/Theme";

// Styles
import mainStyles from '../app-styles/mainStyles';

const { width } = Dimensions.get("screen");

function CustomDrawerContent({
  drawerPosition,
  navigation,
  profile,
  focused,
  state,
  ...rest
}) {
  const insets = useSafeArea();
  const screens = [
    "Latest Feed",
    "Find People & Events",
    "Chats & Conversations",
    "Events Manager",
    "Bookmarked Events",
    "My Calender",
    "Profile",
  ];
  return (
    <Block
      style={[styles.container,{backgroundColor:'#ffffff'}]}
      forceInset={{ top: "always", horizontal: "never" }}
    >
    
    <Block style={[mainStyles.mainGreyBg, {marginBottom:20, paddingBottom:40}]}>
      <Block style={[styles.header, {width:'100%', padding:30, paddingBottom:0, paddingTop:45, paddingLeft:0,}]}>

        {/* <Block>
          <Image style={[styles.logo, mainStyles.mainBlueBg, {borderRadius:50, padding:20}]} source={Images.Logo} />
          <Text>Ephraim Kgwele</Text>
        </Block> */}
<List>
          <ListItem avatar>
              <Left>
                <Thumbnail source={{ uri: 'https://scontent-jnb1-1.xx.fbcdn.net/v/t1.0-9/72053167_2531635476931411_3432368336309059584_o.jpg?_nc_cat=102&_nc_sid=09cbfe&_nc_eui2=AeEVcveTfZo_1DHKeIV07WBjre0GfnbaI3Ct7QZ-dtojcP3jTRPrPf52t7cvaQkgkPfxclNXiDrgcTkA1K0kQfVp&_nc_ohc=KEUF11hK6qcAX_lYIv8&_nc_ht=scontent-jnb1-1.xx&oh=d344faad51f95d9566bcbb5e4e81708a&oe=5F73B5A8' }} />
              </Left>
              <Body>
                <Text style={{fontWeight:'bold'}}>Ephraim Kgwele</Text>
                <Text note>@ephraim_kwele</Text>
              </Body>
              {/* <Right>
              <Button transparent>
                  <Text style={[mainStyles.mainBlueText,{fontWeight:'bold'}]}>View Profile</Text>
                </Button>
              </Right> */}
            </ListItem>
            </List>    


        {/* <Block right style={styles.headerIcon}>
          <Icon
            name="align-left-22x"
            family="NowExtra"
            size={20}
            style={mainStyles.mainBlueText}
          />
        </Block> */}
      </Block>

      <Block style={{width:'100%', padding:30, paddingBottom:0, paddingTop:20, paddingLeft:0,}}>

        

        <ListItem icon style={{width:'100%'}}>
            <Left>
              <Icon
                name="profile-circle"
                family="NowExtra"
                size={15}
              />
            </Left>
            <Body>
            <Text style={[mainStyles.mainGreyText, {fontWeight:'bold'}]}>You are invited to</Text>
            </Body>
            <Right>
              <Badge style={mainStyles.lightGreyBg}>
                <Text style={mainStyles.mainBlueText}>6 events</Text>
              </Badge>
            </Right>
          </ListItem>

          <ListItem icon style={{width:'100%'}}>
            <Left>
              <Icon
                name="profile-circle"
                family="NowExtra"
                size={15}
              />
            </Left>
            <Body>
            <Text style={[mainStyles.mainGreyText, {fontWeight:'bold'}]}>You are interested in</Text>
            </Body>
            <Right>
              <Badge style={mainStyles.lightGreyBg}>
                <Text style={mainStyles.mainBlueText}>8 events</Text>
              </Badge>
            </Right>
          </ListItem>

          <ListItem icon style={{width:'100%'}}>
            <Left>
              <Icon
                name="profile-circle"
                family="NowExtra"
                size={15}
              />
            </Left>
            <Body>
            <Text style={[mainStyles.mainGreyText, {fontWeight:'bold'}]}>You are hosting</Text>
            </Body>
            <Right>
              <Badge style={mainStyles.lightGreyBg}>
                <Text style={mainStyles.mainBlueText}>5 Events</Text>
              </Badge>
            </Right>
          </ListItem>

          <ListItem icon style={{width:'100%'}}>
            <Left>
              <Icon
                name="profile-circle"
                family="NowExtra"
                size={15}
              />
            </Left>
            <Body>
            <Text style={[mainStyles.mainGreyText, {fontWeight:'bold'}]}>New Followers</Text>
            </Body>
            <Right>
              <Badge style={mainStyles.lightGreyBg}>
                <Text style={mainStyles.mainBlueText}>221 people</Text>
              </Badge>
            </Right>
          </ListItem>

        

      </Block>

    </Block>

      <Block flex style={{ paddingLeft: 8, paddingRight: 14 }}>
        <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>

          {screens.map((item, index) => {
            return (
              <DrawerCustomItem
                title={item}
                key={index}
                navigation={navigation}
                focused={state.index === index ? true : false}
                color={"red"}
                style={{color:'blue'}}
              />
            );
          })}


        <Block flex style={{ marginTop: 24, marginVertical: 8, paddingHorizontal: 8 }}>
          <Block
            style={{ borderColor: 'blue', width: '93%', borderWidth: StyleSheet.hairlineWidth, marginHorizontal: 10}}
          />
        </Block>

        {/* <DrawerCustomItem style={{color:'red'}} title="GETTING STARTED" navigation={navigation}/> */}
        <DrawerCustomItem title="LOGOUT" navigation={navigation}/>
        
        </ScrollView>
      </Block>

    </Block>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  header: {
    paddingHorizontal: 28,
    paddingBottom: theme.SIZES.BASE,
    paddingTop: theme.SIZES.BASE * 3,
    justifyContent: "center"
  },
  headerIcon: {
    marginTop: -20
  },
  logo: {
    height: 40,
    width: 37
  }
});

export default CustomDrawerContent;
