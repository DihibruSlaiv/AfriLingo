import React from "react";
import { StyleSheet, View, Image } from "react-native";
import { height } from "../../Styles/v1/GeneralStyles";

const HeaderLogo = () => {
  return (
    <View style={styles.headerLogo}>
      <Image
       style={{height: height * .15, width: height * .15}} source={require("../../assets/pictures/afrilingo.png")} />
    </View>
  );
};

const styles = StyleSheet.create({
  headerLogo: {
    //marginLeft: 10,
    bottom: height * .019
  },
});

export default HeaderLogo;