import React from "react";
import { StyleSheet, TouchableOpacity, Linking } from "react-native";
import { Block, Text, theme } from "galio-framework";

import Icon from "./Icon";
import nowTheme from "../constants/Theme";

// Styles
import mainStyles from '../app-styles/mainStyles';

class DrawerItem extends React.Component {
  renderIcon = () => {
    const { title, focused } = this.props;

    switch (title) {
      case "Latest Feed":
        return (
          <Icon
            name="filter-list"
            family="MaterialIcons"
            size={18}
            style={[focused ? mainStyles.whiteText : mainStyles.mainBlueText,{ opacity: 1 }]}
          />
        );
      case "Chats & Conversations":
        return (
          <Icon
            name="message1"
            family="AntDesign"
            size={18}
            style={[focused ? mainStyles.whiteText : mainStyles.mainBlueText,{ opacity: 1 }]}
          />
        );
      case "Find People & Events":
        return (
          <Icon
            family="AntDesign"
            size={18}
            name="search1"
            style={[focused ? mainStyles.whiteText : mainStyles.mainBlueText,{ opacity: 1 }]}
          />
        );
      case "Bookmarked Events":
        return (
          <Icon
            family="AntDesign"
            size={18}
            name="hearto"
            style={[focused ? mainStyles.whiteText : mainStyles.mainBlueText,{ opacity: 1 }]}
          />
      );
      case "Events Manager":
        return (
          <Icon
            family="AntDesign"
            size={18}
            name="setting"
            style={[focused ? mainStyles.whiteText : mainStyles.mainBlueText,{ opacity: 1 }]}
          />
      );
      case "My Calender":
        return (
          <Icon
            family="AntDesign"
            size={18}
            name="calendar"
            style={[focused ? mainStyles.whiteText : mainStyles.mainBlueText,{ opacity: 1 }]}
          />
      );
      case "Profile":
        return (
          <Icon
            name="profile-circle"
            family="NowExtra"
            size={18}
            style={[focused ? mainStyles.whiteText : mainStyles.mainBlueText,{ opacity: 1 }]}
          />
        );
      case "Settings":
        return (
          <Icon
            name="settings-gear-642x"
            family="NowExtra"
            size={18}
            style={[focused ? mainStyles.whiteText : mainStyles.mainBlueText,{ opacity: 1 }]}
          />
        );

      case "GETTING STARTED":
        return (
          <Icon
            name="share"
            family="NowExtra"
            size={18}
            style={[focused ? mainStyles.whiteText : mainStyles.mainBlueText,{ opacity: 1 }]}
          />
          );

      case "LOGOUT":
        return (
          <Icon
            name="share"
            family="NowExtra"
            size={18}
            style={[focused ? mainStyles.whiteText : mainStyles.mainBlueText,{ opacity: 1 }]}
          />
        );
      default:
        return null;
    }
  };

  render() {
    const { focused, title, navigation } = this.props;

    const containerStyles = [
      styles.defaultStyle,
      focused ? [styles.activeStyle,mainStyles.mainBlueBg] : null
    ];

    return (
      <TouchableOpacity
        style={{ height: 50 }}
        onPress={() =>
          title == "GETTING STARTED"
            ? Linking.openURL(
                "https://demos.creative-tim.com/now-ui-pro-react-native/docs/"
              ).catch(err => console.error("An error occurred", err))
            : navigation.navigate(title == 'LOGOUT' ? 'Onboarding' : title)
        }
      >
        <Block flex row style={containerStyles}>
          <Block middle flex={0.1} style={{ marginRight: 5 }}>
            {this.renderIcon()}
          </Block>
          <Block row center flex={0.9}>
            <Text
              style={{
                fontFamily: "montserrat-regular",
                textTransform: "uppercase",
                fontWeight: "300"
              }}
              size={15}
              bold={focused ? true : false}
              style={[focused ? mainStyles.whiteText : mainStyles.mainBlueText,{ opacity: 1 }]}
            >
              {title}
            </Text>
          </Block>
        </Block>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  defaultStyle: {
    paddingVertical: 15,
    paddingHorizontal: 14,
    color: "white"
  },
  activeStyle: {
    borderRadius: 30,
    color: "white"
  },
  shadow: {
    shadowColor: theme.COLORS.BLACK,
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowRadius: 8,
    shadowOpacity: 0.1
  }
});

export default DrawerItem;
