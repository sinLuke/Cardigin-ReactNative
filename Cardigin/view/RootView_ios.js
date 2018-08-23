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
        <View style={{ flex: 1 }}>
          {this.state.page === 0 && <ExibitionViewBar />}
          {this.state.page === 1 && <CommunityViewBar />}
          {this.state.page === 3 && <CameraViewBar />}
          {this.state.page === 4 && <JournalViewBar />}
          {this.state.page === 5 && <SettingViewBar />}
        </View>
        <Footer>
          <FooterTab initialPage={0} page={this.state.page}>
            <Button
              vertical
              active={this.state.page === 0}
              onPress={() => this.setState({ page: 0 })}
              style={{ backgroundColor: "clear" }}
            >
              <Icon name="ios-aperture" />
              <Text>Exibition</Text>
            </Button>
            <Button
              vertical
              active={this.state.page === 1}
              onPress={() => this.setState({ page: 1 })}
              style={{ backgroundColor: "clear" }}
            >
              <Icon name="ios-albums" />
              <Text style={{ paddingLeft: 0, paddingRight: 0 }}>Community</Text>
            </Button>
            <Button
              vertical
              active={this.state.page === 2}
              onPress={() => this.setState({ page: 2 })}
              style={{
                backgroundColor: "clear",
                borderRadius: 0
              }}
            >
              <Icon name="ios-add-circle" />
              <Text>Camera</Text>
            </Button>
            <Button
              vertical
              active={this.state.page === 3}
              onPress={() => this.setState({ page: 3 })}
              style={{ backgroundColor: "clear" }}
            >
              <Icon name="ios-contact" />
              <Text>Journal</Text>
            </Button>
            <Button
              vertical
              active={this.state.page === 4}
              onPress={() => this.setState({ page: 4 })}
              style={{ backgroundColor: "clear" }}
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
