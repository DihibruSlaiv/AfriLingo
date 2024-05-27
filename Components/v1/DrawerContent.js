/**********************
* BUILT IN COMPONENTS 
***********************/
import React, { useContext, useEffect } from "react";
import { View, Text, Image, TouchableOpacity, Linking } from "react-native";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
//import StarRating from 'react-native-star-rating';
import { MaterialIcons, FontAwesome5, Ionicons, SimpleLineIcons, MaterialCommunityIcons} from "@expo/vector-icons";
import { Avatar, Caption, Paragraph, Drawer } from "react-native-paper";
import i18n from 'i18n-js';
/**********************
* CONTEXTS 
***********************/
import { Context as AuthContext } from "../../Contexts/v1/AuthContext";
import { DataContext } from "../../Contexts/v1/DataContext";
/**********************
* RESOURCES 
***********************/
import { mainPageStyles as styles, width } from "../../Styles/v1/MainPageStyles";
//import { getPassword } from "../../Helpers/v1/UserInfo";
import { colours } from "../../Helpers/v1/Colours";
import { AFRILINGO_MOBILE, AFRILINGO_MOBILE_VIEW } from "@env"; //OBJECT_STORAGE
import { axiosInstance } from "../../Config/v1/Axios";

const DrawerContent = (props) => {

  /*const { state, signout } = useContext(AuthContext);
  const { staticData, setStaticData } = useContext(DataContext);
   
  let user_pic = `${OBJECT_STORAGE}User/${state.userData.picture}`
  let text = (state.userData.rated_by_users == 1) ? ' user' : ' users';

  
  const getBookings = async (navigation) => {  
      
    try { 
        await axiosInstance.get('/getCurrentBookings')
          .then((res) => { 
            navigation.navigate("Bookings", {
                data: res.data
            });
        });
    } catch (error) {
        console.log('it didnt work')
    } 
  }

  const getDriverBookings = async (navigation) => { 
        
    try { 
        await axiosInstance.get('/getDriverBookings' )
          .then((res) => {
            navigation.navigate("Bookings", {
                data: res.data
            });
        });
    } catch (error) {
        console.log('it didnt work')
    } 
  }

  const getNewBookings = async (navigation) => { 
        
    try { 
        await axiosInstance.get('/getNewBookings' )
          .then((res) => {
            navigation.navigate("Bookings", {
                data: res.data
            });
        });
    } catch (error) {
        console.log('it didnt work')
    } 
  }*/

  /*<DrawerItem
              activeTintColor={colours.darkBlue}
              inactiveTintColor={colours.gold}
              icon={({ color, size }) => (
                <SimpleLineIcons
                  name="wallet"
                  size={24}
                  color={colours.gold}
                />
              )}
              label={i18n.t('Wallets')}
              labelStyle={styles.label}
              onPress={() => {
                //props.navigation.navigate("SettingsScreen");
              }}
            >              
            </DrawerItem>*/
    
    /*<Avatar.Image
                  size={width * .2}
                  source={{ uri: user_pic }}
                />
                <View style={styles.titleTop}>
                  <Caption style={styles.title}>
                    {state.userData.firstname + " " + state.userData.lastname}
                  </Caption>

                  <Caption style={styles.caption}>
                    {"+221 " + state.userData.mobile}
                  </Caption>
                </View>*/
    
    
    /*<View style={styles.userInfoSection}>
              <View style={styles.imageTitleRow}>
                
                              
              </View>

              <View style={styles.action}>
                <View style={styles.section}>
                  <Paragraph
                    style={(styles.sectionData)}
                  >
                    {i18n.t('Rating: ')}
                  </Paragraph>
                  <Caption style={(styles.sectionData)}>
                    {state.userData.star_rating_avg != 0 ? 
                      (
                       <StarRating
                          disabled={false}
                          maxStars={5}
                          starSize={14}
                          rating={Number(state.userData.star_rating_avg)}
                          fullStarColor={colours.gold}
                       />)
                    : ( i18n.t('None'))}
                  </Caption>
                </View>
                <View style={styles.section}>
                  <Paragraph
                    style={(styles.sectionData)}
                  >
                    {i18n.t('Rated By: ')}
                  </Paragraph>
                  <Caption style={(styles.sectionData)}>
                    {state.userData.rated_by_users + i18n.t(text)}
                  </Caption>
                </View>
              </View>                
            </View>*/

    
  return (
    <View style={styles.drawerContent}>
      <DrawerContentScrollView >
        <View style={{flex: 1}}>
          <View style={styles.viewUserInfoSection}>
            
                      

          </View>

          <Drawer.Section style={styles.drawerSection}>
            <DrawerItem
              activeTintColor={colours.darkBlue}
              inactiveTintColor={colours.gold}
              icon={({ color, size }) => (
                <FontAwesome5 name="user-edit" size={20} color={colours.gold} />
              )}
              label={i18n.t('Edit Profile')}
              labelStyle={styles.label}
              onPress={() => {
                //props.navigation.navigate("EditProfile", { img: user_pic, mobile: state.userData.mobile });
              }}
            >              
            </DrawerItem>

            <DrawerItem
              activeTintColor={colours.darkBlue}
              inactiveTintColor={colours.gold}
              icon={({ color, size }) => (
                <MaterialCommunityIcons
                  name="account-settings"
                  size={26}
                  color={colours.gold}
                />
              )}
              label={i18n.t('Account')}
              labelStyle={styles.label}
              onPress={() => {
              }}
            >              
            </DrawerItem>
            <DrawerItem
            activeTintColor={colours.darkBlue}
            inactiveTintColor={colours.gold}
            icon={({ color, size }) => (
                <MaterialIcons
                name="feedback"
                size={24}
                color={colours.gold}
                />
            )}
            label={i18n.t('Feedback')}
            labelStyle={styles.label}
            onPress={() => {
            }}
            >
            </DrawerItem>
                        
                        
            <DrawerItem
              activeTintColor={colours.darkBlue}
              inactiveTintColor={colours.gold}
              icon={({ color, size }) => (
                <MaterialIcons
                  name="settings"
                  size={24}
                  color={colours.gold}
                />
              )}
              label={i18n.t('Language Settings')}
              labelStyle={styles.label}
              onPress={() => {
                //props.navigation.navigate("Settings");
              }}
            >              
            </DrawerItem>
          
            <View style={styles.custView}>
              <TouchableOpacity
                    onPress={() => {{Linking.openURL(`tel:${AFRILINGO_MOBILE}`)}
              }}>
                  <View style={styles.mobileView}>
                    <FontAwesome5 name="phone" size={20} color={colours.gold} />              
                    <View style={styles.mobileColumn}>
                      <Text style={styles.mobileLabel}>{i18n.t("Customer Service")}</Text>
                      <Text style={styles.mobileText}>{AFRILINGO_MOBILE_VIEW}</Text>            
                    </View>
                  </View>  
              </TouchableOpacity>
            </View>  
          </Drawer.Section>
        </View>
        
      </DrawerContentScrollView>
      
              
        <View style={styles.imgView}>
          <Image
            source={require("../../assets/pictures/afrilingo.png")}
            style={styles.carLogo}
            resizeMode="stretch"
          /> 
      </View>
            
          <DrawerItem
            activeTintColor={colours.darkBlue}
            inactiveTintColor={colours.gold}
            activeBackgroundColor={colours.gold}
            inactiveBackgroundColor={colours.darkerWhite}
            icon={({ color, size }) => (
              <FontAwesome5 name="sign-out-alt" size={24} color={colours.gold} />
            )}
            label={i18n.t('Sign Out')}
            labelStyle={styles.signOut}
            onPress={() => {
              //signout();
            }}
          >        
          </DrawerItem>
    </View>
  );
};

export { DrawerContent };