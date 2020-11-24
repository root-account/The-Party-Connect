import React from 'react';
import { withNavigation } from '@react-navigation/compat';
import { StatusBar, TouchableOpacity, StyleSheet, Platform, Dimensions, View, ScrollView } from 'react-native';
import { Block, NavBar, Text, theme, Button as GaButton } from 'galio-framework';
import { Badge, Button, Picker, Form, Content} from 'native-base';

import Icon from './Icon';
import Input from './Input';
import Tabs from './Tabs';
import nowTheme from '../constants/Theme';

// Styles
import mainStyles from '../app-styles/mainStyles';

import RBSheet from "react-native-raw-bottom-sheet";

StatusBar.setBarStyle("dark-content");
if (Platform.OS === "android") {
  StatusBar.setBackgroundColor("transparent");
  StatusBar.setTranslucent(true);
}

const { height, width } = Dimensions.get('window');
const iPhoneX = () =>
  Platform.OS === 'ios' && (height === 812 || width === 812 || height === 896 || width === 896);

const BellButton = ({ isWhite, style, navigation }) => (
  <TouchableOpacity
    style={[styles.button, style, styles.bottomTabBtns, ]}
    onPress={() => this.RBSheet.open()}
  >
    <Icon
    family="AntDesign"
    size={25}
    name="user"
    style={textColors.white}
  />
  {/* <Text style={{fontSize:12}}>Ephraim Kgwele</Text> */}
  {/* <Block middle style={[styles.notify, bgColors.darkBlue]} >
      <Text style={[textColors.white, {padding:2}]}>4</Text>
    </Block> */}
  </TouchableOpacity>
);


const BasketButton = ({ isWhite, style, navigation }) => (
  <TouchableOpacity
    style={[styles.button, style, styles.bottomTabBtns]}
  >
    <Icon
    family="AntDesign"
    size={25}
    name="setting"
    style={textColors.white}
  />
  {/* <Text style={{fontSize:12}}>Messages</Text> */}
  </TouchableOpacity>
);



class Header extends React.Component {
  handleLeftPress = () => {
    const { back, navigation } = this.props;
    return back ? navigation.goBack() : navigation.openDrawer();
  };

  renderRight = () => {
    const { white, title, navigation } = this.props;
    

    if (title === 'Title') {
      return [
        <BellButton key="chat-title" navigation={navigation} isWhite={white} />,
        <BasketButton key="basket-title" navigation={navigation} isWhite={white} />
      ];
    }

    switch (title) {
      case 'Events Feed':
      case 'Find People':
        return [
          
          <View style={{width:120, marginTop:10, flexDirection:'row', alignItems:'flex-end'}}>
          <Button style={{width:'auto'}} onPress={() => this.RBSheet.open()} small iconLeft rounded bordered style={[textColors.white, {paddingLeft:15, paddingRight:15, marginBottom:10,}]}>
            <Icon
              family="AntDesign"
              size={18}
              name="search1"
              style={[textColors.white, {marginRight:10,}]}
            />
            <Text style={[textColors.white, {fontSize:14}]}>filter events</Text>
          </Button>
          </View>
          
        ];
      // case 'Find People':
      //   return [
      //     <BellButton key="chat-home" navigation={navigation} isWhite={white} />,
      //     <BasketButton key="basket-home" navigation={navigation} isWhite={white} />,
      //   ];
      case 'Categories':
        return [
          <BellButton key="chat-categories" navigation={navigation} isWhite={white} />,
          <BasketButton key="basket-categories" navigation={navigation} isWhite={white} />
        ];
      case 'Category':
        return [
          <BellButton key="chat-deals" navigation={navigation} isWhite={white} />,
          <BasketButton key="basket-deals" navigation={navigation} isWhite={white} />
        ];
      case 'Profile':
        return [
          <BellButton key="chat-profile" navigation={navigation} isWhite={white} />,
          <BasketButton key="basket-deals" navigation={navigation} isWhite={white} />
        ];
      case 'Account':
        return [
          <BellButton key="chat-profile" navigation={navigation} />,
          <BasketButton key="basket-deals" navigation={navigation} />
        ];
      case 'Product':
        return [
          <BellButton key="chat-profile" navigation={navigation} isWhite={white} />,
          <BasketButton key="basket-product" navigation={navigation} isWhite={white} />
        ];
      case 'Search':
        return [
          <BellButton key="chat-search" navigation={navigation} isWhite={white} />,
          <BasketButton key="basket-search" navigation={navigation} isWhite={white} />
        ];
      case 'Settings':
        return [
          <BellButton key="chat-search" navigation={navigation} isWhite={white} />,
          <BasketButton key="basket-search" navigation={navigation} isWhite={white} />
        ];
      default:
        break;
    }
  };




