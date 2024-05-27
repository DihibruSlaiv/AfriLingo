import React from "react";
import { StyleSheet, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { colours } from "../../Helpers/v1/Colours";

const MenuBarIcon = ({ navigation }) => {
  return (
    <View style={styles.menuBar}>
      <MaterialCommunityIcons
        name="menu"
        size={26}
        color={colours.darkBlue}
        onPress={() => navigation.openDrawer()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  menuBar: {
    marginLeft: 10,
  },
});

export default MenuBarIcon;