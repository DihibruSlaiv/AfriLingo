import { StyleSheet, Dimensions } from "react-native";
import { colours } from "../../Helpers/v1/Colours";

const { height, width } = Dimensions.get("screen");
const height_logo = height * 0.32;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colours.white,
  },
  languageText2: {
    color: "#fff",
    fontSize: 14,
  },
  languageText2Active: {
    color: "#670463",
    fontSize: 14,
  },
  loadingView: {
    marginTop: height * .08,
    alignItems: 'center',
    justifyContent: 'center'
  },
  loadingText: {
    fontSize: 16,
    color: colours.white,
    fontWeight: 'bold',
    marginBottom: 20
  },
  pickerBorderRadius: {
    borderRadius: 10,
    borderWidth: 2,
    borderColor: colours.purple,
    overflow: "hidden",
  },
  header: {
    flex: 1.3,
  },
  topBarView: {
    marginHorizontal: width * 0.02,
    marginBottom: width * 0.03,
    marginTop: width * 0.06
  }, 
  preference: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: height * 0.015,
    height: height * 0.06,
    width: width * .32
  },
  active: {
    backgroundColor: '#E6E7F1',
    width: width / 3,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: height * 0.015,
    borderRadius: 10,
    paddingLeft: 5,
    height: height * 0.06,
    width: width * .32
  },
  headerLogo: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: height * .02
  },
  footer: {
    flex: 1.1,
    backgroundColor: colours.darkBlue,
    paddingBottom: 30,
    paddingTop: 5,
    paddingHorizontal: 20,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },  
  logo: {
    height: height_logo,
    width: height_logo,
    resizeMode: 'contain'
  },
  loading: {
    width: width * .5,
    height: width * .4,
    resizeMode: 'contain'
  },
  login: {
    width: "95%",
    flexDirection: "column",
    justifyContent: 'flex-start',
    alignItems: "center",
  },
  services: {
    flexDirection: 'row',
    marginVertical: 10
  },
  servicesRow: {
    flexDirection: 'row',
    alignItems: 'center',
    width: width * .42
  },
  iconRow: {
    height: 30,
    width: 30,
    backgroundColor: colours.white,
    borderRadius: 15,
    justifyContent: 'center',
    alignContent: 'center'
  },
  title: {
    color: colours.white,
    fontSize: 16,
    fontWeight: "bold"
  }  
});

export { styles, height, width };