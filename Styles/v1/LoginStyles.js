import { StyleSheet, Dimensions } from "react-native";
import { colours } from "../../Helpers/v1/Colours";

const { height, width } = Dimensions.get("screen");
const button_height = height * 0.07;
const button_width = width * 0.88;
const paddingVertical = (button_height - 26) / 2;
const space_between_height = height * 0.05;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colours.darkBlue,
  },
  error: {
    color: colours.red,
    marginBottom: 2,
    fontWeight: 'bold'
  },
  footer: {
    flex: 9,
    backgroundColor: colours.darkerWhite,
    paddingBottom: 20,
    paddingHorizontal: 20,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30
    },
  leftSide: {
    flex: 0.22,
    alignItems: 'center',
    height: button_height,
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
    backgroundColor: colours.darkBlue
  },
  textInput: {
    flex: 1,
    height: button_height,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  action2: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingBottom: 17
  },
  Icon: {
    paddingHorizontal: width * .038,
    paddingVertical: paddingVertical,
    justifyContent: "center",
    alignItems: "center",
  },
  input2: {
    flex: 1,
    height: button_height,
    backgroundColor: colours.white,
    color: colours.gold
  },
  rightIcon: {
    paddingHorizontal: 10,
    paddingVertical: button_height/3,
  },
  singleInputRightSide: {
    height: button_height,
    backgroundColor: colours.white,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
  }, 
  bottomMargin: {
    marginBottom: 15
  },  
  button_dimensions: {
    height: button_height,
    width: button_width,
  },
  registerNavButton: {    
    marginTop: height * .12,
    marginBottom: 10
  },
  buttonTextGold: {
    color: colours.gold,
    fontWeight: "bold",
  },
  image: {
    height: 30,
    width: 30
  },
  buttonRow: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginLeft: width * .15
  }
});

const headerStyles = StyleSheet.create({
  header: {
    flex: 1,
    justifyContent: "center",
  },
  buttonText: {
    color: colours.darkerWhite,
    fontWeight: "bold",
  },
});

const textRegisterStyles = StyleSheet.create({
  textRegister: {
    alignItems: 'center',
    marginBottom: 15,
  },
  textRegisterText: {
    color: colours.gold,
    fontWeight: "bold",
    fontSize: 16,
  },
});

export { styles, headerStyles, textRegisterStyles };