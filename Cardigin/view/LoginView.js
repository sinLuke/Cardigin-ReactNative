import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, TextInput } from "react-native";
import Button from "apsl-react-native-button";
import { CDGColor } from "../common/constants/CDGColor";

const Style = StyleSheet.create(
  (styles = {
    container: {
      flexDirection: "column",
      justifyContent: "space-between"
    },
    topContainer: {
      padding: 24,
      paddingBottom: 30,
      justifyContent: "space-around",
      alignItems: "center",
      backgroundColor: "red"
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
      padding: 24,
      paddingBottom: 30,
      justifyContent: "space-around",
      alignItems: "center",
      backgroundColor: "blue"
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

export default class loginViewComponent extends Component {
  initialState() {
    return {
      email: "",
      password: ""
    };
  }
  state = this.initialState();
  render() {
    return (
      <View style={Style.container}>
        <View style={Style.topContainer}>
          <View style={Style.titleBox}>
            <Text style={Style.secondaryTitle}>Welcome to</Text>
            <Text style={Style.largeTitle}>Cardigin</Text>
          </View>
          <View style={Style.loginBox}>
            <Text style={Style.grayLabel}>
              Inout your email to login our app
            </Text>
            <View style={Style.gap} />
            <View style={Style.gap} />
            <TextInput
              style={Style.textInput}
              placeholder="example@mail.utoronto.ca"
              onChangeText={text => this.setState({ email: text })}
            />
            <View style={Style.gap} />
            <TextInput
              style={Style.textInput}
              placeholder="password"
              onChangeText={text => this.setState({ email: text })}
            />
          </View>
        </View>
        <View style={Style.bottomBox}>
          <Text style={Style.smallLabel}>
            If you dont have an account, you can input your school email and
            create one. We currently only accept @mail.utoronto.ca emails.
          </Text>
          <View style={Style.gap} />
          <View style={Style.gap} />
          <View style={Style.gap} />
          <View style={Style.gap} />
          <Button style={Style.ButtonPrime}>
            <Text style={Style.ButtonText}>Create Your Account</Text>
          </Button>
        </View>
      </View>
    );
  }
}
