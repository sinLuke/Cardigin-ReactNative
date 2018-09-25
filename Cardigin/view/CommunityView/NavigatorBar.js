import React, { Component } from "react";
import { View, Platform } from "react-native";
import {Text, Content} from "native-base";

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
import CommunityView from "./CommunityView";
export default class CommunityViewBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { tabBarLabel: "Community" };
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
        <Content>
          <CommunityView/>
        </Content>
        

      </Container>
    );
  }
}
