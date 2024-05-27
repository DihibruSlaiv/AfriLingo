/**********************
* BUILT IN COMPONENTS 
***********************/
import React, {useContext } from "react";
import { View, Text} from "react-native";
import { colours } from "../../Helpers/v1/Colours";
import { DataContext } from "../../Contexts/v1/DataContext";
import {Context as AuthContext } from "../../Contexts/v1/AuthContext";

const HomeScreen = ({ navigation }) => {

  
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>

      <Text style={{ marginTop: 50, color: colours.darkBlue }}>{'Location: '}</Text>
      

    </View>
  );
};

export { HomeScreen };