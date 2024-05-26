import React, { useState, useContext, useEffect } from "react";
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import * as Device from 'expo-device';
import * as Localization from 'expo-localization';
import * as Updates from 'expo-updates';
import i18n from 'i18n-js';
import AppLoading from "expo-app-loading";
import AsyncStorage from "@react-native-async-storage/async-storage";
/**********************
* SCREENS 
***********************/
//import { ActiveStackScreen } from './Screens/v1/ActiveStackScreen';
//import { WalletsScreen } from './Screens/v1/WalletsScreen';
import RootStackScreen from './Screens/v1/RootStackScreen';
//import PreSplashScreen from './Screens/v1/PreSplashScreen';
//import PreregisterScreen from "./Screens/v1/PreregisterScreen";
/**********************
* RESOURCES 
***********************/
import { colours } from "./Helpers/v1/Colours";
//import { WebSocket } from "./Config/v1/WebSocket";
import { en } from "./Services/v1/Lang/en";
import { fr } from "./Services/v1/Lang/fr";
import { pt } from "./Services/v1/Lang/pt";
import { axiosInstance, setAuthToken } from "./Config/v1/Axios";
/**********************
* CONTEXTS 
***********************/
import { Provider as AuthProvider, Context as AuthContext } from "./Contexts/v1/AuthContext";
import { LanguageContext } from "./Contexts/v1/LanguageContext";
import { DataContext } from "./Contexts/v1/DataContext";
//import { WebsocketContext } from "./Contexts/v1/WebsocketContext";

const App = () => {

  const { staticData, setStaticData } = useContext(DataContext);
  const { state } = useContext(AuthContext);
  const [appReady, setAppReady] = useState(false);

  /*async function onFetchUpdateAsync() {
    try {
      const update = await Updates.checkForUpdateAsync();

      if (update.isAvailable) {
        await Updates.fetchUpdateAsync();
        await Updates.reloadAsync();
      }
    } catch (error) {
      // You can also add an alert() to see the error message in case of an error when fetching updates.
      alert(`Error fetching latest Expo update: ${error}`);
    }
  }  */


  /*const checkLoginCredentials = async () => { 
    try {
      const appData = await AsyncStorage.getItem("@AppData81");
      if (appData != null) {
        const data = JSON.parse(appData)
        setAuthToken(data.userInfo.accessToken, axiosInstance);
        setStaticData({
          ...staticData,
          vehicleTypes: data.appInfo.vehicleTypes,
          prices: data.appInfo.prices,
          vehicle_types: data.appInfo.vehicle_types,
          carTopTypes: data.appInfo.carTopTypes,
          staticCars: data.appInfo.staticCars,
          permissionStatus: data.appInfo.permissionStatus,
          location: data.appInfo.location,
          savedLocation: data.appInfo.savedLocation,
          registered: data.appInfo.registered,
          //expoPushToken: data.appInfo.expoPushToken,
          manufacturer: data.appInfo.manufacturer,
          model: data.appInfo.model,
          device_name: data.appInfo.device_name,
          push_self_notify : data.appInfo.push_self_notify,
          country: data.appInfo.country,
          countries: data.appInfo.countries,
          registered: data.appInfo.registered
          //notification: null, //data.appInfo.notification,
          //locationNotification: null, //data.appInfo.locationNotification,
          //notificationBadges: null, //data.appInfo.notificationBadges,
        });

        state.userData = data.userInfo.user;
        state.token = data.userInfo.accessToken;
      }
  } catch (e) {
    // read error
  }
  }*/

  useEffect(() => { 
    
    //onFetchUpdateAsync();
  }, []);  


  /*if (!appReady) {
    return (
      <AppLoading
        startAsync={checkLoginCredentials}
        onFinish={() => setAppReady(true)}
        onError={console.warn}
      />
    )
  }*/

  /*{staticData.location != null ? (
          state.token !== null && appReady ? (
              <ActiveStackScreen/>
          ) : (
              staticData.userInfo !== null ?
              (
                  <PreregisterScreen />
              ) : (
                  <RootStackScreen />
              ) 
          )      
        ) : (
          <PreSplashScreen />  
        )} */

  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" backgroundColor={colours.darkBlue} />
      <RootStackScreen />  
    </NavigationContainer>
  );
}

export default () => {

  i18n.fallbacks = true;
  i18n.translations = { en, fr, pt }
  let local_array = Localization.locale.split("-");
  let local_lang = (local_array.length > 1) ? local_array[0] : Localization.locale;
  
  //i18n.locale = (language.writtenLanguage && language.writtenLanguage != local_lang) ? language.writtenLanguage : local_lang;
  i18n.locale = local_lang;
    const [language, setLanguage] = useState({
        audioLanguage: null,
        audioSpecificLanguage: null,
        writtenLanguage: local_lang
    });

    const [staticData, setStaticData] = useState({
      tempPassword: null,
      permissionStatus: false,
      location: null,
      savedLocation: null,
      registered: false,
      expoPushToken: null,
      manufacturer: Device.manufacturer,
      model: Device.modelName,
      device_name: Device.deviceName,
      push_self_notify : false,
      country: "The Gambia",
      tribesCountry: "The Gambia",
      tribes: [{ name: "Mandinka_GMB", spelling: "Mandinka", population_rank: 1 }, { name: "Fula_GMB", spelling: "Pulaar", population_rank: 2 }, { name: "Wollof_GMB", spelling: "Wollof", population_rank: 3 }, { name: "Jola_GMB", spelling: "Jola", population_rank: 4 }, { name: "Serrehule_GMB", spelling: "Serrehule", population_rank: 5 }],
      registered: false,
      notification: null,
      locationNotification: null,
      notificationBadges: 0,
      userInfo: null,
      signin: false
    });   
  
    //const [websocket, setWebsocket] = useState(WebSocket());
  
  
    return (
      <LanguageContext.Provider value={{ language, setLanguage }}>
        <DataContext.Provider value={{ staticData, setStaticData }}>
            <AuthProvider >
                <App />
            </AuthProvider>
        </DataContext.Provider>
      </LanguageContext.Provider>
    );
}; 
