/**********************
* BUILT IN COMPONENTS 
***********************/
import React, { useContext, useState, useEffect } from "react";
import { AntDesign, Ionicons, FontAwesome5 } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import i18n from 'i18n-js';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
/**********************
* SCREENS 
***********************/
/*import PayScreen from "./PayScreen";
import { TrackDeliveryScreen } from "./TrackDeliveryScreen";
import { TrackTripUserScreen } from "./TrackTripUserScreen";
import { TrackTripScreen } from "./TrackTripScreen";
import { UpdateTripScreen } from "./UpdateTripScreen";
import { UpdateDeliveryScreen } from "./UpdateDeliveryScreen";
import { UpdateRentalScreen } from "./UpdateRentalScreen";
import { SettingsScreen } from "./SettingsScreen";*/
import HomeStackScreen from "./HomeStackScreen";
import { VocabularyStackScreen } from "./VocabularyStackScreen";
import { NotificationStackScreen } from "./NotificationStackScreen";
import { CoursesStackScreen } from "./CoursesStackScreen";
/*import { BookingsScreen } from "./BookingsScreen";
import { UpdatedRouteScreen } from "./UpdatedRouteScreen";
import { UpdatedDeliveryRouteScreen } from "./UpdatedDeliveryRouteScreen";
import { EditProfileScreen } from "./EditProfileScreen";*/
/**********************
* CONTEXTS 
***********************/
import { Context as AuthContext } from "../../Contexts/v1/AuthContext";
import { DataContext } from "../../Contexts/v1/DataContext";
import { BottomStackContext } from "../../Contexts/v1/BottomStackContext";
/**********************
* COMPONENTS 
***********************/
import MenuBarIcon from "../../Components/v1/MenuBarIcon";
import HeaderLogo from "../../Components/v1/HeaderLogo";
/**********************
* RESOURCES 
***********************/
import { colours } from "../../Helpers/v1/Colours";
import { height } from "../../Styles/v1/GeneralStyles";

/**
 * The bottom tabs of the app
 * @version 1.0.0
 * @subpackage Tab Navigator 
 * @copyright Marse Jollof
 * @author [Moses carayol](https://github.com/DihibruSlaiv/MarseJollof)
 */

const BottomStack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();

const BottomTabScreen = () => {

  const { state } = useContext(AuthContext); 
  
         
      

  //useEffect(() => { 
        
  //}, [state.userData.notificationBadges]); 

  
  return (
    <Tab.Navigator
      initialRouteName="HomeStack"
      screenOptions={{
        headerShown: false,
        tabBarStyle: { position: 'absolute' },
        tabBarLabelStyle: {
          fontWeight: 'bold'
        },
        tabBarInactiveBackgroundColor: colours.white,
        tabBarInactiveTintColor: colours.darkBlue,
        tabBarActiveBackgroundColor: colours.darkBlue,
        tabBarActiveTintColor: colours.white,
        tabBarHideOnKeyboard: true
      }}
    >
      <Tab.Screen
        name="HomeStack"
        component={HomeStackScreen}
        options={{
          tabBarLabel: i18n.t("Home"),
          tabBarHideOnKeyboard: true,
          tabBarIcon: ({ tintColor, focused }) => (
            <FontAwesome5
              name="home"
              color={focused ? colours.white : colours.gold}
              size={26}              
            />
          ),
        }}
      />
      
      <Tab.Screen
        name="CoursesStack"
        component={CoursesStackScreen}
        options={{
          tabBarLabel: i18n.t("Courses"),
          tabBarHideOnKeyboard: true,
          tabBarIcon: ({ tintColor, focused }) => (
            <Ionicons
              name="book-sharp"
              color={focused ? colours.white : colours.gold}
              size={28}              
            />
          ),
        }}
      />

      <Tab.Screen
        name="VocabularyStack"
        component={VocabularyStackScreen}
        options={{
          tabBarLabel: i18n.t("Vocabulary"),
          tabBarIcon: ({ tintColor, focused }) => (
            <AntDesign
              name="filetext1"
              size={26}
              color={focused ? colours.white : colours.gold}
            />
          ),
        }}
      />

      <Tab.Screen
        name="NotificationsStack"
        component={NotificationStackScreen}
        options={{ 
          tabBarBadge: state.userData.notificationBadges != 0 ? state.userData.notificationBadges : null,
          tabBarLabel: i18n.t("Notifications"),
          tabBarIcon: ({ tintColor, focused }) => (
            <Ionicons
              name="notifications"
              size={26}
              color={focused ? colours.white : colours.gold}
            />
          ),
        }}
      />  
    </Tab.Navigator>
  );
};

