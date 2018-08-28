import React from "react";
import { View, Platform, Animated, StyleSheet, Dimensions } from "react-native";

import FloatCameraButton from "../Shared/FloatCameraButton_android";

//thisPage components
import NavBar from "../Shared/NavBar";
import ExibitionTable from "./ExibitionTable";

const platform = Platform.OS;

const windowHeight = Dimensions.get("window").height;

//Collapsible Navbar
const navbarHeight = platform === "ios" ? (windowHeight === 812 ? 88 : 64) : 50;
const statusBarHeight = Platform.select({
  ios: windowHeight === 812 ? 44 : 20,
  android: 0
});

export default class ExibitionView extends React.Component {
  constructor(props) {
    super(props);

    const scrollAnim = new Animated.Value(0);
    const offsetAnim = new Animated.Value(0);

    this.state = {
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
        navbarHeight - statusBarHeight
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
        navbarHeight - statusBarHeight
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
      this._scrollValue > navbarHeight &&
      this._clampedScrollValue > (navbarHeight - statusBarHeight) / 2
        ? this._offsetValue + navbarHeight
        : this._offsetValue - navbarHeight;

    Animated.timing(this.state.offsetAnim, {
      toValue,
      duration: 350,
      useNativeDriver: true
    }).start();
  };

  render() {
    const { clampedScroll } = this.state;

    const navbarTranslate = clampedScroll.interpolate({
      inputRange: [0, navbarHeight - statusBarHeight],
      outputRange: [0, -(navbarHeight - statusBarHeight)],
      extrapolate: "clamp"
    });

    const floatButtonTranslate = clampedScroll.interpolate({
      inputRange: [0, navbarHeight - statusBarHeight],
      outputRange: [0, navbarHeight * 2],
      extrapolate: "clamp"
    });

    const navbarOpacity = clampedScroll.interpolate({
      inputRange: [0, navbarHeight - statusBarHeight],
      outputRange: [1, 0],
      extrapolate: "clamp"
    });

    return (
      <View style={styles.fill}>
        <ExibitionTable
          onMomentumScrollBegin={this._onMomentumScrollBegin}
          onMomentumScrollEnd={this._onMomentumScrollEnd}
          onScrollEndDrag={this._onScrollEndDrag}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { y: this.state.scrollAnim } } }],
            { useNativeDriver: true }
          )}
        />
        <NavBar
          navigation={this.props.navigation}
          navbarHeight={navbarHeight}
          statusBarHeight={statusBarHeight}
          navbarOpacity={navbarOpacity}
          navbarTranslate={navbarTranslate}
          title="Exibition"
        />
        {Platform.select({
          android: (
            <FloatCameraButton
              navigation={this.props.navigation}
              screenProps={this.props.screenProps}
              floatButtonTranslate={floatButtonTranslate}
              iconName="ios-add-circle"
              label="camera"
            />
          )
        })}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  fill: {
    flex: 1
  }
});
