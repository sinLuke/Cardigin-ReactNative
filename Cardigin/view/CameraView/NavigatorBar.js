import React, { Component } from "react";
import { Text, View, Platform } from "react-native";
import { Container } from "native-base";

export default class CameraViewBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { tabBarLabel: "Camera" };
  }
  render() {
    return (
      <Container>
        <Header>
          <Left>
            {Platform.select({
              android: (
                <Button
                  transparent
                  onPress={() => this.props.navigation.openDrawer()}
                >
                  <Icon name="menu" />
                </Button>
              )
            })}
          </Left>
          <Body>
            <Title>{this.state.tabBarLabel}</Title>
          </Body>
          <Right />
        </Header>
      </Container>
    );
  }
}
