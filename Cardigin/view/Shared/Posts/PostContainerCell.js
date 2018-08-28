import React from "react";
import { Icon } from "react-native-elements";
import {
  View,
  Image,
  ImageBackground,
  StyleSheet,
  Platform,
  Dimensions,
  Animated,
  Easing,
  TouchableWithoutFeedback
} from "react-native";
import { Button, Text } from "native-base";
import { CDGColor } from "../../../common/constants/CDGColor";
const platform = Platform.OS;
const windowWidth = Dimensions.get("window").width;
const AnimatedPostImage = Animated.createAnimatedComponent(ImageBackground);
export default class PostContainerCell extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imageBlurParameter: new Animated.Value(0),
      isShown: false
    };
  }

  flipImageViewBur() {
    if (this.state.isShown) {
      Animated.timing(this.state.imageBlurParameter, {
        toValue: 1,
        easing: Easing.back(),
        duration: 140,
        useNativeDriver: true
      }).start();
      this.state.isShown = false;
    } else {
      Animated.timing(this.state.imageBlurParameter, {
        toValue: 0,
        easing: Easing.back(),
        duration: 140,
        useNativeDriver: true
      }).start();
      this.state.isShown = true;
    }
  }

  render() {
    return (
      <View style={{ flex: 1, flexDirection: "column", paddingBottom: 32 }}>
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            margin: 8
          }}
        >
          <Image
            source={{ uri: this.props.rowData.image }}
            style={{ width: 40, height: 40, borderRadius: 20 }}
          />
          <View
            style={{
              marginLeft: 10,
              marginTop: platform === "ios" ? 3 : 0,
              flexDirection: "column"
            }}
          >
            <Text style={styles.username}>{this.props.rowData.text}</Text>
            <Text style={styles.postTime}>
              {this.props.rowData.time.toUTCString()}
            </Text>
          </View>
        </View>
        <ImageBackground
          style={{
            width: windowWidth,
            height: windowWidth
          }}
          source={{ uri: this.props.rowData.image }}
          resizeMode="cover"
        >
          <AnimatedPostImage
            key={this.props.rowId}
            style={{
              width: windowWidth,
              height: windowWidth,
              opacity: this.state.imageBlurParameter,
              alignItems: "center",
              justifyContent: "center",
              flex: 1
            }}
            source={{ uri: this.props.rowData.image }}
            resizeMode="cover"
            blurRadius={100}
          >
            <TouchableWithoutFeedback
              onPressOut={() => {
                this.flipImageViewBur();
              }}
            >
              <View
                style={{
                  width: windowWidth,
                  height: windowWidth,
                  alignItems: "center",
                  backgroundColor: "white",
                  opacity: 0.6,
                  flexDirection: "column",
                  justifyContent: "space-between"
                }}
              >
                <View
                  style={{
                    backgroundColor: "red",
                    width: windowWidth
                  }}
                >
                  <Text>aaa</Text>
                </View>
                <View
                  style={{
                    width: windowWidth
                  }}
                >
                  <Button
                    iconLeft
                    bordered
                    dark
                    style={{
                      margin: 8,
                      marginTop: 8,
                      marginBottom: 8
                    }}
                  >
                    <Icon name={"add-circle"} style={{ marginLeft: 12 }} />
                    <Text style={{}}>22</Text>
                  </Button>
                </View>
              </View>
            </TouchableWithoutFeedback>
          </AnimatedPostImage>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  username: { color: CDGColor.Prime, fontSize: 18, fontWeight: "700" },
  postTime: { color: "grey", fontSize: 12 }
});
