import React, { Component } from "react";
import t from "tcomb-form-native";
import { View, Text, ScrollView } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Style } from "./style";
import Button from "apsl-react-native-button";

import { StackActions } from "react-navigation";

var Form = t.form.Form;
export default class signinEmail extends React.Component {
  getUserDataEmail(value) {
    if (value.university) {
      return t.struct({
        university: t.enums(this.UniversityList),
        email: t.String
      });
    } else {
      return t.struct({
        university: t.enums(this.UniversityList)
      });
    }
  }
  getOptions(value) {
    var email = value.email;

    if (this.UniversityEmail[value.university]) {
      if (value.email) {
        return {
          label: "Creating User Profile \n",
          fields: {
            university: {
              label: "",
              nullOption: { value: "", text: "Choose your University" },
              isCollapsed: false
            },
            email: {
              label: "University Email",
              placeholder: `${this.UniversityEmail[value.university]}`,
              help: `${value.email}${this.UniversityEmail[value.university]}`
            }
          }
        };
      } else {
        return {
          label: "Creating User Profile \n",
          fields: {
            university: {
              label: "",
              nullOption: { value: "", text: "Choose your University" },
              isCollapsed: false
            },
            email: {
              label: "University Email",
              placeholder: `${this.UniversityEmail[value.university]}`
            }
          }
        };
      }
    } else {
      return {
        label: "Creating User Profile \n",
        fields: {
          university: {
            label: "",
            nullOption: { value: "", text: "Choose your University" },
            isCollapsed: false
          },
          email: {
            label: "University Email",
            placeholder: `Unknown Email Suffix`
          }
        }
      };
    }
  }
  getInitialState(props) {
    const value = {};
    return {
      value,
      userDataEmail: this.getUserDataEmail(value),
      options: this.getOptions(value)
    };
  }
  constructor(props) {
    super(props);
    console.log(props);
    this.nextStep = this.nextStep.bind(this);
    this.onChange = this.onChange.bind(this);
    // optional rendering options (see documentation)

    this.UniversityList = {
      UofT: "University of Toronto",
      other: "Some Other University"
    };

    this.UniversityEmail = {
      UofT: "@mail.utoronto.ca",
      other: "@some.other.ca"
    };

    this.state = this.getInitialState(props);
  }

  onChange(value) {
    // recalculate the type only if strictly necessary
    const userDataEmail =
      value.university !== this.state.value.university
        ? this.getUserDataEmail(value)
        : this.state.userDataEmail;
    const options = this.getOptions(value);
    this.setState({ value, userDataEmail, options });
  }

  nextStep() {
    // call nextStep() to get the values of the form
    var value = this.refs.form.getValue();
    if (value) {
      // if validation fails, value will be null
      console.log(value); // value here is an instance of Person
    }

    this.props.navigation.dispatch(
      StackActions.push({
        routeName: "Name",
        params: {
          email: this.props.navigation.state.params.email,
          schoolEmail: `${this.state.value.email}${
            this.UniversityEmail[value.university]
          }`,
          university: this.state.value.university
        }
      })
    );
  }
  render() {
    return (
      <View style={Style.container}>
        <KeyboardAwareScrollView extraScrollHeight={36}>
          <View style={Style.topContainer}>
            <Form
              ref="form"
              type={this.state.userDataEmail}
              options={this.state.options}
              value={this.state.value}
              onChange={this.onChange}
            />
          </View>
        </KeyboardAwareScrollView>
        <View style={Style.bottomBox}>
          <Button style={Style.ButtonPrime} onPress={this.nextStep}>
            <Text style={Style.ButtonText}>Next Step</Text>
          </Button>
        </View>
      </View>
    );
  }
}
