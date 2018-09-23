import React, { Component } from "react";
import t from "tcomb-form-native";
import { View, Text } from "react-native";
import { Style } from "./style";
import Button from "apsl-react-native-button";

var Form = t.form.Form;
export default class signinName extends React.Component {
  constructor(props) {
    super(props);
    this.nextStep = this.nextStep.bind(this);
    this.onChange = this.onChange.bind(this);
    // optional rendering options (see documentation)

    this.state = {
      userDataName: t.struct({
        userName: t.String, // a required string
        firstName: t.String, // a required string
        lastName: t.String // an optional string
      }),
      options: {
        label: "Creating User Profile \n",
        fields: {
          userName: {
            label: "User Name",
            placeholder: "@yourUserName"
          },
          firstName: {
            label: "First Name",
            placeholder: "Your Given Name"
          },
          lastName: {
            label: "Last Name",
            placeholder: "Your Family Name"
          }
        }
      }
    };
  }

  onChange(value) {
    // recalculate the type only if strictly necessary
  }

  nextStep() {
    // call nextStep() to get the values of the form
    var value = this.refs.form.getValue();
    if (value) {
      // if validation fails, value will be null
      console.log(value); // value here is an instance of Person
    }
  }
  render() {
    console.log(this.props);
    return (
      <View style={Style.container}>
        <View style={Style.topContainer}>
          <Form
            ref="form"
            type={this.state.userDataName}
            options={this.state.options}
            onChange={this.onChange}
          />
        </View>
        <View style={Style.bottomBox}>
          <Button style={Style.ButtonPrime} onPress={this.nextStep}>
            <Text style={Style.ButtonText}>Next Step</Text>
          </Button>
        </View>
      </View>
    );
  }
}