  headerBottomSheet = () =>{
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
            dragFromTopOnly={true}
            height={600}
            customStyles={{
              wrapper: {
                backgroundColor: "rgba(0,0,0,0.7)"
              },
              draggableIcon: {
                backgroundColor: "#E5E5E5",
                paddingBottom:10,
                paddingTop:10,
              },
              container: {
                borderTopLeftRadius:20,
                borderTopRightRadius:20,
                // backgroundColor:'#f7f7f7'
              }
            }}
          >
    
            <ScrollView >
              <Text style={{paddingBottom:1200}}>we are here now</Text>
            </ScrollView>
    
          </RBSheet>
    )
  }


  renderSearch = () => {
    const { navigation } = this.props;
    return (
      <View>
      <Input
        right
        color="black"
        style={[styles.search, {backgroundColor:'transparent', borderColor:'#ffffff'}]}
        placeholder="Filter events..."
        placeholderTextColor={'#ffffff'}
        onFocus={() => this.RBSheet.open()}
        iconContent={
          <Icon size={16} color={'#ffffff'} name="zoom-bold2x" family="NowExtra" />
        }
      />

      </View>
    );
  };

  // renderOptions = () => {
  //   const { navigation, optionLeft, optionRight } = this.props;

  //   return (
  //     <Block row style={styles.options}>
  //       <Button
  //         shadowless
  //         style={[styles.tab, styles.divider]}
  //         onPress={() => console.log(navigation.navigate('Pro'))}
  //       >
  //         <Block row middle>
  //           <Icon
  //             name="bulb"
  //             family="NowExtra"
  //             size={18}
  //             style={{ paddingRight: 8 }}
  //             color={nowTheme.COLORS.HEADER}
  //           />
  //           <Text style={{ fontFamily: 'montserrat-regular' }} size={16} style={styles.tabTitle}>
  //             {optionLeft || 'Advanced Search'}
  //           </Text>
  //         </Block>
  //       </Button>
  //       <Button shadowless style={styles.tab} onPress={() => navigation.navigate('Pro')}>
  //         <Block row middle>
  //           <Icon
  //             size={18}
  //             name="bag-162x"
  //             family="NowExtra"
  //             style={{ paddingRight: 8 }}
  //             color={nowTheme.COLORS.HEADER}
  //           />
  //           <Text style={{ fontFamily: 'montserrat-regular' }} size={16} style={styles.tabTitle}>
  //             {optionRight || 'New Event'}
  //           </Text>
  //         </Block>
  //       </Button>

  //     </Block>
  //   );
  // };


  renderFilters = () => {

    return (
      <View>
        <View style={[{borderColor:'#1f86de',marginBottom:0, marginTop:10, borderTopWidth:1, flexDirection:'row', alignItems:'center'}]}>

          <View style={{width:'82%', borderRadius:20}}>
            {/* <Button onPress={() => this.RBSheet.open()} small iconLeft rounded bordered style={[textColors.white, {paddingLeft:15, paddingRight:15, marginBottom:10,}]}>
                <Icon
                  family="AntDesign"
                  size={18}
                  name="search1"
                  style={[textColors.white, {marginRight:10,}]}
                />
                <Text style={[textColors.white, {fontSize:14}]}>Find events & people...</Text>
              </Button> */}
              <ScrollView horizontal={true} style={{borderRadius:20, padding:10, paddingTop:10, paddingLeft:5,}}>

<View style={{flexDirection:'row', paddingRight:10,}}>

<Badge primary style={{flexDirection:'row', alignContent:'center', alignItems:'center', marginRight:5,}}>
    <Icon
      family="AntDesign"
      size={14}
      name="enviromento"
      style={[textColors.white, {marginRight:5,}]}
    />
    <Text style={[textColors.white]}>Rosebank</Text>
</Badge>

<Badge primary style={{flexDirection:'row', alignContent:'center', alignItems:'center', marginRight:5,}}>
    <Icon
      family="AntDesign"
      size={14}
      name="calendar"
      style={[textColors.white, {marginRight:5,}]}
    />
    <Text style={[textColors.white]}>25 Aug 2020</Text>
</Badge>

<Badge primary style={{flexDirection:'row', alignContent:'center', alignItems:'center', marginRight:5,}}>
    <Icon
      family="AntDesign"
      size={14}
      name="staro"
      style={[textColors.white, {marginRight:5,}]}
    />
    <Text style={[textColors.white]}>House Parties</Text>
</Badge>



<Badge primary style={{flexDirection:'row', alignContent:'center', alignItems:'center', marginRight:5,}}>
    <Icon
      family="AntDesign"
      size={14}
      name="addusergroup"
      style={[textColors.white, {marginRight:5,}]}
    />
    <Text style={[textColors.white]}>50 - 60 Guests</Text>
</Badge>

<Badge primary style={{flexDirection:'row', alignContent:'center', alignItems:'center', marginRight:5,}}>
    <Icon
      family="AntDesign"
      size={14}
      name="filter"
      style={[textColors.white, {marginRight:5,}]}
    />
    <Text style={[textColors.white]}>Outdoors</Text>
</Badge>



</View>

</ScrollView>
          </View>
          
          <View style={{width:'18%', flexDirection:'row', alignItems:'center', justifyContent:'flex-end', paddingRight:10} }>
              <Button iconLeft transparent light>
                <Icon
                  family="AntDesign"
                  size={15}
                  name="closecircleo"
                  style={[textColors.white, {marginRight:5,}]}
                />
                <Text style={textColors.white}>Clear</Text>
              </Button>
            </View>

        </View>
     
      

      </View>
    );
  };



  renderAlertButtons = () => {

    return (
  <View>
  <View 
      style={{
         
        flexDirection:'row', 
        width:'100%', 
        marginTop:-20,
        position:'relative', 
        zIndex:999, 
        backgroundColor:"transparent",
        justifyContent:'center',
        borderTopColor:'#ffffff',
        borderTopWidth:0,
      }}
    >

        <TouchableOpacity style={mainStyles.bottomTabBtns} onPress={() => {this.RBSheet.open()}}>
        <Icon
            family="AntDesign"
            size={25}
            name="notification"
            style={[mainStyles.whiteText]}
          />
          <Text style={[{fontSize:12}, mainStyles.whiteText]}>Alerts</Text>
        </TouchableOpacity>

        <TouchableOpacity style={mainStyles.bottomTabBtns} onPress={() => {this.RBSheet.open()}}>
        <Icon
            family="AntDesign"
            size={25}
            name="addusergroup"
            style={[mainStyles.whiteText]}
          />
          <Text style={[{fontSize:12}, mainStyles.whiteText]}>Invites</Text>
        </TouchableOpacity>

        <TouchableOpacity style={mainStyles.bottomTabBtns}  onPress={() => {this.RBSheet.open()}}> 
        <Icon
            family="AntDesign"
            size={25}
            name="checkcircleo"
            style={[mainStyles.whiteText]}
          />
          <Text style={[{fontSize:12}, mainStyles.whiteText]}>RSVPs</Text>
        </TouchableOpacity>

        <TouchableOpacity style={mainStyles.bottomTabBtns} onPress={() => {this.RBSheet.open()}}>
        <Icon
            family="AntDesign"
            size={25}
            name="message1"
            style={[mainStyles.whiteText]}
          />
          <Text style={[{fontSize:12}, mainStyles.whiteText]}>Messages</Text>
        </TouchableOpacity>

        <TouchableOpacity style={mainStyles.bottomTabBtns} onPress={() => {this.RBSheet.open()}}>
        <Icon
            family="AntDesign"
            size={25}
            name="calendar"
            style={[mainStyles.whiteText]}
          />
          <Text style={[{fontSize:12}, mainStyles.whiteText]}>Your month</Text>
        </TouchableOpacity>
    </View>
    </View>
 );
};


  renderHeader = () => {
    const { alerts, filters, search } = this.props;

    if (search || tabs || options) {
      return (
        <Block style={{padding:10, paddingBottom:5}}>
          {search ? this.renderSearch() : null}
          {alerts ? this.renderAlertButtons() : null}
          {filters ? this.renderFilters() : null}
          {this.headerBottomSheet()}
        </Block>
      );
    }


  };

  render() {
    const {
      back,
      title,
      white,
      transparent,
      bgColor,
      iconColor,
      titleColor,
      navigation,
      ...props
    } = this.props;

    const noShadow = ['Search', 'Categories', 'Deals', 'Pro', 'Profile'].includes(title);
    const headerStyles = [
      !noShadow ? styles.shadow : null,
      transparent ? { backgroundColor: 'rgba(0,0,0,0)' } : null
    ];

    const navbarStyles = [styles.navbar, bgColor && { backgroundColor: bgColor }];

    return (
      <Block style={[headerStyles,{paddingTop:50, borderWidth:0, elevation: 0}, bgColors.mainBlue, ]}>
        <NavBar
          back={false}
          title={title}
          tabs={tabs.beauty} 
          style={[navbarStyles, {paddingTop:0,}, bgColors.mainBlue]}
          transparent={transparent}
          right={this.renderRight()}
          rightStyle={{ alignItems: 'flex-end' }}
          
          left={
            <Icon
              style={[{backgroundColor:'#ffffff', fontWeight:'bold', padding:15, width:50, borderRadius:50}, textColors.mainBlue]}
              name={back ? 'minimal-left2x' : 'align-left-22x'}
              family="NowExtra"
              size={20}
              onPress={this.handleLeftPress}
            />
          }
          leftStyle={{ paddingVertical: 19,  }}
          titleStyle={[
            styles.title,
            { color: 'white' },
            titleColor && { color: titleColor }
          ]}
          {...props}
        />
        {this.renderHeader()}
      </Block>
    );
  }
}



