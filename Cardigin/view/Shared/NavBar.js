import React from "react";
import { Animated, Platform, StyleSheet, Dimensions } from "react-native";
import { Button, Icon } from "native-base";
import { CDGColor } from "../../common/constants/CDGColor";

const platform = Platform.OS;

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const navbarHeight = platform === "ios" ? (windowHeight === 812 ? 88 : 64) : 50;
const statusBarHeight = Platform.select({
  ios: windowHeight === 812 ? 44 : 20,
  android: 0
});

export default class NavBar extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Animated.View
        style={[
          styles.navbar,
          {
            transform: [{ translateY: this.props.navbarTranslate }]
          }
        ]}
      >
        {Platform.select({
          android: (
            <Button
              transparent
              style={{
                position: "absolute"
              }}
              onPress={() => this.props.navigation.openDrawer()}
            >
              <Icon style={{ color: CDGColor.Prime }} name="menu" />
            </Button>
          )
        })}
        <Animated.Text
          style={[styles.title, { opacity: this.props.navbarOpacity }]}
        >
          {this.props.title}
        </Animated.Text>
      </Animated.View>
    );
  }
}

const styles = StyleSheet.create({
  navbar: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    alignItems: "center",
    backgroundColor: "white",
    borderBottomColor: "#dedede",
    borderBottomWidth: 1,
    height: navbarHeight,
    justifyContent: "center",
    paddingTop: statusBarHeight
  },
  title: {
    color: "#333333",
    fontSize: 17,
    fontWeight: "700",
    paddingBottom: platform === "ios" ? 0 : 0,
    alignItems: "center"
  }
});