const BottomStackScreen = ({navigation}) => {

  const [locData, setLocData] = useState(null); 

   /*<BottomStack.Screen
          headerMode="screen"
          headerTitleAlign="center"
          name="Pay"
          component={PayScreen}
          options={{
            headerShown: true,
            title: i18n.t('Payment'),
            headerRight: () => <MenuBarIcon navigation={navigation} />,
            headerLeft: () => <HeaderLogo />,            
          }}
        />

        <BottomStack.Screen
          headerMode="screen"
          headerTitleAlign="center"
          name="Settings"
          component={SettingsScreen}
          options={{
            headerShown: true,
            title: i18n.t('Settings'),
            headerRight: () => <MenuBarIcon navigation={navigation} />,
            headerLeft: () => <HeaderLogo />
          }}
        />

        <BottomStack.Screen
          headerMode="screen"
          headerTitleAlign="center"
          name="TrackDelivery"
          component={TrackDeliveryScreen}
          options={{
            headerShown: true,
            title: i18n.t('Track Delivery'),
            headerRight: () => <MenuBarIcon navigation={navigation} />,
            headerLeft: () => <HeaderLogo />
          }}
        />

        <BottomStack.Screen
          headerMode="screen"
          headerTitleAlign="center"
          name="Bookings"
          component={BookingsScreen}
          options={{
            headerShown: true,
            title: i18n.t('Bookings'),
            headerRight: () => <MenuBarIcon navigation={navigation} />,
            headerLeft: () => <HeaderLogo />,            
          }}
        />
        
        <BottomStack.Screen
          headerMode="screen"
          headerTitleAlign="center"
          name="EditProfile"
          component={EditProfileScreen}
        />

        <BottomStack.Screen
          headerMode="screen"
          headerTitleAlign="center"
          name="UpdateTrip"
          component={UpdateTripScreen}
        /> 

        <BottomStack.Screen
          headerMode="screen"
          headerTitleAlign="center"
          name="UpdateDelivery"
          component={UpdateDeliveryScreen}
        />

        <BottomStack.Screen
          headerMode="screen"
          headerTitleAlign="center"
          name="UpdateRental"
          component={UpdateRentalScreen}
        />

        <BottomStack.Screen
          headerMode="screen"
          headerTitleAlign="center"
          name="UpdatedRoute"
          component={UpdatedRouteScreen}
          options={{
            headerShown: true,
            title: i18n.t('Updated Route'),
            headerRight: () => <MenuBarIcon navigation={navigation} />,
            headerLeft: () => <HeaderLogo />
          }}
        />

        <BottomStack.Screen
        headerMode="screen"
        headerTitleAlign="center"
        name="UpdatedDeliveryRoute"
        component={UpdatedDeliveryRouteScreen}
        options={{
          headerShown: true,
          title: i18n.t('Updated Delivery'),
          headerRight: () => <MenuBarIcon navigation={navigation} />,
          headerLeft: () => <HeaderLogo />
        }}
        />
        
        
        <BottomStack.Screen
          headerMode="screen"
          headerTitleAlign="center"
          name="TrackTrip"
          component={TrackTripScreen}
          options={{
            headerShown: true,
            title: i18n.t('Track Trip'),
            headerRight: () => <MenuBarIcon navigation={navigation} />,
            headerLeft: () => <HeaderLogo />
          }}
        /> 
        <BottomStack.Screen
          headerMode="screen"
          headerTitleAlign="center"
          name="TrackTripUser"
          component={TrackTripUserScreen}
          options={{
            headerShown: true,
            title: i18n.t('Track Trip'),
            headerRight: () => <MenuBarIcon navigation={navigation} />,
            headerLeft: () => <HeaderLogo />
          }}
        />*/
  return (
    <BottomStackContext.Provider value={{locData, setLocData}}>
    <BottomStack.Navigator
      screenOptions={{
          headerShown: false,
          headerStyle: {
            backgroundColor: colours.white,
            height: height * .12,
          },
          headerTitleAlign: "center",
          headerTintColor: colours.darkBlue,
          headerTitleStyle: {
            fontSize: 16,
          },
        }}
      >
      <BottomStack.Screen name="BottomTabScreen" component={BottomTabScreen} />
      
    </BottomStack.Navigator>
  </BottomStackContext.Provider>
  );
}




export default BottomStackScreen;