import { StyleSheet, Dimensions } from "react-native";
import { colours } from "../../Helpers/v1/Colours";

const { height, width } = Dimensions.get("screen");

const button_height = height * 0.07;
const paddingVertical = (button_height - 26) / 2;
const button_width = width * 0.88;
const MESSAGE_SPACE = height * 0.08;

const deliveryInputHeight = height * 0.055;

const bottom_sheet_padding = width * 0.05;
const bottom_sheet_padding_horizontal = height * 0.01;

const number_input_width = width * 0.3;
const number_input_height = height * 0.05;
const avatar_image_height = height * 0.06;


const generalStyles = StyleSheet.create({
    action: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    actionSpace: {
        flexDirection: "row",
        justifyContent: 'space-evenly',
    },
    deleteRequest: {
        flexDirection: 'row',
        justifyContent: "flex-start",
        marginVertical: bottom_sheet_padding_horizontal * 1.5,
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 10
    },
    deleteRequestText: {
        color: colours.white,
        fontSize: 14,
        fontWeight: 'bold'
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    pickerFont: {
        fontSize: 14
    },
    itemTypePicker: {
        backgroundColor: colours.white,
        color: colours.gold,
        height: deliveryInputHeight,
        fontSize: 12,
        fontWeight: 'bold'
    },
    itemTypeView: {
        borderColor: colours.gold,
        width: width * 0.42
    },
    mainBackButton: {
        alignItems: "flex-start",
        marginTop: 30,
        marginLeft: 20,
        backgroundColor: colours.darkBlue
    },
    cancel: {
        marginTop: 10, 
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        top: height * .035
    },
    backButtonText: {
        marginLeft: 5,
        color: colours.white,
        fontWeight: 'bold'
    },
    headerBackButtonText: {
        marginLeft: 5,
        color: colours.gold,
        fontWeight: 'bold'
    },
    langAndContView: {
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'center'
    },
    langAndContText: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    languagePicker: {
        backgroundColor: colours.white,
        color: colours.darkBlue,
        height: height * 0.06,
        fontSize: 12
    },
    bottomTabHeader: {    
        shadowColor: "#333333",
        shadowOffset: { width: -1, height: -3 },
        shadowRadius: 2,
        shadowOpacity: 0.4,
        paddingTop: bottom_sheet_padding,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    panelHeader: {
        alignItems: "center",
    },
    panelHandle: {
        width: bottom_sheet_padding * 3,
        height: bottom_sheet_padding_horizontal,
        borderRadius: 4,
        backgroundColor: colours.darkGrey,
    },
    buttonTextGold: {
        color: colours.gold,
        fontWeight: "bold",
    },
    buttonTextWhite: {
        color: colours.white,
        fontWeight: "bold",
    },
    input3: {
        height: height * .07,        
        backgroundColor: colours.white,
        color: colours.gold,
        borderRadius: 10
    },
    singleInputRightSide1: {
        height: height * 0.07,
        backgroundColor: colours.darkBlue,
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
    },
    rightIcon1: {
        paddingHorizontal: 10,
        paddingVertical: button_height/3,
    },
    picker: {
        backgroundColor: colours.white,
        color: colours.darkBlue
    },
    panelTitle: {
        fontSize: 16,
        color: colours.gold,
        fontWeight: 'bold'
    },
    panelSubtitle: {
        fontSize: 14,
        color: colours.gold,
        marginBottom: bottom_sheet_padding_horizontal * 2,
    },
    deleteSubtitle: {
        fontSize: 14,
        color: colours.red,
        fontWeight: 'bold'
    },
    panel: {
        padding: bottom_sheet_padding,
        backgroundColor: colours.whiteish,
        paddingTop: bottom_sheet_padding ,
    },
    panelWhite: {
        padding: bottom_sheet_padding,
        backgroundColor: colours.white,
        paddingTop: bottom_sheet_padding/ 2 ,
    },
    panelButton: {
        padding: bottom_sheet_padding_horizontal * 1.5,
        borderRadius: 10,
        backgroundColor: colours.darkBlue,
        alignItems: "center",
        marginVertical: bottom_sheet_padding_horizontal * 1.2,
    },
    panelButtonTitle: {
        fontSize: 11,
        fontWeight: "bold",
        color: "white",
    },
    centeredColumn: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    error: {
        color: colours.red,
        marginBottom: 2,
        fontWeight: 'bold'
    },
    mainError: {
        color: colours.red,
        marginBottom: 10,
        fontWeight: 'bold',
        marginTop: 10
    },
    button_dimensions: {
        height: button_height,
        width: button_width,
    },
    buttonText: {
        color: colours.darkerWhite,
        fontWeight: "bold",
    },
    short_button_dimensions: {
        height: button_height,
        width: button_width /2.1,
    },
    cont1: {
        flex: 1,
        backgroundColor: colours.darkerWhite
    },
    buttonBottom: {
        position: 'absolute',
        bottom: height * .01,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
    },
    backHeaderButton: {
        alignItems: "flex-start",
        marginVertical: height * .002,
        marginLeft: 10
    },
    backButtonNoHeader: {
        alignItems: "flex-start",
        marginTop: height * .04,
        marginLeft: 15
    },
    areaView: {
        marginVertical: 10,
        flex: 1
    },    
    extendView: {
        width: '95%',
        left: '2.5%',
        marginTop: -17
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
    fontSize: 14,
  },
});

export {
  generalStyles, textRegisterStyles, headerStyles, number_input_width, number_input_height,
  avatar_image_height, button_width, height, button_height, width, MESSAGE_SPACE, deliveryInputHeight
};