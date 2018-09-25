import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, TextInput } from "react-native";
import Button from "apsl-react-native-button";
import { Style } from "./style";
import { CDGColor } from "../../common/constants/CDGColor";

import { StackActions } from "react-navigation";

export default class loginViewComponent extends Component {
  constructor() {
    super();
    this.InputTextField = this.InputTextField.bind(this);
    this.InputEmailLabel = this.InputEmailLabel.bind(this);
    this.MessageText = this.MessageText.bind(this);
    this.LoginButton = this.LoginButton.bind(this);
    this.update = this.update.bind(this);
  }
  initialState() {
    return {
      email: "aaa",
      password: "",

      loginState: 10,
      emailEmpty: false,
      passwordEmpty: false

      // possible states for this page
      // 0 inital
      // 1 emailEnteredWaitValidation
      // 10 emailAlredyInUse
      // 2 emailNotValid
      // 3 emailReadyToRegister
      // 11 passwordEnteredWaitValidation
      // 12 passwordNotValid
    };
  }
  state = this.initialState();

  update(props) {
    if (this.state.loginState >= 10) {
      if (this.state.password === "") {
        this.setState({ passwordEmpty: true, loginState: 10 });
      } else {
        if (props === "password") {
          this.setState({ passwordEmpty: false, loginState: 11 });
        }
      }
    }

    if (this.state.email === "") {
      this.setState({ emailEmpty: true, loginState: 0 });
    } else {
      if (props === "email") {
        this.setState({ emailEmpty: false, loginState: 3 });
      }
    }
    console.log(this.state);

    //this.setState({ loginState: this.state.loginState + 1 });
  }

  InputTextField(props) {
    if (props.password) {
      if (this.state.loginState < 10) {
        return null;
      } else {
        if (this.state.passwordEmpty) {
          return (
            <TextInput
              style={[
                Style.textInput,
                { backgroundColor: "rgba(200, 0, 0, 0.3)" }
              ]}
              placeholder="password"
              onChangeText={text => this.setState({ password: text })}
              onEndEditing={() => {
                this.setState({ loginState: 11 });
                this.update("password");
              }}
              secureTextEntry={true}
            />
          );
        } else {
          return (
            <TextInput
              style={Style.textInput}
              placeholder="password"
              onChangeText={text => this.setState({ password: text })}
              onEndEditing={() => {
                this.update("password");
              }}
              secureTextEntry={true}
            />
          );
        }
      }
    } else {
      if (this.state.emailEmpty) {
        return (
          <TextInput
            style={[
              Style.textInput,
              { backgroundColor: "rgba(200, 0, 0, 0.3)" }
            ]}
            placeholder="example@mail.utoronto.ca"
            value={this.state.email}
            onChangeText={text => this.setState({ email: text })}
            onEndEditing={() => {
              this.update("email");
            }}
          />
        );
      } else {
        return (
          <TextInput
            style={Style.textInput}
            placeholder="example@mail.utoronto.ca"
            value={this.state.email}
            onChangeText={text => this.setState({ email: text })}
            onEndEditing={() => {
              this.update("email");
            }}
          />
        );
      }
    }
  }

  InputEmailLabel() {
    if (this.state.loginState <= 1) {
      return (
        <Text style={Style.grayLabel}>
          Enter your email to login or register
        </Text>
      );
    } else if (this.state.loginState >= 10) {
      return <Text style={Style.grayLabel}>Enter your password to login</Text>;
    } else {
      return <Text style={Style.grayLabel}>Enter your email to register</Text>;
    }
  }

  MessageText() {
    if (this.state.loginState === 3) {
      return (
        <Text style={[Style.smallLabel, { color: CDGColor.Prime }]}>
          This email is ready to register into our app
        </Text>
      );
    } else {
      return null;
    }
  }
  LoginButton() {
    switch (this.state.loginState) {
      case 0:
        return (
          <Text style={Style.smallLabel}>
            If you dont have an account, you can input your school email and
            create one. We currently only accept @mail.utoronto.ca emails.
          </Text>
        );
      case 1:
        return <Text style={Style.smallLabel}>Loading...</Text>;
      case 2:
        return (
          <View>
            <Text style={[Style.smallLabel, { color: "red" }]}>
              This email is not valid.
            </Text>
            <Text style={Style.smallLabel}>
              It is not a valid email address or the university/institution we
              do not yet support
            </Text>
          </View>
        );
      case 3:
        return (
          <Button
            style={[Style.ButtonPrime]}
            onPress={() => {
              console.log(this.props);
              if (this.state.email === "") {
                this.setState({ emailEmpty: true });
              } else {
                this.setState({ emailEmpty: false });
                this.props.screenProps.push({ email: this.state.email });
                this.props.navigation.dispatch(
                  StackActions.push({
                    routeName: "Signin"
                  })
                );
                //Creating Account
              }
            }}
          >
            <Text style={Style.ButtonText}>Create Your Account</Text>
          </Button>
        );
      case 10:
        return (
          <Button
            style={[Style.ButtonPrime]}
            onPress={() => {
              if (this.state.password === "") {
                this.setState({ passwordEmpty: true });
              } else {
                this.setState({ passwordEmpty: false });

                //Login
              }
            }}
          >
            <Text style={Style.ButtonText}>Login</Text>
          </Button>
        );
      case 11:
        return <Text style={Style.smallLabel}>Loging in...</Text>;
      case 12:
        return (
          <Text style={[Style.smallLabel, { color: "red" }]}>
            Wrong password. Please try again
          </Text>
        );
      default:
        return <Text style={Style.smallLabel}>Please Wait...</Text>;
    }
  }

  render() {
    return (
      <View style={Style.container}>
        <View style={Style.topContainer}>
          <View style={Style.titleBox}>
            <Text style={Style.secondaryTitle}>Welcome to</Text>
            <Text style={Style.largeTitle}>Cardigin</Text>
          </View>
          <View style={Style.loginBox}>
            <this.InputEmailLabel />
            <View style={Style.gap} />
            <this.InputTextField password={false} />
            <View style={Style.gap} />
            <this.InputTextField password={true} />
          </View>
        </View>
        <View style={Style.bottomBox}>
          <this.MessageText />
          <View style={Style.gap} />
          <View style={Style.gap} />
          <View style={Style.gap} />
          <View style={Style.gap} />

          <this.LoginButton />
        </View>
      </View>
    );
  }
}
