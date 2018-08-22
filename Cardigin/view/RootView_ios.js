import React, { Component } from "react";
import { Platform, StyleSheet, View } from "react-native";
import CommunityViewBar from "./CommunityView/NavigatorBar";
import ExibitionViewBar from "./ExibitionView/NavigatorBar";
import CameraViewBar from "./CameraView/NavigatorBar";
import JournalViewBar from "./JournalView/NavigatorBar";
import SettingViewBar from "./SettingView/NavigatorBar";
import { CDGColor } from "../common/constants/CDGColor";

import {
  Container,
  Header,
  Left,
  Body,
  Right,
  Title,
  Subtitle,
  Content,
  Footer,
  FooterTab,
  Button,
  Icon,
  Text
} from "native-base";

type Props = {};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  wrapper: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  }
});

export default class RootView_ios extends Component {
  constructor() {
    super();
    this.state = {
      page: 0
    };
  }

  render() {
    return (
      <Container>
        <Content>
          {this.state.page === 0 && <ExibitionViewBar />}
          {this.state.page === 1 && <CommunityViewBar />}
          {this.state.page === 2 && <JournalViewBar />}
          {this.state.page === 3 && <SettingViewBar />}
        </Content>
        <Footer>
          <FooterTab initialPage={0} page={this.state.page}>
            <Button
              vertical
              active={this.state.page === 0}
              onPress={() => this.setState({ page: 0 })}
            >
              <Icon name="ios-aperture" />
              <Text style={{ fontSize: 10 }}>Exibition</Text>
            </Button>
            <Button
              vertical
              active={this.state.page === 1}
              onPress={() => this.setState({ page: 1 })}
            >
              <Icon name="ios-albums" />
              <Text>Community</Text>
            </Button>
            <Button
              vertical
              active={this.state.page === 2}
              onPress={() => this.setState({ page: 2 })}
            >
              <Icon name="ios-contact" />
              <Text>Journal</Text>
            </Button>
            <Button
              vertical
              active={this.state.page === 3}
              onPress={() => this.setState({ page: 3 })}
            >
              <Icon name="ios-settings" />
              <Text>Setting</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}
