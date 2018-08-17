import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Container } from 'native-base';
export default class CommunityView extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'Community'
  };
  render() {
    return <Container />;
  }
}
