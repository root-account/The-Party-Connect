import React from 'react';
import { Block } from "galio-framework";
import { Easing, Animated, Dimensions } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// screens
import Home from '../screens/Home';
import Profile from '../screens/Profile';
import Onboarding from '../screens/Onboarding';
import AddNewEvent from '../screens/AddNewEvent';
import MyEvents from '../screens/MyEvents';
import BookmarkedEvents from '../screens/BookmarkedEvents';
import MyCalender from '../screens/MyCalender';
import Chatrooms from '../screens/Chatrooms';

import FindPeople from '../screens/FindPeople';

// drawer
import CustomDrawerContent from "./Menu";
// header for screens
import { Header, Icon} from '../components';
import { nowTheme, tabs } from "../constants";

const { width } = Dimensions.get("screen");

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();


function FindPeopleStack(props) {
  return (
    <Stack.Navigator initialRouteName="FindPeople" mode="card" headerMode="screen">

      <Stack.Screen name="FindPeople" component={FindPeople} options={{
        header: ({ navigation, scene }) => (
          <Header 
            title="Find People"
            navigation={navigation} 
            scene={scene}
            color={'red'}
          />),
        backgroundColor: '#FFFFFF'
      }} />

    </Stack.Navigator>
  );
}


function AddNewEventStack(props) {
  return (
    <Stack.Navigator initialRouteName="AddNewEvent" mode="card" headerMode="screen">

      <Stack.Screen name="AddNewEvent" component={AddNewEvent} options={{
        header: ({ navigation, scene }) => (
          <Header 
            title="Add New Event"
            navigation={navigation} 
            scene={scene}
            color={'red'} 
          />),
        backgroundColor: '#FFFFFF'
      }} />

    </Stack.Navigator>
  );
}


function ChatroomsStack(props) {
  return (
    <Stack.Navigator initialRouteName="Chatrooms" mode="card" headerMode="screen">

      <Stack.Screen name="Chatrooms" component={Chatrooms} options={{
        header: ({ navigation, scene }) => (
          <Header 
            title="Public Chats"
            navigation={navigation} 
            scene={scene}
            color={'red'} 
          />),
        backgroundColor: '#FFFFFF'
      }} />

    </Stack.Navigator>
  );
}


function MyEventStack(props) {
  return (
    <Stack.Navigator initialRouteName="MyEvents" mode="card" headerMode="screen">

      <Stack.Screen name="MyEvents" component={MyEvents} options={{
        header: ({ navigation, scene }) => (
          <Header 
            title="My Events"
            navigation={navigation} 
            scene={scene}
            color={'red'} 
          />),
        backgroundColor: '#FFFFFF'
      }} />

    </Stack.Navigator>
  );
}


function SavedEventsStack(props) {
  return (
    <Stack.Navigator initialRouteName="BookmarkedEvents" mode="card" headerMode="screen">

      <Stack.Screen name="BookmarkedEvents" component={BookmarkedEvents} options={{
        header: ({ navigation, scene }) => (
          <Header 
            title="Favorite Events"
            navigation={navigation} 
            scene={scene}
            color={'red'} 
          />),
        backgroundColor: '#FFFFFF'
      }} />

    </Stack.Navigator>
  );
}

function MyCalendarStack(props) {
  return (
    <Stack.Navigator initialRouteName="MyCalender" mode="card" headerMode="screen">

      <Stack.Screen name="MyCalender" component={MyCalender} options={{
        header: ({ navigation, scene }) => (
          <Header 
            title="My Calender"
            navigation={navigation} 
            scene={scene}
            color={'red'} 
          />),
        backgroundColor: '#FFFFFF'
      }} />

    </Stack.Navigator>
  );
}

function ProfileStack(props) {
  return (
    <Stack.Navigator initialRouteName="Profile" mode="card" headerMode="screen">

      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              transparent
              white
              title="Profile"
              navigation={navigation}
              scene={scene}
      
            />
          ),
          cardStyle: { backgroundColor: "#FFFFFF" },
          headerTransparent: true
        }}
      />

    </Stack.Navigator>
  );
}

function HomeStack(props) {
  return (
    <Stack.Navigator mode="card" headerMode="screen">
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              title="Events Feed"
              filters
              alerts
              navigation={navigation}
              scene={scene}
            />
          ),
          cardStyle: { backgroundColor: "#FFFFFF" }
        }}
      />
      {/* <Stack.Screen
        name="Pro"
        component={Pro}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              title=""
              back
              white
              transparent
              navigation={navigation}
              scene={scene}
            />
          ),
          headerTransparent: true
        }}
      /> */}
    </Stack.Navigator>
  );
}

function AppStack(props) {
  return (
    <Drawer.Navigator
      style={{ flex: 1 }}
      drawerContent={props => <CustomDrawerContent {...props} />}
      drawerStyle={{
        backgroundColor: 'green',
        width: width * 0.8
      }}
      drawerContentOptions={{
        activeTintcolor: 'blue',
        inactiveTintColor: nowTheme.COLORS.WHITE,
        activeBackgroundColor: "yellow",
        itemStyle: {
          width: width * 0.75,
          backgroundColor: "transparent",
          paddingVertical: 16,
          paddingHorizonal: 12,
          justifyContent: "center",
          alignContent: "center",
          alignItems: "center",
          overflow: "hidden",
          color:'red',
        },
        labelStyle: {
          fontSize: 18,
          marginLeft: 12,
          fontWeight: "normal",
          color:'red',
        }
      }}
      initialRouteName="Home"
    >
      <Drawer.Screen name="Latest Feed" component={HomeStack} />
      <Drawer.Screen name="Find People & Events" component={FindPeopleStack} />
      <Drawer.Screen name="Chats & Conversations" component={ChatroomsStack} />
      <Drawer.Screen name="Events Manager" component={MyEventStack} />
      <Drawer.Screen name="Bookmarked Events" component={SavedEventsStack} />  
      <Drawer.Screen name="My Calender" component={MyCalendarStack} />
      <Drawer.Screen name="Profile" component={ProfileStack} />
      {/* <Drawer.Screen name="Add" component={AddNewEventStack} /> */}
    
    </Drawer.Navigator>
  );
}

export default function OnboardingStack(props) {
  return (
    <Stack.Navigator mode="card" headerMode="none">
      <Stack.Screen
        name="Onboarding"
        component={Onboarding}
        option={{
          headerTransparent: true
        }}
      />
      <Stack.Screen name="App" component={AppStack} />
    </Stack.Navigator>
  );
}

