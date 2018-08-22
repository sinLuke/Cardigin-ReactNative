import React from "react";
import { AppRegistry, Image, StatusBar } from "react-native";
import {
  Button,
  Text,
  Container,
  List,
  ListItem,
  Content,
  Icon,
  Footer
} from "native-base";

import cardiginText from "../assets/images/cardiginText.png";
import cargigin_bk from "../assets/images/cargigin_bk.png";

export default class SideBar_android extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props);
  }
  render() {
    var dataOfList = [
      {
        name: "Exibition",
        icon: "ios-aperture",
        routes: "ExibitionView",
        color:
          this.props.screenProps.currentPage === "Exibition"
            ? "black"
            : "#A1A1A1"
      },
      {
        name: "Community",
        icon: "ios-albums",
        routes: "CommunityView",
        color:
          this.props.screenProps.currentPage === "Community"
            ? "black"
            : "#A1A1A1"
      },
      {
        name: "Journal",
        icon: "ios-contact",
        routes: "JournalView",
        color:
          this.props.screenProps.currentPage === "Journal" ? "black" : "#A1A1A1"
      },
      {
        name: "Setting",
        icon: "ios-settings",
        routes: "SettingView",
        color:
          this.props.screenProps.currentPage === "Setting" ? "black" : "#A1A1A1"
      }
    ];

    console.log(dataOfList);
    return (
      <Container>
        <Content>
          <Image
            source={cargigin_bk}
            style={{
              height: 120,
              width: "100%",
              alignSelf: "stretch",
              position: "absolute"
            }}
          />
          <Image
            square
            style={{
              resizeMode: "contain",
              height: 100,
              width: 180,
              position: "absolute",
              alignSelf: "center",
              top: 20
            }}
            source={cardiginText}
          />
          <List
            dataArray={dataOfList}
            contentContainerStyle={{ marginTop: 120 }}
            renderRow={data => {
              return (
                <ListItem
                  button
                  onPress={() => {
                    this.props.navigation.navigate(data.routes);
                    console.log(this.props.screenProps);
                    this.props.screenProps.changePage(data.name);
                  }}
                >
                  <Icon
                    name={data.icon}
                    style={{
                      paddingRight: 16,
                      color: data.color
                    }}
                  />
                  <Text
                    style={{
                      color: data.color
                    }}
                  >
                    {data.name}
                  </Text>
                </ListItem>
              );
            }}
          />
        </Content>
      </Container>
    );
  }
}