const textColors = StyleSheet.create({
  mainBlue:{color:'#1ea1f2', borderColor:'#0066cc'},
  darkBlue:{color:'#0066cc', borderColor:'#0066cc'},
  lightBlue:{color:'#0066cc', borderColor:'#0066cc'},
  mainGrey:{color:'#888888', borderColor:'#0066cc'},
  lightGrey:{color:'#F5F5F5', borderColor:'#0066cc'},
  darkGrey:{color:'#555555', borderColor:'#0066cc'},
  black:{color:'#0000', borderColor:'#0000'},
  white:{color:'#ffffff', borderColor:'#ffffff'},
});

const bgColors = StyleSheet.create({
  mainBlue:{backgroundColor:'#1ea1f2', borderColor:'#0066cc'},
  darkBlue:{backgroundColor:'#3c2a77', borderColor:'#0066cc'},
  lightBlue:{backgroundColor:'#0066cc', borderColor:'#0066cc'},
  mainGrey:{backgroundColor:'#E5E5E5', borderColor:'#0066cc'},
  lightGrey:{backgroundColor:'#F5F5F5', borderColor:'#0066cc'},
  darkGrey:{backgroundColor:'#555555', borderColor:'#0066cc'},
  black:{backgroundColor:'#0000', borderColor:'#0000'},
  white:{backgroundColor:'#ffffff', borderColor:'#ffffff'},
});

