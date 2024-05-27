/**********************
* BUILT IN COMPONENTS 
***********************/
import React, {useState, useEffect} from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
//import { GoogleSignin } from '@react-native-google-signin/google-signin';    
/**********************
* SCREENS 
***********************/
import LoginScreen from "./LoginScreen";
import SplashScreen from "./SplashScreen";
//import PreregisterScreen from "./PreregisterScreen";
/**********************
* CONTEXTS 
***********************/
import { RootStackContext } from "../../Contexts/v1/RootStackContext";

/**
 * The Root of the screens for unregistered users.
 * @version 1.0.0
 * @subpackage Screen 
 * @copyright Marse Jollof
 * @author [Moses carayol](https://github.com/DihibruSlaiv/MarseJollof)
 */

const Rootstack = createNativeStackNavigator();

const RootStackScreen = () => {

  const [data, setData] = useState({
    register: {
        picture: null,
        mobileCode: "+221",
    },
    imageDataError: "",
    imageValidationPass: false,
    validationPass: true,
    mobileError: "",
    mobileValidationPass: false,
    mobile: null,
    mobileDisplay: null,
    secureTextEntry: true,
    mainError: ""
  });  

  /*const signOut = async () => {
      try {
      await GoogleSignin.signOut(); 
      } catch (error) {
      console.error(error);
      }
  };*/

  useEffect(() => {      
    //signOut();
  }, []); 

/*
        <Rootstack.Screen name="LoginScreen" component={LoginScreen} />
        <Rootstack.Screen name="PreregisterScreen" component={PreregisterScreen} />*/
  return (
    <RootStackContext.Provider value={{ data, setData }}>
      <Rootstack.Navigator screenOptions={{ headerShown: false }}>
        <Rootstack.Screen name="SplashScreen" component={SplashScreen} />
        <Rootstack.Screen name="LoginScreen" component={LoginScreen} />
      </Rootstack.Navigator>
    </RootStackContext.Provider>
  );
};

export default RootStackScreen;