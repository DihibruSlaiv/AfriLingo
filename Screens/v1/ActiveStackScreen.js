/**********************
* BUILT IN COMPONENTS 
***********************/
import React, { useContext, useEffect, useRef, useState } from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import * as Notifications from 'expo-notifications';
import { StatusBar } from "react-native";
import i18n from 'i18n-js';
//import { GoogleSignin } from '@react-native-google-signin/google-signin';
//import { registerForPushNotificationsAsync } from "../../Services/v1/RegisterForNotifications";
/**********************
* SCREENS 
***********************/
import BottomStackScreen from "./BottomTabScreen";
/**********************
* RESOURCES 
***********************/
import { colours } from "../../Helpers/v1/Colours";
/**********************
* COMPONENTS 
***********************/
import { DrawerContent } from "../../Components/v1/DrawerContent";
/**********************
* CONTEXTS
***********************/
import { DataContext } from "../../Contexts/v1/DataContext";
import { ActiveStackContext } from "../../Contexts/v1/ActiveStackContext";
import { Context as AuthContext } from "../../Contexts/v1/AuthContext";
//import { WebsocketContext } from "../../Contexts/v1/WebsocketContext";

/**
 * The Root of the App once the user has logged in
 * @version 1.0.0
 * @subpackage Drawer Navigator 
 * @copyright Marse Jollof
 * @author [Moses carayol](https://github.com/DihibruSlaiv/MarseJollof)
 */

const ActiveStackScreen = () => {
    
    const Drawer = createDrawerNavigator();

    //const { state } = useContext(AuthContext);

    const { staticData, setStaticData } = useContext(DataContext);

    //const { websocket } = useContext(WebsocketContext);

    const notificationListener = useRef();

    const responseListener = useRef();

    /*const [ids, setIds] = useState([]);

    const signOut = async () => {
        try {
        await GoogleSignin.signOut(); 
        setStaticData({
            ...staticData,
            signin: false,
            userInfo: null
        });
        } catch (error) {
        console.error(error);
        }
    };
      
  
    /**********************************************************
    * Subscriptions to channels where buyers and sellers
    * listen for events from each other.  This may include
    * sellers making offers to buyers or buyers making requests
    * for products needed.  Listening for Push notifications
    ***********************************************************/   

    useEffect(() => { 
        

        /*if (!staticData.expoPushToken) {
            Notifications.setNotificationHandler({
                handleNotification: async () => ({
                shouldShowAlert: true,
                shouldPlaySound: true,
                shouldSetBadge: true,
                }),
            });

            registerForPushNotificationsAsync().then(token => {
                i18n.expoPushToken = token
                setStaticData({
                    ...staticData,
                    expoPushToken: token,
                });
            });
        }*/

        
        /* Fired listener whenever a notification is received (app is foregrounded) */
        notificationListener.current = Notifications.addNotificationReceivedListener(notification => {            
            //playAudio(splashScreenAudio.notification, 100);
        });

        /* Fired listener whenever a user taps on or interacts with a notification (app is foregrounded, backgrounded, or killed) */
        responseListener.current = Notifications.addNotificationResponseReceivedListener(response => {
            //playAudio(splashScreenAudio.notification, 100);
        });

        //getNotifications(state, staticData, setStaticData, signOut)

        //signOut();
    }, []); 

           //     <Drawer.Screen name="ProfileStackScreen" component={RootProfileStackScreen} />
    
    /* The stack of the App */
    return (
        <ActiveStackContext.Provider value={{}}>
            <StatusBar barStyle="light-content" backgroundColor={colours.white} />
            <Drawer.Navigator initialRouteName="Settings" screenOptions={{ drawerPosition: 'right', headerShown: false }} drawerContent={props => <DrawerContent {...props}/>}>
                <Drawer.Screen name="HomeStack" component={BottomStackScreen} />
            </Drawer.Navigator>
        </ActiveStackContext.Provider>
    );
};

export { ActiveStackScreen };