/**********************
* BUILT IN COMPONENTS 
***********************/
import React, { useEffect, useContext } from "react";
import { View, Text, Image, LogBox} from "react-native";
import * as Animatable from "react-native-animatable";
import * as Notifications from 'expo-notifications';
import * as Localization from 'expo-localization';
import { MaterialCommunityIcons } from "@expo/vector-icons";
import i18n from 'i18n-js';
import { StatusBar } from 'expo-status-bar';
/**********************
* CONTEXTS 
***********************/
import { LanguageContext } from "../../Contexts/v1/LanguageContext";
import { DataContext } from "../../Contexts/v1/DataContext";
/**********************
* RESOURCES 
***********************/
import { styles } from "../../Styles/v1/SplashStyles";
import { generalStyles } from "../../Styles/v1/GeneralStyles";
import { colours } from "../../Helpers/v1/Colours";
import { en } from "../../Services/v1/Lang/en";
import { fr } from "../../Services/v1/Lang/fr";
import { registerForPushNotificationsAsync } from "../../Services/v1/RegisterForNotifications";
import { playAudio } from "../../Resources/v1/PlaySound";
import { splashScreenAudio } from "../../Resources/v1/AudioData";
/**********************
* COMPONENTS 
***********************/
import StartButton from "../../Buttons/v1/StartButton";
/*import LanguagePicker from "../../Components/v1/LanguagePicker";
import CountryPicker from "../../Components/v1/CountryPicker";
import Tribes from "../../Components/v1/Tribes";*/
/**
* The Splash Screen/Landing Screen when the App is first installed or when the User has logged out.
*
* @version 1.0.0
* @subpackage Component
* @copyright Marse Jollof
* @author [Moses carayol](https://github.com/DihibruSlaiv/MarseJollofClient)
*/


LogBox.ignoreLogs([
	"ViewPropTypes will be removed from React Native, along with all other PropTypes. We recommend that you migrate away from PropTypes and switch to a type system like TypeScript. If you need to continue using ViewPropTypes, migrate to the 'deprecated-react-native-prop-types' package.",
	'NativeBase: The contrast ratio of',
	"[react-native-gesture-handler] Seems like you\'re using an old API with gesture components, check out new Gestures system!",
])

const SplashScreen = ({ navigation }) => { 

  const { language } = useContext(LanguageContext);
  const { staticData, setStaticData } = useContext(DataContext);

  i18n.fallbacks = true;
  i18n.translations = { en, fr }
  let local_array = Localization.locale.split("-");
  let local_lang = (local_array.length > 1) ? local_array[0] : Localization.locale;
  
  i18n.locale = (language.writtenLanguage && language.writtenLanguage != local_lang) ? language.writtenLanguage : local_lang;


  useEffect(() => {  
    
    Notifications.setNotificationHandler({
        handleNotification: async () => ({
          shouldShowAlert: true, 
          shouldPlaySound: true,
          shouldSetBadge: true,
        }),
    });

    /*registerForPushNotificationsAsync().then(token => {
      i18n.expoPushToken = token
      setStaticData({
          ...staticData,
          expoPushToken: token,
      });
    }); */

    //playAudio(splashScreenAudio.splashAudio, 1000);
  }, []); 
  
    /*
    <LanguagePicker />

{staticData.tribesCountry ? (
              <View style={generalStyles.langAndContView}>
                <View style={{marginLeft: 5}}>
                  <Text style={{...generalStyles.langAndContText, color: colours.white }}>{i18n.t("Tribes from") + "..."}</Text>
                </View>
                <CountryPicker />
              </View>
              ) : null}

              <View style={generalStyles.action}>
          {!staticData.tribesCountry ? (
            <View>
              <Text style={styles.tribesText}>{i18n.t("Loading audio for tribal languages")}...</Text>
              <Image style={styles.loading} source={require('../../assets/pictures/loading.gif')} />
            </View>
          ) : (
            < Tribes countryTribes={ staticData.tribes } language = { language } setLanguage = { setLanguage } />)
          }
        </View>

        */
  return (
    <View style={styles.container}>      
      <View style={styles.header}>
          <View style={{backgroundColor: colours.darkBlue}}>
            <View style={{ ...generalStyles.action, ...styles.topBarView }}>              
              
              <View style={generalStyles.langAndContView}>
                <View style={{marginLeft: 5}}>
                <Text style={{ ...generalStyles.langAndContText, color: colours.white }}>{i18n.t("Legible in") + "..."}</Text>
                </View>
                
              </View>
              
              
            
            </View>
          </View>
        
        <View style={styles.headerLogo}>
          <Animatable.Image
            animation="bounceIn"
            duration={1000}
            source={require("../../assets/pictures/afrilingo.png")}
            style={styles.logo}
            resizeMode="stretch"
          />
        </View>
      </View>

      <Animatable.View style={{ ...styles.footer, ...generalStyles.footer }} animation="fadeInUpBig">
        <Text style={styles.title}>{i18n.t("Audible in") + "..."}</Text>
        

        <View style={styles.login}>
          <StartButton navigation={navigation} />
        </View>
      </Animatable.View>              
    </View>
  );
}

export default SplashScreen;