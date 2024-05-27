/**********************
* BUILT IN COMPONENTS 
***********************/
import React, { useEffect, useContext, useState} from "react";
import { View, Text, LogBox, Image } from "react-native";
import * as Animatable from "react-native-animatable";
import i18n from 'i18n-js';
import AwesomeButton from "react-native-really-awesome-button";
/*import {
  GoogleSignin,
} from '@react-native-google-signin/google-signin';*/
import { IOS_CLIENTID, ANDROID_CLIENTID, WEB_CLIENTID } from "@env";
/**********************
* COMPONENTS 
***********************/
import CustomText from "../../Components/v1/CustomText";
import MainBackButton from "../../Buttons/v1/MainBackButton";
/**********************
* CONTEXTS 
***********************/
import { DataContext } from "../../Contexts/v1/DataContext";
import { LanguageContext } from "../../Contexts/v1/LanguageContext";
import { Context as AuthContext } from "../../Contexts/v1/AuthContext";
/**********************
* RESOURCES 
***********************/
import { styles } from "../../Styles/v1/LoginStyles";
import { textRegisterStyles, headerStyles } from "../../Styles/v1/GeneralStyles";
import { colours } from "../../Helpers/v1/Colours";
import { playAudio } from "../../Resources/v1/PlaySound";
import { loginScreenAudio } from "../../Resources/v1/AudioData";

LogBox.ignoreLogs(["Linking requires a build-time setting `scheme` in the project's Expo config (app.config.js or app.json) for production apps, if it's left blank, your app may crash. The scheme does not apply to development in the Expo client but you should add it as soon as you start working with Linking to avoid creating a broken build. Learn more: https://docs.expo.dev/guides/linking/"]
)


const LoginScreen = ({ navigation }) => { 
  const { staticData, setStaticData } = useContext(DataContext); 
  const { signin, signup } = useContext(AuthContext);
    const { language } = useContext(LanguageContext);
  const [data, setData] = useState({    
    mainError: ""
  });

  /*const configureGoogleSignIn = () => {
    GoogleSignin.configure({
      webClientId: `${WEB_CLIENTID}`,
      iosClientId: `${IOS_CLIENTID}`,
      androidClientId: `${ANDROID_CLIENTID}`,
    });
  }
  

  /*const signIn = async () => {
    
    try {
      await GoogleSignin.hasPlayServices();
      const userinfo = await GoogleSignin.signIn();
      setStaticData({
        ...staticData,
        signin: true,
        userInfo: userinfo.user
      });

    } catch (e) {
      //setError(e)
    }
  }

  const signUp = async () => {
    
    try {
      await GoogleSignin.hasPlayServices();
      const userinfo = await GoogleSignin.signIn();
      setStaticData({
        ...staticData,
        signin: false,
        userInfo: userinfo.user
      });

    } catch (e) {
      //setError(e)
    }
  }*/

  useEffect(() => {
      //configureGoogleSignIn();
      playAudio(loginScreenAudio[language.audioSpecificLanguage], 200);
  }, []);
  
  
      
  return (
          
      <View style={styles.container}>
        <MainBackButton navigation={navigation} text={i18n.t('Back')}/>
        <CustomText
            viewStyle={headerStyles.header}
            textStyle={{...headerStyles.buttonText, fontSize: 20, paddingHorizontal: 20}}
            text={i18n.t('Welcome!')}
        />

        <Animatable.View style={styles.footer} animation="fadeInUpBig"> 
            <Text style={{ ...styles.error, marginTop: 10 }}>
                {data.mainError}
            </Text>

          <View style={styles.registerNavButton}>
            <CustomText
              viewStyle={textRegisterStyles.textRegister}
              textStyle={textRegisterStyles.textRegisterText}
              text={i18n.t('Already a member?')}
            />
          </View>
          
          <View style={styles.bottomMargin}>
              <AwesomeButton
                width={styles.button_dimensions.width}
                height={styles.button_dimensions.height}
                borderRadius={10}
                backgroundColor={colours.white}
                backgroundShadow={colours.darkBlue}
                backgroundDarker={colours.gold}
                      onPress={(next) => {
                          signin()
                      }
                      }
              >
                <View style={styles.buttonRow}>
                  <Image source={require("../../assets/pictures/google.png")} style={styles.image} />
                  <Text style={{ ...styles.buttonTextGold, marginLeft: 10 }}>{i18n.t('Sign in with ') + "Google"}</Text>
                </View>
                
              </AwesomeButton>
            </View>
                  
            <View style={styles.registerNavButton}>
              <CustomText
                viewStyle={textRegisterStyles.textRegister}
                textStyle={textRegisterStyles.textRegisterText}
                text={i18n.t('Not a member?')}
              />
              </View>
              <View style={styles.bottomMargin}>
                <AwesomeButton
                  width={styles.button_dimensions.width}
                  height={styles.button_dimensions.height}
                  borderRadius={10}
                  backgroundColor={colours.white}
                  backgroundShadow={colours.darkBlue}
                  backgroundDarker={colours.gold}
                      onPress={(next) => {
                          signup()
                      }
                      }
                >
                  <View style={styles.buttonRow}>
                    <Image source={require("../../assets/pictures/google.png")} style={styles.image} />
                    <Text style={{ ...styles.buttonTextGold, marginLeft: 10 }}>{i18n.t('Sign up with ') + "Google"}</Text>
                  </View>
                  
                </AwesomeButton>
              </View>
          </Animatable.View>
      </View>
  );
}


export default LoginScreen;