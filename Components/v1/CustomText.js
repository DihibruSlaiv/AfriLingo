import React from "react";
import { View, Text } from "react-native";

/**
 * A simple customizable text component
 * @version 1.0.0
 * @author [Moses carayol](https://github.com/DihibruSlaiv/MarseJollof)
 */

const CustomText = ({ viewStyle, textStyle, text }) => {
  /**
   * The rendering of the view
   */
  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{text}</Text>
    </View>
  );
};

export default CustomText;