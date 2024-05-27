import React from "react";
import { StyleSheet, Dimensions } from "react-native";
import { colours } from "../../Helpers/v1/Colours";

const { height, width } = Dimensions.get("screen");

const mainPageStyles = StyleSheet.create({
  drawerContent: {
    flex: 1,
    borderLeftColor: colours.darkBlue,
    borderLeftWidth: 1
  },
  action: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
  signOut: {
    color: colours.black,
    fontWeight: 'bold'
  },
  mobileLabel: {
    color: colours.black,
    fontSize: 14,
    fontWeight: 'bold'
  },
  carLogo: {
    height: width * .25,
    width: width * .45,
    opacity: .2
  },
  imgView: {
    alignItems: 'center'
  },
  elleLogo: {
    height: width * .3,
    width: width * .5,
    opacity: .2
  },
  divide: {
    borderWidth: .1,
    borderColor: colours.darkGrey
  },
  mobileText: {
    color: colours.gold,
    fontSize: 14,
    fontWeight: 'bold'
  },
  mobileColumn: {
    flex: 1,
    flexDirection: 'column',
    marginLeft: width * .1
  },  
  mobileView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10
  },
  custView: {
    marginHorizontal: width * .05
  },
  label: {
    color: colours.black,
    fontWeight: 'bold'
  },
  goldColor: {
    color: colours.gold,
  },
  sectionData: {
    color: colours.gold,
    fontSize: 12
  },
  white: {
    color: colours.white,
  },
  darkCurelean: {
    color: colours.darkBlue,
  },
  userInfoSection: {
    paddingLeft: 20,
  },
  viewUserInfoSection: {
    backgroundColor: colours.darkerWhite,
    paddingBottom: 10
  },
  title: {
    fontSize: 16,
    color: colours.darkBlue,
    marginTop: 3,
    fontWeight: "bold",
  },
  caption: {
    fontSize: 12,
    lineHeight: 14,
    marginTop: 5,
    color: colours.gold,
    fontWeight: "bold",
  },
  row: {
    marginTop: 20,
    flexDirection: "row",
  },
  section: {
    flexDirection: "row",
    marginTop: 10,
    marginRight: 15,
  },
  paragraph: {
    fontWeight: "bold",
    fontSize: 14,
  },
  drawerSection: {
    marginTop: 15,
  },
  bottomDrawerSection: {
    marginBottom: 15,
    borderTopWidth: 1,
    borderTopColor: colours.lightGrey,
  },
  preference: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  imageTitleRow: {
    flexDirection: "row",
    marginTop: 15,
  },
  titleTop: {
    marginLeft: 20,
  },
});

export { mainPageStyles, width };