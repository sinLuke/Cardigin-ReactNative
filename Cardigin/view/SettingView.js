import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Container } from 'native-base';
export default class SettingView extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'Setting'
  };
  render() {
    return <Container />;
  }
}
