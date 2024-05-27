/**********************
* BUILT IN COMPONENTS 
***********************/
import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
/**********************
* RESOURCES 
***********************/
import { colours } from "../../Helpers/v1/Colours";
import { generalStyles } from "../../Styles/v1/GeneralStyles";



/**
 * The go back to previous screen button
 * @version 1.0.0
 * @subpackage Component
 * @copyright Marse Jollof
 * @author [Moses carayol](https://github.com/DihibruSlaiv/MarseJollof)
 */

const MainBackButton = ({
  navigation,
  text,
}) => {

  //const { device, setDevice } = useContext(DeviceContext);

  /*******************************************************
   * If the person has registered and is reday to log in, 
   * then back button must display "Start Again* 
   ******************************************************/
  return (
    <View style={{backgroundColor: colours.darkBlue}}>
      <TouchableOpacity
        style={generalStyles.mainBackButton}
        onPress={() => navigation.goBack()}
      >
        <View style={generalStyles.action}>
          <Ionicons name="md-arrow-back" size={20} color={colours.white} style={{fontWeight: 'bold'}} />
          <Text style={generalStyles.backButtonText}>{text}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};


export default MainBackButton;