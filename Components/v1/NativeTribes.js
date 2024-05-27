/**********************
* BUILT IN COMPONENTS 
***********************/
import React, {useState} from "react";
import { View } from "react-native";
/**********************
* COMPONENTS 
***********************/
import NativeTribeRadioButton from "../../Buttons/v1/NativeTribeRadioButton";
/**********************
* RESOURCES 
***********************/
import { removeTribe, tribe_array } from "../../Helpers/v1/Functions";
import { headerStyles } from "../../Styles/v1/GeneralStyles";


/**
 * The Radio buttons for user to select native language for audio settings
 * @version 1.0.0
 * @subpackage Component
 * @copyright Marse Jollof
 * @author [Moses carayol](https://github.com/DihibruSlaiv/MarseJollof)
 */



const NativeTribes = ({
  nativeTribes,
  language,
  setLanguage
}) => {

  let active_tribe = "";

  if (language.audioLanguage != undefined) {
    nativeTribes.map((tribeData) => {
      if (language.audioLanguage == tribeData.spelling) {
        
        active_tribe = tribeData;
      }
    })
  }

  let tribes_to_set_false = (active_tribe != "") ? removeTribe(active_tribe.population_rank, tribe_array) : 
                            ['tribe2', 'tribe3', 'tribe4', 'tribe5'];

  const act_tribe = (active_tribe != "") ? 'tribe' + active_tribe.population_rank.toString() : 'tribe1';

  const [tribes, setTribes] = useState({
    [act_tribe]: true,
    [tribes_to_set_false[0]]: false,
    [tribes_to_set_false[1]]: false,
    [tribes_to_set_false[2]]: false,
    [tribes_to_set_false[3]]: false
  });
  

  return (
    <View style={headerStyles.topMargin}>
      {
        nativeTribes.map((tribeData) => {
          return (<NativeTribeRadioButton key={tribeData.population_rank} tribeData={tribeData} tribes={tribes}
            setTribes={setTribes} language={language} setLanguage={setLanguage} />)
        })}
    </View>)
}

export default NativeTribes;

