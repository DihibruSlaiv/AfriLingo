import { StyleSheet, Dimensions } from "react-native";
import { colours } from "../../Helpers/v1/Colours";

const { height, width } = Dimensions.get("screen");
const height_logo = height * 0.32;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colours.white,
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
    marginHorizontal: width * 0.05,
    marginBottom: width * 0.03,
    marginTop: width * 0.06
  }, 
  headerLogo: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: height * .04
  },
  footer: {
    flex: 1.3,
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
    width: "100%",
    top: height * 0.01,
    flexDirection: "row",
    justifyContent: 'flex-end',
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
    fontWeight: "bold",
    marginLeft: 10, 
  }  
});

export { styles, height };