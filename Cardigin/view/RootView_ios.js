import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import MIcon from "react-native-vector-icons/MaterialIcons";
import { CDGColor } from "../common/constants/CDGColor";
import CommunityViewBar from "./CommunityView/NavigatorBar";
import ExibitionView from "./ExibitionView/ExibitionView";
import CameraViewBar from "./CameraView/NavigatorBar";
import JournalViewBar from "./JournalView/NavigatorBar";
import SettingViewBar from "./SettingView/NavigatorBar";

import { Container, Footer, FooterTab, Button, Text } from "native-base";

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
          {this.state.page === 0 && <ExibitionView />}
          {this.state.page === 1 && <CommunityViewBar />}
          {this.state.page === 2 && <CameraViewBar />}
          {this.state.page === 3 && <JournalViewBar />}
          {this.state.page === 4 && <SettingViewBar />}
        </View>
        <Footer>
          <FooterTab
            initialPage={0}
            page={this.state.page}
            style={{ marginTop: 11, marginBotton: 0 }}
          >
            <Button
              vertical
              active={this.state.page === 0}
              onPress={() => {
                this.props.screenProps.changePage("Exibition");
                this.setState({ page: 0 });
              }}
              style={{ backgroundColor: "clear" }}
            >
              <Icon
                name="blur"
                size={30}
                color={
                  this.props.screenProps.currentPage === "Exibition"
                    ? CDGColor.Prime
                    : CDGColor.LightGray
                }
              />
              <Text
                style={{
                  paddingLeft: 0,
                  paddingRight: 0,
                  fontWeight: "bold",
                  color:
                    this.props.screenProps.currentPage === "Exibition"
                      ? CDGColor.Prime
                      : CDGColor.LightGray
                }}
              >
                Exibition
              </Text>
            </Button>
            <Button
              vertical
              active={this.state.page === 1}
              onPress={() => {
                this.props.screenProps.changePage("Community");
                this.setState({ page: 1 });
              }}
              style={{ backgroundColor: "clear" }}
            >
              <Icon
                name="view-carousel"
                size={30}
                color={
                  this.props.screenProps.currentPage === "Community"
                    ? CDGColor.Prime
                    : CDGColor.LightGray
                }
              />
              <Text
                style={{
                  paddingLeft: 0,
                  paddingRight: 0,
                  fontWeight: "bold",
                  color:
                    this.props.screenProps.currentPage === "Community"
                      ? CDGColor.Prime
                      : CDGColor.LightGray
                }}
              >
                Community
              </Text>
            </Button>
            <Button
              vertical
              active={this.state.page === 2}
              onPress={() => {
                this.props.screenProps.changePage("Camera");
                this.setState({ page: 2 });
              }}
              style={{
                backgroundColor: "clear",
                borderRadius: 0
              }}
            >
              <Icon
                name="camera"
                size={30}
                color={
                  this.props.screenProps.currentPage === "Camera"
                    ? CDGColor.Prime
                    : CDGColor.LightGray
                }
              />
              <Text
                style={{
                  fontWeight: "bold",
                  color:
                    this.props.screenProps.currentPage === "Camera"
                      ? CDGColor.Prime
                      : CDGColor.LightGray
                }}
              >
                Camera
              </Text>
            </Button>
            <Button
              vertical
              active={this.state.page === 3}
              onPress={() => {
                this.props.screenProps.changePage("Journal");
                this.setState({ page: 3 });
              }}
              style={{ backgroundColor: "clear" }}
            >
              <MIcon
                name="person-pin"
                size={30}
                color={
                  this.props.screenProps.currentPage === "Journal"
                    ? CDGColor.Prime
                    : CDGColor.LightGray
                }
              />
              <Text
                style={{
                  fontWeight: "bold",
                  color:
                    this.props.screenProps.currentPage === "Journal"
                      ? CDGColor.Prime
                      : CDGColor.LightGray
                }}
              >
                Journal
              </Text>
            </Button>
            <Button
              vertical
              active={this.state.page === 4}
              onPress={() => {
                this.props.screenProps.changePage("Setting");
                this.setState({ page: 4 });
              }}
              style={{ backgroundColor: "clear" }}
            >
              <Icon
                name="settings"
                size={30}
                color={
                  this.props.screenProps.currentPage === "Setting"
                    ? CDGColor.Prime
                    : CDGColor.LightGray
                }
              />
              <Text
                style={{
                  fontWeight: "bold",
                  color:
                    this.props.screenProps.currentPage === "Setting"
                      ? CDGColor.Prime
                      : CDGColor.LightGray
                }}
              >
                Setting
              </Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}
