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
import { DataContext } from "../../Contexts/v1/DataContext";
/**********************
* RESOURCES 
***********************/
import { generalStyles, width } from "../../Styles/v1/GeneralStyles";
import { colours } from "../../Helpers/v1/Colours";
import { flags, countries } from "../../Helpers/v1/Langs";
import { styles } from "../../Styles/v1/SplashStyles";


/**
 * The picker component to select the written language
 * @version 1.0.0
 * @subpackage Component
 * @copyright Marse Jollof
 * @author [Moses carayol](https://github.com/DihibruSlaiv/MarseJollof)
 */

const CountryPicker = () => {

  
  const { language, setLanguage } = useContext(LanguageContext);
  const { staticData, setStaticData } = useContext(DataContext);
    
  /* The rendering of the view */    
  return (    
      <View style={{ ...styles.pickerBorderRadius, width: width * 0.5}}>
        <Picker
          selectedValue={staticData.tribesCountry}
          style={generalStyles.languagePicker}
        
          onValueChange={(itemValue) => {

            countries.map((country) => {
              if (country.name == itemValue) {
                setStaticData({
                  ...staticData,
                  tribesCountry: itemValue,
                  tribes: country.tribes,
                  nativeTribes: country.nativeTribes,
                });

                setLanguage({
                  ...language,
                  audioLanguage: country.tribes[0].spelling,
                  audioSpecificLanguage: country.tribes[0].name
                });
              }
            })            
          }}
      >
              {countries.map((country) => {
            return (<Picker.Item style={{ fontSize: 14 }} color={colours.purple} label={flags[country.id] + i18n.t(country.name)} key={country.id} value={country.name} />)
          })}
        </Picker>        
      </View>
  );
};

/*function countryPropsAreEqual(prevCountry, nextCountry) {
  return prevCountry.country.name == nextCountry.country.name
}

export const MemoizedCountryPicker = React.memo(CountryPicker, countryPropsAreEqual);*/

export default CountryPicker

