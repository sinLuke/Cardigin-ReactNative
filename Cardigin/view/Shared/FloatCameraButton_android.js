import React from "react";
import { Animated, Platform } from "react-native";
import { Button, Icon, Text } from "native-base";
import { CDGColor } from "../../common/constants/CDGColor";

export default class FloatCameraButton extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Animated.View
        style={{
          position: "absolute",

          bottom: 16,
          right: 16,
          transform: [{ translateY: this.props.floatButtonTranslate }]
        }}
      >
        <Button
          onPress={() => {
            this.props.navigation.navigate("CameraView");
            this.props.screenProps.changePage("Camera");
          }}
          iconLeft
          style={{ backgroundColor: CDGColor.Prime, borderRadius: 30 }}
        >
          <Icon
            name={this.props.iconName}
            style={{ marginLeft: 12, color: "white" }}
          />
          <Text style={{ paddingLeft: 0, paddingRight: 22, color: "white" }}>
            {this.props.label}
          </Text>
        </Button>
      </Animated.View>
    );
  }
}
