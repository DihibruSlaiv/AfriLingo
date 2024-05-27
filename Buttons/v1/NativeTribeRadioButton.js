/**********************
* BUILT IN COMPONENTS 
***********************/
import React from "react";
import { Text, View } from "react-native";
import { Switch, TouchableRipple } from "react-native-paper";
/**********************
* RESOURCES 
***********************/
import { colours } from "../../Helpers/v1/Colours";
import { playAudio } from "../../Resources/v1/PlaySound";
import { splashScreenAudio } from "../../Resources/v1/AudioData";
import { removeTribe, tribe_array } from "../../Helpers/v1/Functions";
import { styles, height } from "../../Styles/v1/SplashStyles";


/**
 * The Radio buttons for user to select native language for audio settings
 * @version 1.0.0
 * @subpackage Component
 * @copyright Marse Jollof
 * @author [Moses carayol](https://github.com/DihibruSlaiv/MarseJollof)
 */



const NativeTribeRadioButton = ({
  tribeData,
  tribes,
  setTribes,
  language,
  setLanguage,
}) => {
  
  const toggle = (lang) => {

    /* The voice note of  language change */
    playAudio(splashScreenAudio[lang.name], 50);
        
    /* return tribes not selected */
    let tribes_to_set_false = removeTribe(tribeData.population_rank, tribe_array);
      
    setTribes({
      ...tribes,
      [tribes_to_set_false[0]]: false,
      [tribes_to_set_false[1]]: false,
      [tribes_to_set_false[2]]: false,
      [tribes_to_set_false[3]]: false,
      ['tribe' + tribeData.population_rank]: true,
    });

    /* Set the language of tribe selected */
    setLanguage({
      ...language,
      languageToLearn: lang.spelling,
      languageToLearnAudio: lang.name,
    });
  
  };

  return (
    <TouchableRipple
      onPress={() => {
        toggle(tribeData);
      }}
      rippleColor={colours.purple}
    >
      <View style={tribes['tribe' + tribeData.population_rank] ? styles.active : styles.preference}>
        <Text
          style={
            tribes['tribe' + tribeData.population_rank]
              ? styles.languageText2Active
              : styles.languageText2
          }
        >
          {tribeData.spelling}
        </Text>
        <View pointerEvents="none" style={{ bottom: height * 0.015 }}>
          <Switch
            trackColor={{ true: colours.purple, false: colours.greyish }}
            color={colours.purple}
            value={tribes['tribe' + tribeData.population_rank]}
          />
        </View>
      </View>
    </TouchableRipple>
  );
};


export default NativeTribeRadioButton 