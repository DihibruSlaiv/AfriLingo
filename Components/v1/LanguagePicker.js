/**********************
* BUILT IN COMPONENTS 
***********************/
import React, { useContext } from "react";
import { View } from "react-native";
import { Picker } from "@react-native-picker/picker";
import i18n from 'i18n-js';
/**********************
* CONTEXTS 
***********************/
import { LanguageContext } from "../../Contexts/v1/LanguageContext";
/**********************
* RESOURCES 
***********************/
import { generalStyles, width } from "../../Styles/v1/GeneralStyles";
import { colours } from "../../Helpers/v1/Colours";
import { intFlag, intCtyLangs } from "../../Helpers/v1/Langs";
import { styles } from "../../Styles/v1/SplashStyles";


/**
 * The picker component to select the written language
 * @version 1.0.0
 * @subpackage Component
 * @copyright Marse Jollof
 * @author [Moses carayol](https://github.com/DihibruSlaiv/MarseJollof)
 */

const LanguagePicker = () => {

  const { language, setLanguage } = useContext(LanguageContext);

  const langs = Object.keys(intCtyLangs);

  const index = langs.indexOf(i18n.locale);

  langs.splice(index, 1);   
     
  /* The rendering of the view */    
  return (    
    <View style={{ ...styles.pickerBorderRadius, width: width * 0.45}}>
        <Picker
          selectedValue={language.writtenLanguage}
          style={generalStyles.languagePicker}          
          onValueChange={(itemValue) => {
            setLanguage({
                ...language,
                writtenLanguage: itemValue
            })
          }}
        >
          <Picker.Item style={{ fontSize: 14 }} color={colours.purple} label={intFlag[i18n.locale] + i18n.t(intCtyLangs[i18n.locale])} key={i18n.locale} value={i18n.locale} />
          <Picker.Item style={{ fontSize: 14 }} color={colours.purple} label={intFlag[langs[0]] + i18n.t(intCtyLangs[langs[0]])} key={langs[0]} value={langs[0]} />
          <Picker.Item style={{ fontSize: 14 }} color={colours.purple} label={intFlag[langs[1]] + i18n.t(intCtyLangs[langs[1]])} key={langs[1]} value={langs[1]} />
        </Picker>        
      </View>
  );
};

export default LanguagePicker ;



