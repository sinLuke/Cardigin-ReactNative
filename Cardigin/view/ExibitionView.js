import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Container } from 'native-base';
export default class ExibitionView extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'Exibition'
  };
  render() {
    return <Container />;
  }
}
