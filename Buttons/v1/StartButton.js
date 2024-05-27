/**********************
* BUILT IN COMPONENTS 
***********************/
import React from "react";
import { Text } from "react-native";
import AwesomeButton from "react-native-really-awesome-button";
import i18n from 'i18n-js';
/**********************
* RESOURCES 
***********************/
import { colours } from "../../Helpers/v1/Colours";
import { width, button_height } from "../../Styles/v1/GeneralStyles";

/**
 * The Button that navigates from Login.js to Preregistration screen  
 * @version 1.0.0
 * @subpackage Component
 * @copyright Marse Jollof
 * @author [Moses carayol](https://github.com/DihibruSlaiv/MarseJollof)
 */

const StartButton = ({ navigation }) => {
  
  return (
  <AwesomeButton
      width={width * .35}
      height={button_height}
      borderRadius={20}
      backgroundColor={colours.white}
      backgroundShadow={colours.gold}
      backgroundDarker={colours.darkBlue}
      onPress={() => {
        navigation.navigate("LoginScreen")
      }}
      textColor={colours.darkBlue}
  >
    <Text style={{ fontWeight: 'bold', color: colours.darkBlue}}>{i18n.t('Get Started')}</Text>
  </AwesomeButton>
  );
};


export default StartButton;