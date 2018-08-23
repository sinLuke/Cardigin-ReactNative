import React, { Component } from "react";
import {
  Text,
  View,
  Image,
  Platform,
  Animated,
  StyleSheet,
  ListView,
  Dimensions
} from "react-native";
import {
  Container,
  Header,
  Body,
  Title,
  Left,
  Button,
  Icon,
  Right,
  Content
} from "native-base";

import ExibitionView from "./ExibitionView";
import { CDGColor } from "../../common/constants/CDGColor";

import posts from "../../fakeData/posts";

const platform = Platform.OS;

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const AnimatedListView = Animated.createAnimatedComponent(ListView);
//Collapsible Navbar
const NAVBAR_HEIGHT =
  platform === "ios" ? (windowHeight === 812 ? 88 : 64) : 50;
const STATUS_BAR_HEIGHT = Platform.select({
  ios: windowHeight === 812 ? 44 : 20,
  android: 0
});

export default class ExibitionViewBar extends React.Component {
  constructor(props) {
    super(props);

    const dataSource = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    const scrollAnim = new Animated.Value(0);
    const offsetAnim = new Animated.Value(0);

    this.state = {
      dataSource: dataSource.cloneWithRows(posts),
      scrollAnim,
      offsetAnim,
      clampedScroll: Animated.diffClamp(
        Animated.add(
          scrollAnim.interpolate({
            inputRange: [0, 1],
            outputRange: [0, 1],
            extrapolateLeft: "clamp"
          }),
          offsetAnim
        ),
        0,
        NAVBAR_HEIGHT - STATUS_BAR_HEIGHT
      )
    };
  }

  _clampedScrollValue = 0;
  _offsetValue = 0;
  _scrollValue = 0;

  componentDidMount() {
    this.state.scrollAnim.addListener(({ value }) => {
      const diff = value - this._scrollValue;
      this._scrollValue = value;
      this._clampedScrollValue = Math.min(
        Math.max(this._clampedScrollValue + diff, 0),
        NAVBAR_HEIGHT - STATUS_BAR_HEIGHT
      );
    });
    this.state.offsetAnim.addListener(({ value }) => {
      this._offsetValue = value;
    });
  }

  componentWillUnmount() {
    this.state.scrollAnim.removeAllListeners();
    this.state.offsetAnim.removeAllListeners();
  }

  _onScrollEndDrag = () => {
    this._scrollEndTimer = setTimeout(this._onMomentumScrollEnd, 250);
  };

  _onMomentumScrollBegin = () => {
    clearTimeout(this._scrollEndTimer);
  };

  _onMomentumScrollEnd = () => {
    const toValue =
      this._scrollValue > NAVBAR_HEIGHT &&
      this._clampedScrollValue > (NAVBAR_HEIGHT - STATUS_BAR_HEIGHT) / 2
        ? this._offsetValue + NAVBAR_HEIGHT
        : this._offsetValue - NAVBAR_HEIGHT;

    Animated.timing(this.state.offsetAnim, {
      toValue,
      duration: 350,
      useNativeDriver: true
    }).start();
  };

  _renderRow = (rowData, sectionId, rowId) => {
    return (
      <View style={{ flex: 1, flexDirection: "column", paddingTop: 32 }}>
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            margin: 8
          }}
        >
          <Image
            source={{ uri: rowData.image }}
            style={{ width: 40, height: 40, borderRadius: 20 }}
          />
          <View
            style={{
              marginLeft: 10,
              marginTop: platform === "ios" ? 3 : 0,
              flexDirection: "column"
            }}
          >
            <Text style={styles.username}>{rowData.text}</Text>
            <Text style={styles.postTime}>{rowData.time.toUTCString()}</Text>
          </View>
        </View>
        <Image
          key={rowId}
          style={styles.postImage}
          source={{ uri: rowData.image }}
          resizeMode="cover"
        />
      </View>
    );
  };

  render() {
    const { clampedScroll } = this.state;

    const navbarTranslate = clampedScroll.interpolate({
      inputRange: [0, NAVBAR_HEIGHT - STATUS_BAR_HEIGHT],
      outputRange: [0, -(NAVBAR_HEIGHT - STATUS_BAR_HEIGHT)],
      extrapolate: "clamp"
    });

    const floatButtonTranslate = clampedScroll.interpolate({
      inputRange: [0, NAVBAR_HEIGHT - STATUS_BAR_HEIGHT],
      outputRange: [0, NAVBAR_HEIGHT * 2],
      extrapolate: "clamp"
    });

    const navbarOpacity = clampedScroll.interpolate({
      inputRange: [0, NAVBAR_HEIGHT - STATUS_BAR_HEIGHT],
      outputRange: [1, 0],
      extrapolate: "clamp"
    });

    return (
      <View style={styles.fill}>
        <AnimatedListView
          contentContainerStyle={styles.contentContainer}
          dataSource={this.state.dataSource}
          renderRow={this._renderRow}
          scrollEventThrottle={1}
          onMomentumScrollBegin={this._onMomentumScrollBegin}
          onMomentumScrollEnd={this._onMomentumScrollEnd}
          onScrollEndDrag={this._onScrollEndDrag}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { y: this.state.scrollAnim } } }],
            { useNativeDriver: true }
          )}
        />
        <Animated.View
          style={[
            styles.navbar,
            {
              transform: [{ translateY: navbarTranslate }]
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
          <Animated.Text style={[styles.title, { opacity: navbarOpacity }]}>
            Exibition
          </Animated.Text>
        </Animated.View>
        <Animated.View
          style={{
            position: "absolute",

            bottom: 16,
            right: 16,
            transform: [{ translateY: floatButtonTranslate }]
          }}
        >
          {Platform.select({
            android: (
              <Button
                iconLeft
                style={{ backgroundColor: CDGColor.Prime, borderRadius: 30 }}
              >
                <Icon
                  name="ios-add-circle"
                  style={{ marginLeft: 12, color: "white" }}
                />
                <Text
                  style={{ paddingLeft: 0, paddingRight: 22, color: "white" }}
                >
                  Camera
                </Text>
              </Button>
            )
          })}
        </Animated.View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  fill: {
    flex: 1
  },
  navbar: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    alignItems: "center",
    backgroundColor: "white",
    borderBottomColor: "#dedede",
    borderBottomWidth: 1,
    height: NAVBAR_HEIGHT,
    justifyContent: "center",
    paddingTop: STATUS_BAR_HEIGHT
  },
  contentContainer: {
    paddingTop: NAVBAR_HEIGHT
  },
  title: {
    color: "#333333",
    fontSize: 17,
    fontWeight: "700",
    paddingBottom: platform === "ios" ? 0 : 0,
    alignItems: "center"
  },
  row: {
    height: 300,
    width: null,
    marginBottom: 1,
    padding: 16,
    backgroundColor: "transparent"
  },
  username: { color: CDGColor.Prime, fontSize: 18, fontWeight: "700" },
  postTime: { color: "grey", fontSize: 12 },
  rowText: {
    color: "white",
    fontSize: 18
  },
  postImage: {
    width: windowWidth,
    height: windowWidth,
    marginBottom: 1
  }
});
