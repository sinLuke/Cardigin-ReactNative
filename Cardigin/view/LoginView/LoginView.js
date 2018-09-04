import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, TextInput } from 'react-native';
import Button from 'apsl-react-native-button';
import { Style } from './style';
import { CDGColor } from '../../common/constants/CDGColor';

export default class loginViewComponent extends Component {
  initialState() {
    return {
      email: '',
      password: ''
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
