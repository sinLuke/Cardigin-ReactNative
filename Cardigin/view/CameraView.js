import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Container } from 'native-base';
export default class CameraView extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'Camera'
  };
  render() {
    return <Container />;
  }
}
