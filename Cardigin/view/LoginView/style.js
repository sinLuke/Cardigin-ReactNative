import { StyleSheet } from "react-native";
import { CDGColor } from "../../common/constants/CDGColor";

export const Style = StyleSheet.create(
  (styles = {
    container: {
      flex: 1,
      backgroundColor: "white",
      flexDirection: "column",
      justifyContent: "space-between"
    },
    topContainer: {
      padding: 24,
      paddingBottom: 30,
      justifyContent: "space-around",
      alignItems: "center"
    },
    gap: {
      height: 8
    },
    titleBox: {
      paddingTop: 108,
      justifyContent: "flex-start",
      alignItems: "center"
    },
    loginBox: {
      paddingTop: 48,

      justifyContent: "flex-start",
      alignItems: "center"
    },
    largeTitle: {
      color: CDGColor.Prime,
      fontSize: 48,
      fontWeight: "900"
    },
    secondaryTitle: {
      color: CDGColor.LightGray,
      fontSize: 20,
      fontWeight: "900"
    },
    textInput: {
      backgroundColor: CDGColor.LightBackground,
      height: 30,
      width: 255,
      borderRadius: 4,
      textAlign: "center",
      fontSize: 14
    },
    grayLabel: {
      color: CDGColor.LightGray,
      fontFamily: "Product Sans",
      fontWeight: "bold",
      fontSize: 17
    },
    smallLabel: {
      color: CDGColor.LightGray,
      textAlign: "center",
      fontFamily: "Product Sans",
      fontWeight: "bold",
      fontSize: 12
    },
    bottomBox: {
      position: "absolute",
      left: 12,
      right: 12,
      padding: 24,
      bottom: 0,
      justifyContent: "space-around",
      alignItems: "center"
    },
    ButtonPrime: {
      backgroundColor: CDGColor.Prime,
      borderWidth: 0
    },
    ButtonText: {
      fontWeight: "900",
      color: "#ffffff"
    }
  })
);
