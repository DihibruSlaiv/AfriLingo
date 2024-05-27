/**********************
* BUILT IN COMPONENTS 
***********************/
import React, {useState} from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import i18n from 'i18n-js';
/**********************
* SCREENS 
***********************/
import { CoursesScreen } from "./CoursesScreen";
//import { RouteScreen } from "./RouteScreen";
//import SelectRouteScreen from "./SelectRouteScreen";
/**********************
* COMPONENTS 
***********************/
import MenuBarIcon from "../../Components/v1/MenuBarIcon";
import HeaderLogo from "../../Components/v1/HeaderLogo";
/**********************
* CONTEXTS 
***********************/
import { CoursesStackContext } from "../../Contexts/v1/CoursesStackContext";

/**********************
* RESOURCES 
***********************/
import { colours } from "../../Helpers/v1/Colours";
import { height } from "../../Styles/v1/GeneralStyles";

/**
 * The Stack of the Home tab
 * @version 1.0.0
 * @subpackage Stack Navigator 
 * @copyright Marse Jollof
 * @author [Moses carayol](https://github.com/DihibruSlaiv/MarseJollof)
 */


const CoursesStack = createNativeStackNavigator();
  

const CoursesStackScreen = ({ navigation }) => {

  /*const [date, setDate] = useState(new Date());

  const [tripdata, setTripdata] = useState({
    distance: null,
    duration: null,
    totalPrice: null
  });

  const [originPlace, setOriginPlace] = useState(null);
  const [destinationPlace, setDestinationPlace] = useState(null);

    const [vehicleType, setVehicleType] = useState(null);
    
    <TripsStack.Screen
          headerMode="screen"
          headerTitleAlign="center"
          name="SelectRoute"
          component={SelectRouteScreen}
          options={{
            headerShown: false
          }}
        />
        
        <TripsStack.Screen
          headerMode="screen"
          headerTitleAlign="center"
          name="Route"
          component={RouteScreen}
          options={{
            title: i18n.t('Route'),
            headerRight: () => <MenuBarIcon navigation={navigation} />,
            headerLeft: () => <HeaderLogo/>
          }}
        />*/

  return (
    <CoursesStackContext.Provider value={{}}> 
      <CoursesStack.Navigator
        initialRouteName="Courses"
        screenOptions={{
          headerShown:true,
          headerStyle: {
            backgroundColor: colours.white,
            height: height * .12
          },
          headerTitleAlign: "center",
          headerTintColor: colours.darkBlue,
          headerTitleStyle: {
            fontSize: 16,
          },
        }}
      >
        <CoursesStack.Screen
          headerMode="screen"
          headerTitleAlign="center"
          name="Courses"
          component={CoursesScreen}
          options={{
            title: i18n.t('Courses'),
            headerRight: () => <MenuBarIcon navigation={navigation} />,
            headerLeft: () => <HeaderLogo />
          }}
        />
        
        
      </CoursesStack.Navigator>
     </CoursesStackContext.Provider> 
  )
}

export { CoursesStackScreen };