const styles = StyleSheet.create({
  button: {
    padding: 12,
    position: 'relative'
  },
  title: {
    width: '100%',
    fontSize: 16,
    fontWeight: 'bold',
    fontFamily: 'montserrat-regular'
  },
  navbar: {
    paddingVertical: 0,
    paddingBottom: theme.SIZES.BASE * 1.5,
    paddingTop: iPhoneX ? theme.SIZES.BASE * 4 : theme.SIZES.BASE,
    zIndex: 5
  },
  shadow: {
    backgroundColor: theme.COLORS.WHITE,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.2,
    elevation: 3
  },
  notify: {
    backgroundColor: nowTheme.COLORS.SUCCESS,
    borderRadius: 4,
    height: theme.SIZES.BASE / 2,
    width: theme.SIZES.BASE / 2,
    position: 'absolute',
    top: 9,
    right: 12
  },
  header: {
    backgroundColor: theme.COLORS.WHITE
  },
  divider: {
    borderRightWidth: 0.3,
    borderRightColor: theme.COLORS.ICON
  },
  search: {
    height: 38,
    width: width - 32,

    borderWidth: 1,
    borderRadius: 30,
    marginBottom:10,
    marginTop:0,
    borderColor: nowTheme.COLORS.BORDER
  },
  options: {
    marginBottom: 24,
    marginTop: 10,
    elevation: 4
  },
  tab: {
    backgroundColor: theme.COLORS.TRANSPARENT,
    width: width * 0.35,
    borderRadius: 0,
    borderWidth: 0,
    height: 24,
    elevation: 0
  },
  tabTitle: {
    lineHeight: 19,
    fontWeight: '400',
    color: nowTheme.COLORS.HEADER
  },
  social: {
    width: theme.SIZES.BASE * 3.5,
    height: theme.SIZES.BASE * 3.5,
    borderRadius: theme.SIZES.BASE * 1.75,
    justifyContent: 'center'
  },

  primaryColor:{

  },
  secondColor:{

  },
  thirdColor:{

  },
  fourthColor:{

  },
  bottomTabBtns:{
   
  },

  bottomTabIcons:{

  },
  bottomTabText:{
    
  }
});

export default withNavigation(Header);
