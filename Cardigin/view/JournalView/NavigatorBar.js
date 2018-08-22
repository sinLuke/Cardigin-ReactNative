import React, { Component } from "react";
import { Text, View, Platform } from "react-native";
import {
  Container,
  Header,
  Body,
  Title,
  Left,
  Button,
  Icon,
  Right
} from "native-base";

export default class JournalViewBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { tabBarLabel: "Journal" };
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
